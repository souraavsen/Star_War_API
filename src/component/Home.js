import React from 'react'
import { Images } from './Images';
import ImgSlider from './ImgSlider'

const Home = () => {
    return (
      <div className="home">
        <h1>Star War </h1>
        <ImgSlider slide={Images}/>
      </div>
    );
}

export default Home
