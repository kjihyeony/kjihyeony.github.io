import React from "react";
import Slider from "react-slick";
import styled, { keyframes } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideWrap = styled.div `
  max-width: 1400px;
  margin: 0 auto;
`

const StyledSlider = styled(Slider) `
  height: 90%; 

  .slick-list {
    width: 100%;
    height: 100%;
    marrgin: 0 auto;
    overflow-x: hidden;
    background: begige;
  }

  .slick-prev:before, .slick-next:before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
    font-family: 'slick';
      font-size: 40px;
      line-height: 1;
      opacity: .75;
      color: #000000;
      -webkit-font-smoothing: antialiased;
  }

`

const CardItem = styled.div `
  width: 100%;
  height: 400px;
  border: 1px solid red
`


const CardSlider = () => {
	const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      ]

    };  
	return(
		    <SlideWrap>
          <h2> Single Item</h2>
          <StyledSlider {...settings}>
            <div>
              <CardItem>
                카드원
              </CardItem>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </StyledSlider>
      </SlideWrap>
	);
};

export default CardSlider;
