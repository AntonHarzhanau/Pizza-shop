import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import React from 'react';

interface Props {
  orderId: number;
  items: CartItemDTO[];
}

export const OrderSeccessTemplate: React.FC<Props> = ({ orderId, items }) => (
  <div>
    <h1>Thanks for your order! 🎉🎉🎉</h1>

    <p>You order #{orderId} paid. List of products</p>

    <ul>
      {
        items.map((item) => (
          <li key={item.id}>
            {item.productItem.product.name} | {item.productItem.price} € x {item.quantity} pcs. = {item.productItem.price * item.quantity} € 
          </li>
        ))
      }
    </ul>
  </div>
);
