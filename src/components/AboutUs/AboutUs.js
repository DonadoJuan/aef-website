import React from 'react';
import './AboutUs.css';
import logo from '../../assets/aef-logo.svg';

const aboutUs = () => {
    return (
     <>
        <h1 className="section-title">QUIENES SOMOS</h1>
        <img className="section-logo" src={logo} alt=""></img>
        <p className="section-subtitle">
            SOMOS UNA AGENCIA DE MODELOS ANIMALES CON MAS DE 30 AÑOS EN EL RUBRO.
        </p>
        <p className="section-subtitle">
            MAS DE MILES DE RODAJES AVALAN NUESTRA EXPERIENCIA Y PROFESIONALISMO.
        </p>
        <p className="section-subtitle">
            DESDE INSECTOS A MAMIFEROS. ADIESTRAMIENTO ESPECIALIZADO DE PERROS Y GATOS.
        </p>
    </>
    );
}

export default aboutUs;
