import { useSession } from 'next-auth/react';
import React from 'react';
import { Button } from '../ui/button';
import { CircleUser, User } from 'lucide-react';
import Link from 'next/link';

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({
  className,
  onClickSignIn,
}) => {
  const { data: session } = useSession();
  return (
    <div className={className}>
      {!session ? (
        <Button
          onClick={onClickSignIn}
          variant="outline"
          className="flex w-full items-center justify-center gap-1 md:w-auto"
        >
          <User size={16} />
          SignIn
        </Button>
      ) : (
        <Link href="/profile" className="block w-full md:w-auto">
          <Button
            variant="secondary"
            className="flex w-full items-center justify-center gap-2 md:w-auto"
          >
            <CircleUser size={18} />
            Profile
          </Button>
        </Link>
      )}
    </div>
  );
};
