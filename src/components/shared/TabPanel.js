import React from 'react';
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TabPanelContainer from "./TabPanelContainer";

const muiBaseTheme = createMuiTheme();

const TabPanel = () => {


    return (
        <MuiThemeProvider
            theme={createMuiTheme({
                typography: {
                    useNextVariants: true
                },
                overrides: TabPanelContainer.getTheme(muiBaseTheme)
            })}
        >
            <TabPanelContainer />
        </MuiThemeProvider>
    )
};
export { TabPanel as default }

