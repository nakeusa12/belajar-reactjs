import React, { Component } from 'react'
import Produk from './Produk'

export default class Beranda extends Component {
    render() {
        return (
            <div> 
                <Produk nama="Handphone Iphone 12" stock="90" harga="$34564000" />
                <Produk nama="Handphone Mac 12" stock="1770" harga="$30600" />
                <Produk nama="Laptop Asus" stock="10" harga="$300" />
                <Produk nama="Hallo Iphone 12" stock="102" harga="$30060" />
                <Produk nama="Ijo Xiomay 1w12" stock="150" harga="$30540" />
            </div>
        )
    }
}
