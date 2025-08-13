
export const getShortLink = async () => {

    const apiUrl = import.meta.env.VITE_API_URL

    const response = await fetch(`${apiUrl}/IdLink`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputUrl })
    })

    console.log('prueba de paso')
    const shortLink = await response.json()

    return shortLink

}
