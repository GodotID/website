import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app'
import themes from '@utils/themes';

// Styles
import './global.scss'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={themes}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
