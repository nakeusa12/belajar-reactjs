import React, { useReducer } from 'react'
import { Container, Row, Col, Card, CardImg, Button } from 'reactstrap'
import {NavLink} from "react-router-dom"
import { useContext } from 'react'
import { KeranjangContext } from '../../../App'


export const HookReducer = () => {
    const countContext = useContext(KeranjangContext);

    return (
        <Container>
            <br />
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                    </Card>
                </Col>
                <Col xs="6">
                    <h3>Action Figure Sasuke</h3>
                    <p>Harga : </p>
                    <h4>Rp. {countContext.keranjangState.hargaSatuan}</h4>
                    <p>Jumlah</p>
                    <Row>
                        <Col xs="3"><Button onClick={() => countContext.keranjangDispatch({ type: 'kurang' })}>-</Button></Col>
                        <Col xs="3" className="center">{countContext.keranjangState.jumlah}</Col>
                        <Col xs="3"><Button onClick={() => countContext.keranjangDispatch({ type: 'tambah' })} color="danger">+</Button></Col>
                    </Row>
                    <Button color="success" className="mt-5">Total Rp. {countContext.keranjangState.hargaTotal}</Button>
                    <hr/>
                    <NavLink to="/tagihan">Beli Barang</NavLink>
                </Col>
            </Row>
        </Container>
    )
}
