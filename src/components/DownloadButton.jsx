export const DownloadButton = ({ url, title }) => {
    const handleDownload = (e) => {
        e.preventDefault() // Evita que se recargue la página al hacer clic en el enlace
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', `${ title }.gif`) // Nombre del archivo
                document.body.appendChild(link)
                link.click()
                link.parentNode.removeChild(link)
            })
            .catch(err => console.error('Error al descargar el GIF:', err))
    }

    return <a className="download-button" href={ url } onClick={ handleDownload } title={`Descargar ${ title }`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
    </a>
}