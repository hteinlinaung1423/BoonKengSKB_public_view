import React from 'react';
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import EngagementCardContainer from "./EngagementCardContainer";


const muiBaseTheme = createMuiTheme();

const EngagementCard = () => {

    return (
        <MuiThemeProvider
            theme={createMuiTheme({
                typography: {
                    useNextVariants: true
                },
                overrides: EngagementCardContainer.getTheme(muiBaseTheme)
            })}
        >
            <EngagementCardContainer />
        </MuiThemeProvider>
    )
};
export { EngagementCard as default }