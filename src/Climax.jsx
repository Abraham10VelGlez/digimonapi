import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function Climax() {
    const [checked, setChecked] = useState(false);
    console.log(checked);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton onLabel="Dia" offLabel="Noche" onIcon="pi pi-sun" offIcon="pi pi-moon" 
                checked={checked} onChange={(e) => setChecked(e.value)} className="w-9rem" />
        </div>
    );
}