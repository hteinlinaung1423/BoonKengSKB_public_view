import React from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import RegisterContainer from "./RegisterContainer";

const muiBaseTheme = createMuiTheme();

export default function Register() {

    return (
        <MuiThemeProvider
            theme={createMuiTheme({
                typography: {
                    useNextVariants: true
                },
                overrides: RegisterContainer.getTheme(muiBaseTheme)
            })}>
            <RegisterContainer />
        </MuiThemeProvider>
    );
}