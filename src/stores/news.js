import { fetchTopHeadlines, searchNews } from '../services/newsService'

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
        this.articles = await fetchTopHeadlines()
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },

    async search(query) {
      if (!query) return this.loadNews()

      this.loading = true
      this.error = null

      try {
        this.articles = await searchNews(query)
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
  },
})

import { defineStore } from 'pinia'
