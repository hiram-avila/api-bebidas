import {useContext} from 'react'
import {Col, Card, Button} from 'react-bootstrap'
import BebidasContext from '../context/BebidasProvider'

const Bebida = ({bebida}) => {
    
    const {handleModal, handleBebidaId} = useContext(BebidasContext)

  return (
    <Col md={6} lg={4}>
        <Card className='mb-4 mt-3'>
            <Card.Img
                variant='top'
                src={bebida.strDrinkThumb}
                alt={bebida.strDrink}
            />
        </Card>

        <Card.Body>
            <Card.Title> {bebida.strDrink} </Card.Title>

            <Button
                variant={'warning'}
                className='w-100 text-uppercase mt-3'
                onClick={()=>{
                    handleModal()
                    handleBebidaId(bebida.idDrink)
                }}
            >
                Ver receta
            </Button>
        </Card.Body>

    </Col>

  )
}



export default Bebida