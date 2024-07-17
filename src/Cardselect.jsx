
import React, { useEffect, useState } from 'react';
import { Image } from 'primereact/image';


export default function Cardselect({ json }) {
    //console.log(json);
    if (!json) return null;
    return (
        <div>
            <h3>Digimon Filtrado</h3>
            <p><strong>Nombre: </strong> {json.name}</p>
            <p><strong>Código:</strong>   <Image src={json.image} alt="Image" width="250" /> </p>
            <p><strong>Cifrado del DigiWorld</strong> {json.href} </p>
        </div>
    );

}
