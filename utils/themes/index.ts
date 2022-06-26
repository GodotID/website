import { extendTheme, ThemeConfig } from '@chakra-ui/react';
// add font sources
import "@fontsource/inter";
import "@fontsource/ubuntu";

const themeConfig: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
}


export default extendTheme({
    config: themeConfig,
    fonts: {
        heading: `'Ubuntu','Inter',sans-serif`,
        body: `'Ubuntu','Inter',sans-serif`,
    }
})
