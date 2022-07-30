import {useContext} from 'react'
import { Row } from 'react-bootstrap'
import Bebida from './Bebida'

import BebidasContext from '../context/BebidasProvider'

const ListadoBebidas = () => {

    const {bebidas} = useContext(BebidasContext)

  return (

    <Row className='mt-5'>
        {
            bebidas.map((bebida) => (
                <Bebida 
                    key={bebida.idDrink}
                    bebida={bebida}
                />
            ))
        }
    </Row>
  )
}



export default ListadoBebidas