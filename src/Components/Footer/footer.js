import React from 'react';
import fulanito from './footer.module.css'

const colores = {
    parrafo: {
        color: 'red',
    },
    contenedor:{
        color: 'lightblue',
    },
}

const Footer = () =>{
    return(
        <footer className={fulanito.contenedorMain}>
            <h5 
            style={{
                backgroundColor: 'orange',
                fontFamily: 'cursive',
                width: '100px',
                border: '1px solid yellow'
                }}>
                    Brandon Maidana
            </h5>
            <p style={colores.parrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab voluptate cupiditate similique officiis, suscipit deserunt reprehenderit ex? Odio adipisci fuga aliquid quaerat dolore temporibus natus voluptatem, nemo deserunt aspernatur?
            </p>
            <p style={colores.contenedor}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab voluptate cupiditate similique officiis, suscipit deserunt reprehenderit ex? Odio adipisci fuga aliquid quaerat dolore temporibus natus voluptatem, nemo deserunt aspernatur?
            </p>
        </footer>
    )
}

export default Footer;