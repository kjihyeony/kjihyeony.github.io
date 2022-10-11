import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({className, children, size, color, outline, fullWidth, onClick }) {
  return (
    <button onClick={onClick} className={classNames('Button', className, size, color, {outline, fullWidth})}>{children}</button>
  );
}

function BLink({className, children, size, color, outline, fullWidth, onClick }) {
  return (
    <button onClick={onClick} className={classNames('Link', className, size, color, {outline, fullWidth})}>{children}</button>
  );
}


Button.defaultProps = {
  size: 'medium',
  color: 'black'
};


BLink.defaultProps = {
  size: 'medium',
  color: 'black'
};

export default Button;
export default BLink;