import { useState } from "react"

import { AddGifs, GiftGrid, BigGif } from "./components"

export const TotalGifsApp = () =>  {

    const [ gifs, setGifs ] = useState([])
    const [ bigGif, setBigGif ] = useState({
        isBig: false,
        gif: {}
    })

    const onAddGifs = (newGifs) => {
        if(gifs.includes(newGifs)) return

        setGifs(newGifs)
    }

    return (
        <>
            <h1>TotalGifsApp</h1>
            <AddGifs onAddGifs={ onAddGifs } />
            
            <GiftGrid gifs={ gifs} setBigGif={ setBigGif } />

            { bigGif.isBig ? <BigGif gif={ bigGif.gif } setBigGif={ setBigGif } isBig={ bigGif.isBig } /> : null }
        </>
    )
}