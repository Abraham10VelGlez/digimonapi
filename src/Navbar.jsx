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
import Carusel from './Carusel';
import Climax from './Climax';
import Search from './Search';
import Logo from './Logo';
import Cardx from './Card_x';
import Cardselect from './Cardselect';
import Cardall from './Cardall';
import Logodigimon from './Logodigimon';
import { Button } from 'primereact/button';



export default function Navbar() {

    const [position, setPosition] = useState('bottom');
    const [displayTerminal, setDisplayTerminal] = useState(false);
    const [displayTerminal_window, setDisplayTerminal_window] = useState(true);


    const [displayFinder, setDisplayFinder] = useState(false);
    const [displaySearch, setDisplaySearch] = useState(false);
    const [displayAll, setDisplayAll] = useState(false);

    const items = [
        {
            label: 'Terminal',
            icon: () => <img alt="Terminal" src="https://primefaces.org/cdn/primereact/images/dock/terminal.svg" width="60%" />,
            command: () => {
                setDisplayTerminal_window(true);
                setDisplayTerminal(true);

            }
        },
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="60%" />,
            command: () => {
                setDisplaySearch(true);
            }

        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="60%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="60%" />,
            command: () => {
                //window.open('/digimonsavg', '_blank')
                window.location.href = '/digimonsavg';
                //setDisplayAll(true);
            }

        },
        /*{
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="60%" />,
        }*/
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
                {/*<h1>Digimondex</h1> <Cardx></Cardx>*/}

                <Logodigimon></Logodigimon>


                <br></br>

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
                <Dialog visible={displayTerminal} breakpoints={{ 'auto': 'auto', '600px': '25vw' }} style={{ width: '20vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={displayTerminal_window}>
                    <Terminal welcomeMessage="Welcome to PrimeReact by AbrahamVG (Hacking Digimon Terminal)" prompt="primereactavg $" />
                </Dialog>
                <Dialog visible={displayFinder} breakpoints={{ '960px': 'auto', '600px': '75vw' }} style={{ width: '18vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} >
                    <h2 className="text-center">Cambiando Tema de DigimonDex</h2>
                    <Climax></Climax>
                </Dialog>
                <Dialog visible={displaySearch} breakpoints={{ '960px': 'auto', '600px': '75vw' }} style={{ width: '25vw', height: '35rem' }} onHide={() => setDisplaySearch(false)} maximizable blockScroll={false}>
                    <h2 className="text-center">Buscar Digimon</h2>
                    <Search></Search>
                </Dialog>
                <Dialog visible={displayAll} breakpoints={{ '960px': 'auto', '600px': '75vw' }} style={{ width: '50vw' }} onHide={() => setDisplayAll(false)} maximizable blockScroll={true}>
                <h2 className="text-center">Digimon World</h2>                    
                    <a href="/digimonsavg" target="_blank" rel="noopener noreferrer" className="p-button font-bold" >
                    VER TODO EL CATALOGO ENTERO
                    </a>
                    <Cardall></Cardall>
                </Dialog>
            </div>
        </div>
    )
}


