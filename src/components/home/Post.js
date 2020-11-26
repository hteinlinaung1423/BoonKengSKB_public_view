import React from 'react';
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PostContainer from "./PostContainer";


const muiBaseTheme = createMuiTheme();

const Post = () => {

    return (
        <MuiThemeProvider
            theme={createMuiTheme({
                typography: {
                    useNextVariants: true
                },
                overrides: PostContainer.getTheme(muiBaseTheme)
            })}
        >
            <PostContainer />
        </MuiThemeProvider>
    )
};
export { Post as default }