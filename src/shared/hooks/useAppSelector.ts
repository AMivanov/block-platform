import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '../../redux/store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;