'use client';

import { ReactNode } from 'react';
import { Container } from "react-bootstrap";

import Providers from "@/app/providers";
import AppHeader from "@/components/AppHeader/AppHeader";
import AppFooter from "@/components/AppFooter/AppFooter";

import './globals.scss'

type RootLayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru">
            <head>
                <title>IT-Link Demo</title>
                <meta name='description' content='IT-Link Demo Application' />
            </head>
            <body>
            <Providers>
                <AppHeader />
                <main>
                    <Container>{children}</Container>
                </main>
                <AppFooter />
            </Providers>
            </body>
        </html>
    )
}
