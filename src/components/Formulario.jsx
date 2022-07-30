import {useContext, useState} from'react'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import BebidasContext from '../context/BebidasProvider'
import CategoriasContext from '../context/CategoriasProvider'

const Formulario = () => {
        //state del form
    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    })
        //alerta de los campos
    const [alerta, setAlerta] = useState('')
        //importar la info del context
    const {categorias} = useContext(CategoriasContext)
    const {consultarBebidas} = useContext(BebidasContext)


      //manejar campos del formukario
    const handleOnchange = (e) =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }
        //manejar el submit
    const handleOnsubmit = (e) =>{
        e.preventDefault()
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarBebidas(busqueda)
    }


    return (
        <Form
            onSubmit={handleOnsubmit}
        >
            {
                alerta && <Alert variant="danger text-center" >{alerta}</Alert>
            }

            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='nombre'>Categoria bebida</Form.Label>

                        <Form.Control 
                            type="text"
                            id="nombre"
                            placeholder="Ej: tequila"
                            name="nombre"
                            value={busqueda.nombre}
                            onChange={handleOnchange}
                        />
                    </Form.Group>
                </Col>


                <Col md={6}>
                <Form.Group className='mb-3'>
                        <Form.Label htmlFor='categoria'>Nombre bebida</Form.Label>
                            <Form.Select
                                id="categoria"
                                name="categoria"
                                value={busqueda.categoria}
                                onChange={handleOnchange}
                            >
                                <option>Selecciona categoria</option>
                                {
                                    categorias.map(categoria => (
                                         <option key={categoria.strCategory} value={categoria.strCategory}>
                                            {categoria.strCategory}
                                        </option>
                                    ))
                                }
                                
                            </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-end">
                <Col md={3}>
                    <Button variant="danger" className="text-uppercase w-100" type="submit">
                        Buscar bebidas
                    </Button>
                </Col>
            </Row>
        </Form>

    )

}



export default Formulario