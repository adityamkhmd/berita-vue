<script setup>
import { onMounted } from 'vue'
import { useNewsStore } from './stores/news'
import NewsCard from './components/NewsCard.vue'

const newsStore = useNewsStore()

onMounted(() => {
  newsStore.loadNews()
})
</script>

<template>

  <input
  type="text"
  placeholder="Cari berita..."
  class="w-full mb-6 p-3 rounded border"
  @input="newsStore.search($event.target.value)"
/>

 <div v-if="newsStore.loading" class="text-center text-gray-500">
  Loading berita...
</div>

<div v-else-if="newsStore.error" class="text-center text-red-500">
  {{ newsStore.error }}
</div>

<div v-else-if="newsStore.articles.length === 0" class="text-center text-gray-500">
  Tidak ada berita ditemukan.
</div>

<div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  <NewsCard
    v-for="article in newsStore.articles"
    :key="article.url"
    :article="article"
  />
</div>
</template>
