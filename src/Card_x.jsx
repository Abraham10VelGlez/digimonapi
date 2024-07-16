
import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Hook_list from './Hook_list';
import Cardx2 from './Card_x2';

export default function Cardx() {

    const { digimons } = Hook_list();
    const [monster, setmonster] = useState([]);

    useEffect(() => {
        setmonster(digimons);
        //console.log(digimons);
    }, [digimons]);


    return (
        <div className="grid" >

            {monster.slice(0,4).map((x, index) => (
                <div key={index} className="col-6 md:col-3 lg:col-3"> 
                    <div key={index} className="text-center p-3 border-round-sm bg-primary font-bold">
                        <Cardx2 key={index} data={x} />
                    </div>
                </div>
            ))}

        </div>
    )
}
