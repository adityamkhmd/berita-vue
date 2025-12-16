const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const BASE_URL = 'https://newsapi.org/v2/top-headlines'

export async function fetchTopHeadlines() {
  const url = `${BASE_URL}?country=id&pageSize=10&apiKey=${API_KEY}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Gagal mengambil data berita')
  }

  const data = await response.json()
  return data.articles
}

