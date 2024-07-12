import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import List from './List'
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import Hook_list from './Hook_list';



export default function Carusel() {
    const { digimons } = Hook_list();
    const [monster, setmonster] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '567px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        setmonster(digimons);
        //console.log(digimons);
    }, [digimons]);

    const productTemplate = (monster) => {
        return (
            <div className="text-center">
                <div className="mb-2">
                    <img src={monster.image} alt={monster.name} className="custom-image w-4 h-3 shadow-8" />
                </div>
                <div>
                    <h4 className="mb-1 custom-name">{monster.name}</h4>
                    <h6 className="mt-0 mb-3 custom-price">${monster.name}</h6>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={monster} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    );
}

