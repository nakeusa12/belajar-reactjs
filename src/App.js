import React, {useState, createContext, useReducer} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { NavbarComp } from './Components/Fungsional/NavbarComp';
import { HomePage } from './Components/Fungsional/HomePage';
import { AboutComp } from './Components/Fungsional/AboutComp';
// import { DetailComp } from './Components/Fungsional/DetailComp';
import ListComp from './Components/Class/ListComp';
import TambahComp from './Components/Class/TambahComp';
import EditCOmp from './Components/Class/EditCOmp';
import KelasComp from './Components/Hooks/Class/KelasComp';
import HookComp from './Components/Hooks/Functional/HookComp';
import { HooksEffect } from './Components/Hooks/Functional/HooksEffect';
import { CartContext } from './CartContext';
import { ProductComp } from './Components/Hooks/Functional/ProductComp';
import { HookReducer } from './Components/Hooks/Functional/HookReducer';
import { Tagihan } from './Components/Hooks/Functional/Tagihan';

export const KeranjangContext = createContext();
const initialState = {
  jumlah: 1,
  hargaSatuan: 10000,
  hargaTotal: 10000
}

const reducer = (state, action) => {
  switch (action.type) {
      case 'tambah': return {
          ...state,
          jumlah: state.jumlah + 1,
          hargaTotal: state.hargaSatuan + (state.hargaSatuan * state.jumlah)
      }
      case 'kurang': return {
          ...state,
          jumlah: state.jumlah - 1,
          hargaTotal: (state.hargaSatuan * state.jumlah) - state.hargaSatuan
      }
      default:
          return state
  }
}

const App = () => {

  const [value, setValue] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);


  return (
    <Router>
      <CartContext.Provider value={{value, setValue}}>

        <NavbarComp />
        <KeranjangContext.Provider value={{keranjangState: count, keranjangDispatch: dispatch}}>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutComp} />
          <Route exact path="/mahasiswa" component={ListComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp} />
          <Route exact path="/mahasiswa/edit" component={EditCOmp} />
          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/hooks" component={HookComp} />
          <Route exact path="/useeffect" component={HooksEffect} />
          <Route exact path="/produk" component={ProductComp} />
          <Route exact path="/reducer" component={HookReducer} />
          <Route exact path="/tagihan" component={Tagihan} />
        

          {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
        </Switch>

        </KeranjangContext.Provider>
      </CartContext.Provider>
    </Router>
  );
}

export default App;