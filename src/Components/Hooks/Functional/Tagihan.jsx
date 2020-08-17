import React, { useContext } from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import { KeranjangContext } from '../../../App'


export const Tagihan = () => {
    const countContext = useContext(KeranjangContext);

    return (
        <Container>
            <Jumbotron>
                <h1 className="display-3">Tagihan</h1>
                <p className="lead">({countContext.keranjangState.jumlah}x) Action Figure Sasuke</p>
                <hr className="my-2" />
                <p>Harga Total Rp. {countContext.keranjangState.hargaTotal}</p>
                <p className="lead">
                    <Button color="primary">Lanjut Pembayaran</Button>
                </p>
            </Jumbotron>
        </Container>
    )
}
