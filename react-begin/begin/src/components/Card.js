import React from 'react';
import styled, { css } from 'styled-components'
import { lighten } from 'polished';

const StyleCard = styled.div `
  display: block;
  padding: 14px 12px;
  border: 1px solid gray;
  border-radius: 10px;

  ${({theme, color} ) => {
      const selected = theme.palette[color];
      return css`
        background-color: ${selected};

        &;hover{
          background-color: ${lighten(0.1, selected)}
        }
      `;

  }}

  &:hover{ 
    background-color:  ${lighten(0.1, '#228be6')};
  }

  &+& {
    margin-left: 24px;
  }
`;



// const Card = ( {children, ...rest} ) => {
//   return (
//       <StyleCard {...rest}>
//         <h4>AR Emoji for the Metaverse</h4>
//         <p>
//           The Galaxy AR Emoji SK is providoing assets that ebable VR/AR developers to 
//           create different characters for the services. Our method allows you to create human-like
//           characters when developing sevices in the virtual world. AR Emogi users can jazz up their
//           characters with a variety of customazabillity options provided Samsung and tafi. Join this sessions
//           to find out more about the Galaxy AR Emogi SDK.
//         </p>
//       </StyleCard>
//   );
// };

function Card( {children, color, ...rest} ){
  return <StyleCard color={color} {...rest}>
    <h4>AR Emoji for the Metaverse</h4>
    <p>
      The Galaxy AR Emoji SK is providoing assets that ebable VR/AR developers to 
      create different characters for the services. Our method allows you to create human-like
      characters when developing sevices in the virtual world. AR Emogi users can jazz up their
      characters with a variety of customazabillity options provided Samsung and tafi. Join this sessions
      to find out more about the Galaxy AR Emogi SDK.
    </p>
  </StyleCard>
}

StyleCard.defaultProps = {
  color: 'blue'
};


export default Card;