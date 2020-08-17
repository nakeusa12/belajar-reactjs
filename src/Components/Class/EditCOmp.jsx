import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import qs from "querystring";
import { Container, Col, Row,Form, FormGroup, Alert, Label, Input, Button} from "reactstrap";


const api = 'http://localhost:3001';

export default class EditCOmp extends Component {
    constructor(props){
        super(props)

        // State Ini mengambil data dari listComp baru di func ubahMahasiswa di tampung datanya
        this.state = {
            id_mahasiswa: this.props.location.state.id_mahasiswa,
            nim: this.props.location.state.nim,
            nama: this.props.location.state.nama,
            jurusan: this.props.location.state.jurusan,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    ubahMahasiswa = (idmahasiswa) => {
        // menampung data dari listComp
        const data = qs.stringify({
            id_mahasiswa: idmahasiswa,
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan
        });

        axios.put(api+"/ubahdata", data).then(json => {
            if(json === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else{
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4>Ubah data mahasiswa</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label for="nim">NIM</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="nim" onChange={this.handleChange} value={this.state.nim} placeholder="Masukan NIM" />
                            </Col>
                        </FormGroup>
                        <Label for="nama">Nama</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="nama" onChange={this.handleChange} value={this.state.nama} placeholder="Masukan Nama" />
                            </Col>
                        </FormGroup>
                        <Label for="jurusan">Jurusan</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="jurusan" onChange={this.handleChange} value={this.state.jurusan} placeholder="Masukan Jurusan" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Row>
                            <Col>
                                <button type="button" onClick={() => this.ubahMahasiswa(this.state.id_mahasiswa)} className="btn btn-success">Submit</button>
                            </Col>
                            <Col>
                                <Button color="danger">Reset</Button>{' '}
                            </Col>
                            <Col>
                                <Link to='/mahasiswa'><Button color="secondary">Kembali</Button></Link>
                            </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}
