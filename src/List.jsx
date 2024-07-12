import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Hook_list from './Hook_list'
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function List() {
    const { digimons } = Hook_list()
    const icon = (<i className="pi pi-search"></i>)


    return (
        <>
            {Array.isArray(digimons) ? (
                /*digimons.slice(0, 3).map((digimon, index) => (*/
                digimons.map((digimon, index) => (
                    <div key={index} className="col-12 md:col-6 lg:col-4">
                        <div key={index} className="text-center p-2 border-round-lg bg-primary font-bold">
                            <Card className="imgcardigimon" subTitle={'Digimon No. ' + digimon.id} title={digimon.name} header={(<Image src={digimon.image} indicatorIcon={icon} alt="Card" preview width="50" />)} ></Card>
                        </div>
                    </div>


                ))
            ) : (
                <p>No esta funcionando la API de Digimon</p>
            )}
        </>
    )
}


