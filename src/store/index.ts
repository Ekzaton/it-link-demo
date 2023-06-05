import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { search } from './api/search';
import items from './slices/items';

export const store = configureStore({
    reducer: {
        items,
        search: search.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(search.middleware);
    },
});

type AppState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
