
import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { Image } from 'primereact/image';



export default function Cardx2({  data }) {


    const header = (
        <Image  src={data.image} alt="Image" preview width="150" height='150'  />
        //<Image  src={data.img} alt="Image" preview width="80"  />
    );


    return (
        <Card  title={data.name} subTitle={ 'Digimon No. ' + data.id} header={header} />
        
    )
}