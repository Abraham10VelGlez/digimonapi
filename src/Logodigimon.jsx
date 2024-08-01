import React from 'react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Skeleton } from 'primereact/skeleton'; // Si estás usando PrimeReact para el Skeleton

export default function Logodigimon() {


    return (
        <>



            <div className="card flex justify-content-center align-items-center">
                <div className="svg-container">



                    <Button className="border-round-lg cardcolos hover:bg-pink-500 border-white-500">
                        <Image src="pb-removebg-preview.png" alt="Image" width="150" height="125" />
                        {/*className="centered-image" */}
                    </Button>



                    {/*<svg className="m-logo" shapeRendering="crispEdges" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
                        <rect className="box wave1 st0" width="50" height="50" />
                        <rect x="50" className="box wave2 st1" width="50" height="50" />
                        <rect x="100" className="box wave3 st2" width="50" height="50" />
                        <rect x="150" className="box wave4 st3" width="50" height="50" />
                        <rect y="50" className="box wave2 st4" width="50" height="50" />
                        <rect x="50" y="50" className="box wave3 st5" width="50" height="50" />
                        <rect x="100" y="50" className="box wave4 st6" width="50" height="50" />
                        <rect x="150" y="50" className="box wave5 st7" width="50" height="50" />
                        <rect y="100" className="box wave3 st8" width="50" height="50" />
                        <rect x="50" y="100" className="box wave4 st9" width="50" height="50" />
                        <rect x="100" y="100" className="box wave5 st10" width="50" height="50" />
                        <rect x="150" y="100" className="box wave6 st11" width="50" height="50" />
                        <rect y="150" className="box wave4 st12" width="50" height="50" />
                        <rect x="50" y="150" className="box wave5 st13" width="50" height="50" />
                        <rect x="100" y="150" className="box wave6 st14" width="50" height="50" />
                        <rect x="150" y="150" className="box wave7 st15" width="50" height="50" />
                    </svg>*/}
                </div>
            </div>

        </>
    )
}