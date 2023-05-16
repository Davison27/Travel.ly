import './Travels.scss'

import CustomCard from '../../components/custom-card/custom-card'
import { data } from '../../Data/Static-Data'
import TravelsApi from '../../utils/api/api-get'

function Travels() {
  return (
    <>
      <div className="travelsTitle">Your Travels</div>

      <CustomCard data={data} />
      <TravelsApi />
    </>
  )
}

export default Travels
