import { DownloadButton } from "./DownloadButton"

export const GifCard = ({ gif, setBigGif, isBig = false }) => {

    const handle = (isBig) => {
        if(!isBig)
            setBigGif({
                isBig: true,
                gif: gif
            })
    }

    return <div className={`gif-card ${ isBig ? 'biggest' : '' }`} key={ gif.id } onClick={ (e) => handle(isBig, e) } title={`${ !isBig ? "Ver en grande" : "" }`}>
        <img className="gif" src={ gif.url } alt={ gif.title } />
        <p className="title">{ gif.title }</p>
        <DownloadButton url={ gif.url } title={ gif.title } />
    </div>
}