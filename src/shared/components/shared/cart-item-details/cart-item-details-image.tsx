import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
  return (
    <Image className={className} width={50} height={50} src={src} alt="" />
  );
};
