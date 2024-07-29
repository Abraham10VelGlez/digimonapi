
import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Hook_list from './Hook_list';
import Cardx2 from './Card_x2';
import { Skeleton } from 'primereact/skeleton'; // Si estás usando PrimeReact para el Skeleton
import InfiniteScroll from 'react-infinite-scroll-component';


export default function Cardall() {

    const { digimonspages, masDigimons, moredigi } = Hook_list();
    const [monster, setmonster] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //setmonster(digimonspages);
        if (digimonspages.length > 0) {
            setmonster(digimonspages);
            setLoading(false);
        }
        //console.log(digimons);
    }, [digimonspages]);

    const CardSkeleton = () => (
        <div className="col-6 md:col-3 lg:col-3">
            <div className="text-center p-3 border-round-sm cardcolos font-bold">
                <Skeleton width="100%" height="200px" />
            </div>
        </div>
    );


    return (
        <div className="gridxavgajust grid " >

            <InfiniteScroll
                dataLength={monster.length}
                next={masDigimons}
                hasMore={moredigi}
                loader={<h4>cargando</h4>}
                endMessage={<h1>ya no hay digimon</h1>}
            >
                {
                    monster.map((x, index) => (<Cardx2 key={index} data={x} />))
                }
            </InfiniteScroll>

            {/*<Button onClick={masDigimons} label="Submit" icon="pi pi-check" />*/}






            {/*loading ? (
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
            )*/}

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
