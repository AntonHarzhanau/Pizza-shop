import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';


interface Props {
  title: string;
  text: string;
  imageUrl: string;
  className?: string;
}

export const InfoBlock: React.FC<Props> = ({
  title,
  text,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        'flex items-center justify-between w-[840px] gap-12'
      )}
    >
      <div className="flex flex-col">
        <div className="w-[450px]">
          <Title size="lg" text={text} className="font-extrabold" />
          <p className="text-gray-400 text-lg">{text}</p>
        </div>

        <div className="flex gap-5 mt-11">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft />
              Home
            </Button>
          </Link>
          <a href="">
            <Button
              variant="outline"
              className="text-gray-500 border-gray-400 hover:bg-gray-50"
            >
              Refresh
            </Button>
          </a>
        </div>
      </div>
      <Image src={imageUrl} alt={title} width={300} height={300}/>
    </div>
  );
};
