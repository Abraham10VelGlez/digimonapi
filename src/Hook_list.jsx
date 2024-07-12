import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

export default function Hook_list() {
  const [digimons, setdigimons] = useState([])
  useEffect(() => {
    const getDigimos = async () => {      
      const result = await axios.get('https://digi-api.com/api/v1/digimon?page=10');
      //console.log(result.data.content);      
      setdigimons(result.data.content)
    }
    getDigimos()
  }, [])

  return {
    digimons

  }

}

