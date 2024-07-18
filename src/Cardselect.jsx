
import React, { useEffect, useState } from 'react';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';


export default function Cardselect({ json }) {
    //console.log(json);
    if (!json) return null;
    return (
        <div className="col-12 md:col-6 lg:col-6">
            <div className="text-center p-3 border-round-sm cardcolos font-bold">
                {/*<h3>Digimon Filtrado</h3>                
                <p><b>{json.name}</b></p>*/}                
                <Card className='text-center'  title={json.name} subTitle={ 'Digimon No. ' + json.id} header={<Image src={json.image} alt="Image" preview width="250" height='250' />} />
                {/*<p><strong><a href={json.href}>Cifrado del DigiWorld</a></strong></p>*/}

            </div>
        </div>
    );

}
