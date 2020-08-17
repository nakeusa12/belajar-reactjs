import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Table, Button, Container, NavLink, Alert } from 'reactstrap';


export const HooksEffect = () => {
    const api = 'http://localhost:3001'

    const [mahasiswa, setMahasiswa] = useState([])

    useEffect(() => {
        axios.get(api + '/tampil').then(res => {
            setMahasiswa(res.data.values)
        })
    }, [])

    return (
        <Container>
            <h2>Data Mahasiswa</h2>

            <hr />
            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Jurusan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {mahasiswa.map(mahasiswa =>
                        <tr key={mahasiswa.id_mahasiswa}>
                            <td>{mahasiswa.nim}</td>
                            <td>{mahasiswa.nama}</td>
                            <td>{mahasiswa.jurusan}</td>
                            <td>

                                <Button>Edit</Button>

                                <span> </span>
                                <Button color="danger" >Delete</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}
