
export const postShortLink = async (inputUrl: string) => {

  const apiUrl = import.meta.env.VITE_API_URL

  try {

    const response = await fetch(`${apiUrl}/createIdLink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputUrl })
    })

    const shortLink = await response.json()

    if (shortLink.error) throw new Error(shortLink.error)

    return shortLink

  } catch (error) {

    return ({error})

  }

}