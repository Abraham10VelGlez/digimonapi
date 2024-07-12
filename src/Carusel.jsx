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
            breakpoint: '1000px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '100px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '500px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '300px',
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
            <div className="custom-card border-round m-2 text-center py-2 px-1">
                <div className="mb-3">
                    <img src={monster.image} alt={monster.name} className="custom-image w-6 shadow-2" />
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
            <Carousel    value={monster} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    );
}

