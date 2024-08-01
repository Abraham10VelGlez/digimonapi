import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
const URL_DEFAULT_DIGIMON = 'https://digi-api.com/api/v1/digimon?page=0&pageSize=20'

export default function Hook_list() {
  const [digimons, setdigimons] = useState([])
  const [digimonslist, setdigimonslist] = useState([])
  const [digimonspages, setdigimonspages] = useState([])

  const [siguienteurl, seturl] = useState('')

  const [moredigi, setmoredigi] = useState(true)


  const getDigimosListpageSize = async (url = URL_DEFAULT_DIGIMON) => {
    const resultx = await axios.get(url);
    //https://digi-api.com/api/v1/digimon?pageSize=10 paginacion x numero de 
    //const result = await axios.get('https://digimon-api.vercel.app/api/digimon');
    //console.log(resultx.data.content);
    //console.log(resultx.data.pageable.nextPage);
    //setdigimonspages(resultx.data.content)


    return { resultx }

    //console.log(result.data);      
    //setdigimons(result.data)

  }

  const obtenerDigimons = async () => {

    const { resultx } = await getDigimosListpageSize()
    setdigimonspages(resultx.data.content)
    seturl(resultx.data.pageable.nextPage)


  }

  const masDigimons = async () => {
    console.log("activacion de mas digimon");
    const { resultx } = await getDigimosListpageSize(siguienteurl)    
    setdigimonspages(prev => [...prev, ...resultx.data.content]) //leer el estado previo
    //console.log(resultx.data.pageable.nextPage.length);
    if(resultx.data.pageable.nextPage.length == 0){
      setmoredigi(false)
    }else{
      setmoredigi(true)
      seturl(resultx.data.pageable.nextPage)
    }
    //resultx.data.pageable.nextPage === null && setmoredigi(false)
    
    

  }


  useEffect(() => {
    //total de digimon 1460

    const getDigimos = async () => {
      const result = await axios.get('https://digi-api.com/api/v1/digimon?page=8');
      //const result = await axios.get('https://digimon-api.vercel.app/api/digimon');

      //console.log(result.data.content);      
      setdigimons(result.data.content)

      //console.log(result.data);      
      //setdigimons(result.data)

    }
    const getDigimosListAll = async () => {
      const resultx = await axios.get('https://digi-api.com/api/v1/digimon?pageSize=1460');
      //https://digi-api.com/api/v1/digimon?pageSize=10 paginacion x numero de 
      //const result = await axios.get('https://digimon-api.vercel.app/api/digimon');

      //console.log(resultx.data.content);      
      setdigimonslist(resultx.data.content)

      //console.log(result.data);      
      //setdigimons(result.data)

    }



    getDigimos()
    getDigimosListAll()
    //getDigimosListpageSize()
    obtenerDigimons()
  }, [])




  const search_avg = async (x) => {
    const result = await axios.get('https://digi-api.com/api/v1/digimon?name=' + x);
    //setdigimons(result.data.content)
    console.log(result);

  }






  return {
    digimons, digimonslist, search_avg, digimonspages, masDigimons, moredigi

  }

}

