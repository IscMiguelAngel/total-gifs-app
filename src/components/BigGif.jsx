import { GifCard } from "./GifCard"

export const BigGif = ({ gif, setBigGif, isBig }) => {
    const handle = (e) => {
        e.stopPropagation()
        setBigGif({ isBig: false, gif: {} })
    }

    return (
        <div className="big-gif">
            <button className="close-button" onClick={ handle }>&times;</button>
            <GifCard key={ 1 } isBig={ isBig } gif={ gif } />
        </div>
    )
}