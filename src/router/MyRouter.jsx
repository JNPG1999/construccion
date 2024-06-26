import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Comodin, Contactos, Inicio, Nosotros,Arquitectura,Ingenieria } from '../pages'
import { Navegation } from '../components/Navegation'



export const MyRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Navegation/>} path={'/'}>
            <Route element={<Inicio/>} path={'/'}> </Route>
            <Route element={<Arquitectura/>} path={'/arquitectura'}> </Route>
            <Route element={<Ingenieria/>} path={'/ingenieria'}> </Route>
            <Route element={<Comodin/>} path={'/comodin'}> </Route>
            <Route element={<Nosotros/>} path={'/nosotros'}> </Route>
            <Route element={<Contactos/>} path={'/contactos'}> </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
