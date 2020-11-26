import React from 'react';
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LoginContainer from "./LoginContainer";

const muiBaseTheme = createMuiTheme();

export default function Login() {

    return (
        <MuiThemeProvider
            theme={createMuiTheme({
                typography: {
                    useNextVariants: true
                },
                overrides: LoginContainer.getTheme(muiBaseTheme)
            })}>
            <LoginContainer />
        </MuiThemeProvider>
    );
}