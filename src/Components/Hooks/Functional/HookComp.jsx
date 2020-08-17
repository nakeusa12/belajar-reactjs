import React, { useState } from 'react'
import TampilComp from './TampilComp';

const HookComp = () => {
    const [jumlah, setJumlah] = useState(0);

    // login
    const [login, setLogin] = useState({username: 'firda', token: '123asd', isLogin: false});


    // Cek Kondisi Sudah Login / Belum

    let tampil;

    if(login.isLogin){
        tampil = <TampilComp
            username = {login.username}
            fungsi = {setJumlah.bind(this)}
            jumlah = {jumlah}
        />
    } else{
        tampil = <TampilComp
            username="Maaf Anda Belum Login"
            disabled = {true}
        />
    }


    return (
        <div>
            {tampil}   
        </div>
    )
}

export default HookComp
