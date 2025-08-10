
export const postShortLink = async (inputUrl: string) => {

  const apiUrl = import.meta.env.VITE_API_URL
  
  const response = await fetch(`${apiUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inputUrl })
  })

  const shortLink = await response.json()

  return shortLink

}
