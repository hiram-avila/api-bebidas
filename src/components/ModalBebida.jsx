import { useContext } from 'react'
import {Modal, Image} from 'react-bootstrap'
import BebidasContext, { BebidasProvider } from '../context/BebidasProvider'

const ModalBebida = () => {

    const {modal, handleModal,receta} = useContext(BebidasContext)
    console.log(receta)
  
  return (
    <Modal show={modal} onHide={handleModal}>
        <Image 
            src={receta.strDrinkThumb}
            alt={receta.strDrink}
        />
        <Modal.Header>
            <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>


        <Modal.Body>
            <div className="p-3">
                <h2>Instrucciones</h2>
                <h2>Ingredientes y cantidades</h2>
            </div>
        </Modal.Body>

    </Modal>
  )
}

export default ModalBebida