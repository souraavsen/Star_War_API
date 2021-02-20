import {React, useState} from 'react'
import { Images } from './Images'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImgSlider = ({slide}) => {
    const [present, setPresent] = useState(0)
    const length = slide.length
    
    const nextimg = () => {
        setPresent(present===length-1 ? 0 : present+1)
    }

    const previmg = () => {
       setPresent(present === 0 ? length-1 : present - 1);
     };

    return (
      <section className='slider'>
        <FaArrowAltCircleLeft className='leftarrow' onClick={previmg} />
        <FaArrowAltCircleRight className='rightarrow' onClick={nextimg} />
        {Images.map((image,index) => {
            return (
                <div className={index === present ? "slide active" : "slide"} key={index}>
                    {index === present && (<img className='image' src={image.image} alt='Star War' />)}
              </div>
            );
        })}
      </section>
    );
}

export default ImgSlider
