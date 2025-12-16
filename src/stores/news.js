import { defineStore } from 'pinia'
import { fetchTopHeadlines } from '../services/newsService'

export const useNewsStore = defineStore('news', {
  state: () => ({
    articles: [],
    loading: false,
    error: null,
  }),

  actions: {
    async loadNews() {
      this.loading = true
      this.error = null

      try {
        const articles = await fetchTopHeadlines()
        this.articles = articles
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
  },
})
