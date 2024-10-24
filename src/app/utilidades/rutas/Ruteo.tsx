import {Route, Routes} from "react-router-dom"


import { Inicio } from "../../componentes/contenedor/Inicio"
import { TiendasFisicas } from "../../componentes/contenedor/Navegacion/TiendasFisicas"
import { Contacto } from "../../componentes/contenedor/Navegacion/Contacto"
import { Niños } from "../../componentes/contenedor/Catalogo/Niños"
import { Seccionf } from "../../componentes/contenedor/Catalogo/SeccionF"
import { SeccionM } from "../../componentes/contenedor/Catalogo/SeccionM"

export const Ruteo = ()=>{
    return(
        <Routes>

            <Route path="/" element={<Inicio/>}/>
            <Route path= "/TiendasFisicas" element={<TiendasFisicas/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
            <Route path="/Niños" element={<Niños/>}/>
            <Route path="/SeccionF" element={<Seccionf/>}/>
            <Route path="/SeccionM" element={<SeccionM/>}/>
            

          
        </Routes>
    )
}