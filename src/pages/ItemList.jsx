import React from 'react';
import styled from 'styled-components'
import { Item } from './Item';
import { useFilters } from '../redux/filters/selectors';

const ItemContainer = styled.div`
    display:flex;
    flex-direction: column;
    witdh: 100%;
    border-radius: 5px; 
    border: 2px solid #800000;
    padding: 10px 20px;
    gap: 5px;
`;

const items = [
    {
        id: 1,
        name: 'QnQ watch'
    },
    {
        id: 2,
        name: 'Iphone 7'
    },
    {
        id: 3,
        name: 'Dell laptop'
    },
    {
        id: 4,
        name: 'Headphone'
    }
]

export const ItemList = () => {
    const filters = useFilters();
  return (
    <ItemContainer>
        Items sarched for : {filters.phrase}
        {
            items.map(item => (<Item key={item.id} item={item}/>))
        }
    </ItemContainer>
  )
}
