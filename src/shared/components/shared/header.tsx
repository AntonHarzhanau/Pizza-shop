'use client';

import { cn } from '@/shared/lib/utils';
import React, { useEffect, useState } from 'react';
import {
  AuthModal,
  CartButton,
  Container,
  ProfileButton,
  SearchInput,
} from '@/shared/components/shared';
import Image from 'next/image';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    let toastMessage = '';
    if (searchParams.has('paid')) {
      toastMessage =
        'Your order has been successfully paid. Information has been sent to your email.';
    }

    if (searchParams.has('verified')) {
      toastMessage = 'Email successfully confirmed.';
    }

    if (toastMessage) {
      router.replace('/');
      toast.success(toastMessage, {
        icon: '✅',
        duration: 3000,
      });
    }
  }, []);
  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                It couldn&apos;t be more delicious.
              </p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">{hasSearch && <SearchInput />}</div>

        <div className="flex items-center gap-3">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
