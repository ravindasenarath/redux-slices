import { useSelector } from 'react-redux';

export const useFilters = () => {
    return useSelector((state) => state.filters);
}