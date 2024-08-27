import { GifCard } from "./GifCard"

export const GiftGrid = ({ gifs, setBigGif }) => {
    return (
        <div className="grid">
            {
                gifs.length === 0 ? <p className="no-result">No hay gifs para mostrar, realiza una búsqueda.</p> :
                gifs.map( (gif, index) => {
                    return <GifCard key={ index } gif={ gif } setBigGif={ setBigGif } />
                })
            }
        </div>
    )
}