import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Post from "./Post";
import News from "./News";
import PostCard from "./PostCard";
import EngagementCard from "./EngagementCard";
import Grid from '@material-ui/core/Grid';

const Home = () => {
    const history = useHistory();

    const logout = async () => {
        sessionStorage.clear();
        history.push('/')
    }

    return (
        <div style={{ padding: '32px' }}>
            <Grid container justify={"center"}>
                <Grid item xs={12} sm={6} lg={4}>
                    <News />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <EngagementCard />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Post />
                </Grid>
            </Grid>
            <br />
          
            <Grid container justify={"center"}>
                <Grid item xs={12} sm={10} lg={6}>
                    <PostCard />
                </Grid>
            </Grid>

            <Button
                variant={'outlined'}
                color={'danger'} onClick={logout} >
                Log Out
            </Button>
        </div>
    )
};
export { Home as default }

