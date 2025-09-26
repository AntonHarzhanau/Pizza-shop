'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formRegisterSchema, TFormRegisterValues } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { Button, FormInput } from '@/shared/components';
import { registerUser } from '@/app/actions';
import { cn } from '@/shared/lib/utils';

interface Props {
  onClose?: VoidFunction;
  className?: string;
}

export const RegisterForm: React.FC<Props> = ({ onClose, className }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      fullname: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    console.log('here');
    try {
      await registerUser({
        email: data.email,
        fullname: data.fullname,
        password: data.password,
      });
      toast.success('Registration successful 📝. Confirm your email', {
        icon: '✅',
      });
      onClose?.();
    } catch (error) {
      return toast.error('Failed to register', {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('flex flex-col gap-5', className)}
      >
        <FormInput name="fullname" label="Full name" required />
        <FormInput name="email" label="E-mail" required />
        <FormInput name="password" label="Password" type="password" required />
        <FormInput
          name="confirmPassword"
          label="Repeate password"
          required
          type="password"
        />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Register
        </Button>
      </form>
    </FormProvider>
  );
};
