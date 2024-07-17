
import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Hook_list from './Hook_list';
import Cardx2 from './Card_x2';
import { Skeleton } from 'primereact/skeleton'; // Si estás usando PrimeReact para el Skeleton


export default function Cardall() {

    const { digimonslist } = Hook_list();
    const [monster, setmonster] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //setmonster(digimonslist);
        if (digimonslist.length > 0) {
            setmonster(digimonslist);
            setLoading(false);
        }
        //console.log(digimons);
    }, [digimonslist]);

    const CardSkeleton = () => (
        <div className="col-6 md:col-3 lg:col-3">
            <div className="text-center p-3 border-round-sm cardcolos font-bold">
                <Skeleton width="100%" height="200px" />
            </div>
        </div>
    );


    return (
        <div className="gridxavgajust" >

            {loading ? (
                Array.from({ length: 1460 }).map((_, index) => (
                    <CardSkeleton key={index} />
                ))
            ) : (
                //monster.slice(0,4).map((x, index) => (
                monster.map((x, index) => (
                    <div key={index} className="col-6 md:col-3 lg:col-3">
                        <div key={index} className="text-center p-3 border-round-sm cardcolos font-bold">
                            <Cardx2 key={index} data={x} />
                        </div>
                    </div>
                ))
            )}

            {/*
                //monster.slice(0,4).map((x, index) => (
                monster.map((x, index) => (
                    <div key={index} className="col-6 md:col-3 lg:col-3">
                        <div key={index} className="text-center p-3 border-round-sm cardcolos font-bold">
                            <Cardx2 key={index} data={x} />
                        </div>
                    </div>
                ))
            */}

        </div>
    )
}
