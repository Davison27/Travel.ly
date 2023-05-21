import './Travels.scss'

import axios from 'axios'
import { useEffect } from 'react'

import CustomCard from '../../components/custom-card/custom-card'
import { data } from '../../Data/Static-Data'

function Travels() {
  useEffect(() => {
    axios
      .get(`http://localhost:3333/api/status`)
      .then((response) => console.log(response.data))
  }, [])

  return (
    <>
      <div className="travelsTitle">Your Travels</div>

      <CustomCard data={data} />
    </>
  )
}

export default Travels
