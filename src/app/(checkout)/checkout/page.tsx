import {
  CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from '@/shared/components/shared';
import { Button, Input, Textarea } from '@/shared/components/ui';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <Container className="mt-5">
      <Title
        text="Placing an order"
        size="lg"
        className="font-extrabold mb-8"
      />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">
            <div className='flex flex-col gap-5'>
               <CheckoutItem
              id={1}
              imageUrl={'/pizza.webp'}
              details={'asdfasdfasdfafd asdfasdfasdfasdfs'}
              name={'asdfsadfsdfsd'}
              price={10}
              quantity={2}
            />

             <CheckoutItem
              id={1}
              imageUrl={'/pizza.webp'}
              details={'asdfasdfasdfafd asdfgfdabsdfasdf sfdasdfasdfa sdfasdfasdfasdfs'}
              name={'asdfsadfsdfsd'}
              price={10}
              quantity={2}
            />
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Pesonal data">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Name"
              />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Last name"
              />
              <Input name="email" className="text-base" placeholder="E-mail" />
              <Input name="phone" className="text-base" placeholder="Phone" />
            </div>
          </WhiteBlock>
           
          <WhiteBlock title="3.Delivery address">
            <div className="flex flex-col gap-5">
              <Input
                name="address"
                className="text-base"
                placeholder="Entre your address"
              />
              <Textarea
                className="text-base"
                placeholder="Comments on the order"
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1 border-b border-gray-200">
              <Title text="Total" size="lg" />
              <span className="text-3xl font-extrabold">93 €</span>
            </div>
            <CheckoutItemDetails
              title={
                <>
                  <Package className="mr-2 text-gray-300" />
                  'Cost of food:'
                </>
              }
              value="90"
            />
            <CheckoutItemDetails
              title={
                <>
                  <Percent className="mr-2 text-gray-300" />
                  'Taxes:'
                </>
              }
              value="1"
            />
            <CheckoutItemDetails
              title={
                <>
                  <Truck className="mr-2 text-gray-300" />
                  'Delivery:'
                </>
              }
              value="2"
            />

            <Button
              type="submit"
              disabled={false}
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
              Proceed to payment
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
