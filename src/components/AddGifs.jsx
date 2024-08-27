import { useState } from "react"
import getGifs from "../helpers/getGifs"

export const AddGifs = ({ onAddGifs }) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()

        const value = inputValue.trim()
        if(value.length <= 0) return

        getGifs(value).then( (gifs) => {
            onAddGifs(gifs)
        })

        setInputValue('')
    }

    const onResetSearch = () => {
        setInputValue('')
        onAddGifs([]) 
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
            <button type="button" title="Eliminar búsqueda" onClick={ onResetSearch}>&times;</button>
        </form>
    )
}