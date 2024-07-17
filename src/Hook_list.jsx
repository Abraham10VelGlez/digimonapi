import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

export default function Hook_list() {
  const [digimons, setdigimons] = useState([])
  const [digimonslist, setdigimonslist] = useState([])
  useEffect(() => {
    //total de digimon 1460

    const getDigimos = async () => {
      const result = await axios.get('https://digi-api.com/api/v1/digimon?page=45');
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
  }, [])



  const search_avg = async (x) => {
    const result = await axios.get('https://digi-api.com/api/v1/digimon?name=' + x);    
    //setdigimons(result.data.content)
    console.log(result);

  }






  return {
    digimons, digimonslist,search_avg

  }

}

