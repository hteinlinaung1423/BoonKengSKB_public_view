import React from 'react';
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PostCardContainer from "./PostCardContainer";


const muiBaseTheme = createMuiTheme();

const Post = () => {

    return (
        <MuiThemeProvider
            theme={createMuiTheme({
                typography: {
                    useNextVariants: true
                },
                overrides: PostCardContainer.getTheme(muiBaseTheme)
            })}
        >
            <PostCardContainer />
        </MuiThemeProvider>
    )
};
export { Post as default }