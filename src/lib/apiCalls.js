const key = '268fc9b134ba43c6b9a4a1d1e30fde70'
const headlines = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='

export const getHeadlines = async () => {
  const request = await fetch(headlines + key)

  .then(response=> {
    if (!response.ok) {
      throw new Error(response.status)
    } else {
      const data = response.json()
      console.log(data)
      return data
    }
  })
  .catch(error=> console.log(error))
  return await request;
}

export const getSearch = async (query) => {
  const everything = `https://newsapi.org/v2/everything?q=${query}&apiKey=${key}`
  const request = await fetch(everything)
  .then(response=> {
    if (!response.ok) {
      throw new Error(response.status)
    } else {
      const data = response.json()
      console.log(data)
      return data
    }
  })
  .catch(error=> console.log(error))
  return await request
}