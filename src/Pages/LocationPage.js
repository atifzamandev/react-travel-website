import React, { Fragment } from 'react'
import Locations from '../Components/Locations/Locations'
import useScrollToTop from '../Hooks/useScrollToTop';

const LocationPage = () => {
    useScrollToTop();
  return (
    <Fragment>
        <Locations page={true} />
    </Fragment>
  )
}

export default LocationPage