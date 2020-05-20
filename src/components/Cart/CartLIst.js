import React from 'react';
import CardItem from './CartItem';

export default function CartLIst({value}) {
  const { cart } = value;

  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CardItem key={item.id} item={item} value={value}/>;
      })}
    </div>
  )
}
