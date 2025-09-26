'use client';

import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSideBar,
  Container,
  Title,
} from '@/shared/components';
import { useCart } from '@/shared/hooks';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants';
import { createOrder } from '@/app/actions';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Api } from '@/shared/services/api-client';
import { FolderMinus } from 'lucide-react';

export default function CheckoutPage() {
  const [submiting, setSubmiting] = useState(false);
  const { totalAmount, items, updateItemQuantity, removeCartItem, loading } =
    useCart();
  const { data: session } = useSession();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data.fullname.split(' ');

      (form.setValue('firstName', firstName),
        form.setValue('lastName', lastName));
      form.setValue('email', data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session]);

  const onSubmit: SubmitHandler<CheckoutFormValues> = async (data) => {
    try {
      setSubmiting(true);
      const url = await createOrder(data);
      toast.success(
        'Your order has been successfully placed. Proceeding to payment...',
        {
          icon: '✅',
        }
      );

      if (url) {
        location.href = url;
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to create order', {
        icon: '❌',
      });
      setSubmiting(false);
    }
  };

  return (
    <Container className="mt-5">
      <Title
        text="Placing an order"
        size="lg"
        className="font-extrabold mb-8"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                loading={loading}
              />

              <CheckoutPersonalForm
                className={loading ? 'opacity-30 pointer-events-none' : ''}
              />

              <CheckoutAddressForm
                className={loading ? 'opacity-30 pointer-events-none' : ''}
              />
            </div>

            <div className="w-[450px]">
              <CheckoutSideBar
                totalAmount={totalAmount}
                loading={loading || submiting}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
