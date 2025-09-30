'use client';

import { Button } from '@/shared/components/ui';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { LoginForm } from './froms/login-form';
import { RegisterForm } from './froms/register-form';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [type, setType] = useState<'login' | 'register'>('login');

  const onswitchType = () => {
    setType(type === 'login' ? 'register' : 'login');
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTitle hidden />
      <DialogContent
        aria-describedby={undefined}
        className="w-full max-w-[min(90vw,420px)] gap-4 bg-white p-8 sm:max-w-md sm:p-12"
      >
        {type === 'login' ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm />
        )}
        <hr />
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() =>
              signIn('github', {
                callbackUrl: '/',
                redirect: true,
              })
            }
            type="button"
            className="gap-2 h-12 flex-1"
          >
            <img
              className="w-6 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
              alt=""
            />
            GitHub
          </Button>

          <Button
            variant="secondary"
            onClick={() =>
              signIn('google', {
                callbackUrl: '/',
                redirect: true,
              })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <img
              className="w-6 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt=""
            />
            Google
          </Button>
        </div>
        <Button variant="outline" onClick={onswitchType} type="button">
          {type !== 'login' ? 'Login' : 'Register'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
