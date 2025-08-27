
export const postShortLink = async (inputUrl: string) => {

  //URL base de la api
  const apiUrl = import.meta.env.VITE_API_URL

  try {
    //Peticion POST al backend
    const response = await fetch(`${apiUrl}/createIdLink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputUrl })
    })

    //si la respuesta no es ok, lanzamos error
    if (!response.ok) {

      throw new Error(`${response.status}`)

    }

    //parseamos la respuesta a un json valido
    const shortLink = await response.json()

    //validamos si el backend devolvio error
    if (shortLink.error) throw new Error(shortLink.error)

    return shortLink

  } catch (error) {

    //si ocurre un error extraemos el mensaje
    //si el mensaje el Failed to fectch, se cambia a uno entendible
    let message = error instanceof Error ? error.message : 'Error Desconocido'

    message = message === 'Failed to fetch' ? 'Error al conectarse con el servicio' : message
    //devolvemos el objeto con el error para manejarlo en el frontend
    return ({ error: message })

  }

}