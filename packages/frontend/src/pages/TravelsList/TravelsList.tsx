import './TravelsList.scss'

import CustomCard from '../../components/custom-chakra/custom-card/custom-card'
import { data } from '../../Data/Static-Data'

function TravelsList() {
  return (
    <>
      <div className="travelsTitle">Your Travels</div>

      <CustomCard data={data} />
    </>
  )
}

export default TravelsList
