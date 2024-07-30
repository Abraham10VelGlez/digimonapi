import React from 'react';
import { Image } from 'primereact/image';

export default function Logo() {


    return (
        <div className="p-d-flex p-jc-center p-ai-center" style={{ height: '15vh' }}>
            <img src="./Logo.png" alt="Logo" className="p-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    )
}