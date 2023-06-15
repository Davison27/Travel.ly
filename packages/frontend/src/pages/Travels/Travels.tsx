import './Travels.scss'

import { useEffect, useState } from 'react'

import CustomCard from '../../components/custom-card/custom-card'
import { data } from '../../Data/Static-Data'
import api from '../../utils/api/api'

function Travels() {
  const [travels, setTravels] = useState([])

  useEffect(() => {
    api.getTravels().then((result) => setTravels(result))
  }, [])

  return (
    <>
      <div className="travelsTitle">Your Travels</div>
      <CustomCard data={data} />
      console.log(travels)
    </>
  )
}

export default Travels
