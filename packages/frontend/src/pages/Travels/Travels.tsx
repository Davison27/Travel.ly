import './Travels.scss'

import CustomCard from '../../components/custom-card/custom-card'
import { data } from '../../Data/Static-Data'

function Travels() {
  return (
    <>
      <div className="travelsTitle">Your Travels</div>

      <CustomCard data={data} />
    </>
  )
}

export default Travels
