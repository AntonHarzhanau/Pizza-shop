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
      <Container className="flex flex-wrap items-center justify-between gap-4 py-6 md:flex-nowrap md:py-8">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-xl font-black uppercase md:text-2xl">Pizza</h1>
            <p className="leading-3 text-xs text-gray-400 md:text-sm">
              It couldn&apos;t be more delicious.
            </p>
          </div>
        </Link>

        {hasSearch && (
          <div className="order-3 w-full md:order-none md:mx-10 md:flex-1">
            <SearchInput />
          </div>
        )}

        <div className="order-2 flex w-full flex-wrap items-center gap-3 md:order-none md:w-auto md:flex-nowrap md:justify-end">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          <ProfileButton
            className="flex-1 md:flex-none"
            onClickSignIn={() => setOpenAuthModal(true)}
          />
          {hasCart && <CartButton className="flex-1 md:flex-none" />}
        </div>
      </Container>
    </header>
  );
};
