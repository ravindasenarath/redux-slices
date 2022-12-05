import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/cart/action'

import styled from 'styled-components'

const ItemWrapper = styled.div`
    height: 100px;
    border-radius: 5px; 
    border: 2px solid #800000;
    padding: 10px 20px;
`

export const Item = ({item}) => {

  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handleCountChangeClick = (newCount) => {
    setCount(newCount);
  }

  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart(item, count));
    setCount(1);
  }

  return (
    <ItemWrapper>
        {item.name}
        <input type="number" value={count} onChange={(event) => handleCountChangeClick(event.target.value)}></input>
        <button onClick={handleAddToCart}>Add to cart</button>
    </ItemWrapper>
  )
}
