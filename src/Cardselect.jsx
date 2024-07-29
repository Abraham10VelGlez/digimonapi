
import React, { useEffect, useState } from 'react';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';


export default function Cardselect({ json }) {
    //console.log(json);
    if (!json) return null;
    return (

        <Card title={json.name} subTitle={'Digimon No. ' + json.id} header={<Image src={json.image} alt="Image" preview width="250" height='250' />}></Card>

    );



}
