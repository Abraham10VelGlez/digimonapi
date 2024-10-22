
import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Hook_list from './Hook_list';
import Cardx2 from './Card_x2';
import { Skeleton } from 'primereact/skeleton'; // Si estás usando PrimeReact para el Skeleton
import InfiniteScroll from 'react-infinite-scroll-component';
import Cookies from 'js-cookie';

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
        //validacionclim()
        //console.log(digimons);
    }, [digimonspages]);

    const CardSkeleton = () => (
        <div className="col-6 md:col-3 lg:col-3">
            <div className="text-center p-3 border-round-sm cardcolos font-bold">
                <Skeleton width="100%" height="200px" />
            </div>
        </div>
    );

    const validacionclim = () => {
        const cookieValuex = Cookies.get('themeChecked');
        document.body.className = cookieValuex ? 'night-mode' : 'day-mode';
        
    }


    return (
        <div className="gridxavgajust grid  list_digimoonsavg" >


            <InfiniteScroll
                dataLength={monster.length} //This is important field to render the next data
                next={masDigimons}
                hasMore={moredigi}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <div class="col-12 md:col-6 lg:col-12">
                        <center><b>ESTA ES LA LISTA TOTAL DE WORLD DIGIMON</b></center>
                    </div>
                }
                className="gridxavgajust grid "
            >
                {loading ? (
                    Array.from({ length: 12 }).map((_, index) => (
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

        </div >
    )
}
