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
                digimons.map((digimon, index) => (
                    <div key={index} className="col zoominup animation-duration-1000">
                        <div className="text-center p-3 border-round-sm bg-primary font-bold" key={index}>
                            <Card subTitle={'Digimon No. ' + digimon.id} title={digimon.name} header={(<Image src={digimon.image} indicatorIcon={icon} alt="Card" preview width="250" />)} className="md:w-20rem"></Card>
                        </div>
                    </div>

                ))
            ) : (
                <p>No esta funcionando la API de Digimon</p>
            )}
        </>
    )
}


