
import React, { useEffect, useState } from 'react';
import { Image } from 'primereact/image';


export default function Cardselect({ json }) {
    //console.log(json);
    if (!json) return null;
    return (
        <div className='cardcolos'>
            <h3>Digimon Filtrado</h3>
            <p><strong>Nombre: </strong> {json.name}</p>
            <p><Image src={json.image} alt="Image" preview width="250" /> </p>
            {/*<p><strong><a href={json.href}>Cifrado del DigiWorld</a></strong></p>*/}
        </div>
    );

}
