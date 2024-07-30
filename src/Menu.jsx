import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Cardall from './Cardall';


export default function Menu() {

    return (
        /*<Router>*/
        <Routes>
            <Route path="/" index element={<Navbar />} />
            <Route path="/me" element={<About />} />
            <Route path="/Acercade" element={<About />} />
            {/* comodin para dar por defecto la pagina que no sirve */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        /*</Router>*/
    );
}

function Boxes() {
    return <>asd</>
}

function Navbar2() {
    // visible on every page
    return <> <h1>NAVEGACION DE RUTAS QUEDETALLE </h1></>
}

function Home() {
    return (
        <>
            <p>NAVEGACION DE RUTAS ABRAHAM</p>
            <ul>
                <li><Link to='/regixpress'>Registro de Usuarios</Link></li>
                <li><Link to='/json'>ejemplo de json</Link></li>
                <li><Link to='/world8'>MUNDO 8 Buscador de gifs</Link></li>
                <li><Link to='/world9'>MUNDO 9 Fronted con backend ExpressJS</Link></li>
                <li><Link to='/world10'>MUNDO 10 Fronted con backend Laravel 10</Link></li>
            </ul>
        </>);
}

function About() {
    return (
        <>

            <Cardall></Cardall>

        </>);
}


function NotFound() {
    return (<><p>Ha llegado a una página que no existe :| </p></>);
}