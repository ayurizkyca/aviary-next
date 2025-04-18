// import React from 'react'

// const Button = () => {
//   return (
//     <button className='px-4 py-1 rounded-4xl border border-black-0'>Our Work</button>

//   )
// }

// export default Button


import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  title?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  title,
  onClick,
  ...rest
}) => {
  return (
    <button
      className='px-4 py-1 rounded-4xl border border-black-0'
      title={title}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;