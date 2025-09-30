import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-4 md:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};
