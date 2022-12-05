import React, { useCallback, useMemo } from 'react'
import { useCart } from '../redux/cart/selectors'
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce'
import { filterActions } from '../redux/filters/action'
import styled from 'styled-components'
import { ItemList } from './ItemList';

const MainPage = styled.div`
    display:flex;
    flex-direction: column;
`

const FilterBar = styled.div`
    border-radius: 5px; 
    border: 2px solid #800000;
    padding: 10px 20px;
`

const ContentArea = styled.div`
    width: 100%;
    height: 100vh - 100px;
`

export const Main = () => {
    const cart = useCart();
    const dispath = useDispatch();

    const handlePhraseChange = useCallback((event) => {
        dispath(filterActions.setPhrase(event.target.value));
    }, [dispath])

    const debounedHandlePhraseChange = useMemo(
        () => debounce(handlePhraseChange, 300)
    ,[handlePhraseChange]);

  return (
    <MainPage>
        <FilterBar>
            Search here
            <input type="text" onChange={debounedHandlePhraseChange}/>
            Items in cart - {cart.items.length}
        </FilterBar>
        <ContentArea>
            <ItemList/>
        </ContentArea>
    </MainPage>
    )
}
