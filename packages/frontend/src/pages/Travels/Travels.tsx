import './Travels.scss'

import { useEffect } from 'react'

import CustomCard from '../../components/custom-card/custom-card'
import { data } from '../../Data/Static-Data'
import api from '../../utils/api/api'

function Travels() {
  const status = useEffect(() => {
    try {
      api.getStatus()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <div className="travelsTitle">Your Travels</div>

      <CustomCard data={data} />

      {status}
    </>
  )
}

export default Travels
