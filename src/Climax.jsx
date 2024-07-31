import React, { useState, useEffect } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function Climax({ checked, onChange }) {
    //const [checked, setChecked] = useState(false);
    //console.log(checked);

    useEffect(() => {
        // Cambiar la clase del body según el estado del botón
        document.body.className = checked ? 'night-mode' : 'day-mode';
    }, [checked]);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton
                onLabel="Día"
                offLabel="Noche"
                onIcon="pi pi-sun"
                offIcon="pi pi-moon"
                checked={checked}
                onChange={(e) => onChange(e.value)}
                className="w-9rem"
            />
        </div>
    );
}