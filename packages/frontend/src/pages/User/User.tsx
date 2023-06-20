import React from 'react'

import CustomTimelineCard from '../../components/custom-timeline-card/custom-timeline-card'
import { data } from '../../Data/Static-Data'

function User() {
  return (
    <div>
      Soy la página de Users!!
      <CustomTimelineCard data={data} />
      <>{console.log(data)}</>
    </div>
  )
}

export default User
