import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForWard, ArrowRight } from './HeroElements'

const HeroElements = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new acrron today and receive 250 in credit towards
        </HeroP>
        <HeroBtnWrapper>
          <Button 
              to="signup" 
              onMouseEnter={onHover} 
              onMouseLeave={onHover}
              primary='true'
              darrk='true'
              >
            Get started {hover ? <ArrowForWard /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>

  )
}

export default HeroElements