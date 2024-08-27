const getGifs = async (category) => {
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=21`
    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        urlGiphy: img.images.downsized_medium.url,
        url: `https://i.giphy.com/${ img.id }.webp`
    }))

    return gifs
}

export default getGifs