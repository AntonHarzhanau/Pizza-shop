import React from 'react';
import { WhiteBlock } from '../white-block';
import { FormInput, FormTextArea } from '../form-component';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock
      title="3.Delivery address"
      className={cn('shadow-sm', className)}
    >
      <div className="flex flex-col gap-5">
        <FormInput
          name="address"
          className="text-base"
          placeholder="Entre your address"
        />
        <FormTextArea
          name="comment"
          className="text-base"
          placeholder="Comments on the order"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
