import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

const BebidasContext = createContext()

const BebidasProvider = ({children}) => {
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [idBebida, setIdBebida] = useState(null)
    const [receta, setReceta] = useState({})

    console.log(idBebida)

    useEffect(() => {
        const obtenerReceta = async() => {
            if(!idBebida) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebida}`
                const{data} = await axios(url)
                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            }
        }
        obtenerReceta()
    },[idBebida])


         //funcion para hacer la peticion 
    const consultarBebidas = async(datos ) => {

        try {
            const { nombre, categoria } = datos
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}&limit=2`
            const {data} = await axios(url)
            setBebidas(data.drinks)
 
        } catch (error) {
            console.log(error)
        }
    }

    const handleModal = () => {
        setModal(!modal)

    }
    const handleBebidaId = ( id   ) => {
        setIdBebida(id)

    }
    
        return (
            <BebidasContext.Provider 
                value={{
                    consultarBebidas,
                    bebidas,
                    handleModal,
                    modal,
                    handleBebidaId,
                    receta
                }}
            >

            {children}
            </BebidasContext.Provider>
        )
    
}
export {
    BebidasProvider
}

export default BebidasContext