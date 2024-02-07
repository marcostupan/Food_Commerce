import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import { BurgersPage } from './pages/Main/Burgers'
import { Pizzas } from './pages/Main/Pizzas';
import { Drinks } from './pages/Main/Drinks';
import { IceCreams } from './pages/Main/IceCreams';
import MyCartPage from './pages/Main/MyCart';
import Payment from './pages/Main/Payement';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage/>} />
        <Route path='/pizzas' element={<Pizzas/>} />
        <Route path='/drinks' element={<Drinks/>} />
        <Route path='/ice-creams' element={<IceCreams/>} />
      </Route>
      <Route path='cart' element={<MyCartPage/>} />
      <Route path='payment' element={<Payment/>} />
    </Routes>
  )
}
