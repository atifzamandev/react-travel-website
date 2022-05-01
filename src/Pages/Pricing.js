import React, { Fragment } from 'react'
import Hero from '../Components/Hero/Hero'
import useScrollToTop from '../Hooks/useScrollToTop';

const Pricing = () => {
  useScrollToTop();
  return (
    <Fragment>
        <Hero isDynmic>Pricing</Hero>

    </Fragment>
  )
}

export default Pricing