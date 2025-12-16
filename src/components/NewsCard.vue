<template>
  <div class="bg-white p-4 rounded shadow">
    <h2 class="font-semibold text-lg">
      {{ article.title }}
    </h2>

    <p class="text-sm text-gray-600 mt-2">
      {{ article.description }}
    </p>

    <a
      :href="article.url"
      target="_blank"
      class="inline-block mt-3 text-blue-600 text-sm hover:underline"
    >
      Baca selengkapnya →
    </a>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>
