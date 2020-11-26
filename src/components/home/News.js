import React from 'react';
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import NewsContainer from "./NewsContainer";


const muiBaseTheme = createMuiTheme();

const News = () => {

    return (
        <MuiThemeProvider
            theme={createMuiTheme({
                typography: {
                    useNextVariants: true
                },
                overrides: NewsContainer.getTheme(muiBaseTheme)
            })}
        >
            <NewsContainer />
        </MuiThemeProvider>
    )
};
export { News as default }