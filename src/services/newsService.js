const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export async function fetchTopHeadlines() {
  const response = await fetch(
    `/api/v2/top-headlines?country=id&pageSize=10&apiKey=${API_KEY}`
  )

  const data = await response.json()
  return data.articles || []
}

export async function searchNews(query) {
  const response = await fetch(
    `/api/v2/everything?q=${query}&pageSize=10&apiKey=${API_KEY}`
  )

  const data = await response.json()
  return data.articles || []
}
