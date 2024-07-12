import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Dock } from 'primereact/dock';
import { RadioButton } from 'primereact/radiobutton';
import 'primereact/resources/themes/vela-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

import { Dialog } from 'primereact/dialog';
import { Terminal } from 'primereact/terminal';
import List from './List';

export default function Navbar() {

    const [position, setPosition] = useState('bottom');
    const [displayTerminal, setDisplayTerminal] = useState(false);
    const items = [
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/terminal.svg" width="80%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="80%" />,
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="80%" />,
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="80%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="80%" />,
        }
    ];

    const positions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];



    return (
        <div className="dock-demo">
            <div className="dock_positionavg">
                {/*<h1>Digimondex</h1>*/}
                <div className="grid">
                   <List></List>
                </div>
            </div>
            {/*<div className="flex flex-wrap gap-3 mb-5 dock_positionavg">
                {positions.map((option) => {
                    const { value, label } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-3">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div>*/}


            <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)' }}>
                <Dock model={items} position={position} />
                <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
                    <Terminal welcomeMessage="Welcome to PrimeReact Abraham (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                </Dialog>
            </div>
        </div>
    )
}


