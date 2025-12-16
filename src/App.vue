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
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-2xl font-bold mb-6">Berita Terkini</h1>

    <div v-if="newsStore.loading">
      Loading berita...
    </div>

    <div v-else-if="newsStore.error" class="text-red-600">
      {{ newsStore.error }}
    </div>

    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <NewsCard
        v-for="article in newsStore.articles"
        :key="article.url"
        :article="article"
      />
    </div>
  </div>
</template>
