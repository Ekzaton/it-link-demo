"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "@/store";

import 'bootstrap/dist/css/bootstrap.min.css';

type ProvidersProps = {
    children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
