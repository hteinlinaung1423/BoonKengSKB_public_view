import React, { useEffect } from 'react';
import { Loader } from 'pixi.js'
import LandingContainer from './LandingContainer'

const Landing = () => {
    const loader = Loader.shared; // PixiJS exposes a premade instance for you to use.
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const initLanding = async () => {
            addSpritesheetAssets();
            loader.load(setup);
        };
        initLanding();
        return () => loader.reset();
    }, []);

    // loader functions
    const addSpritesheetAssets = () => {
        //common graphic loading
        loader
            //skyAssets
            .add("./assets/images/components/game/spritesheets/cloud.json")
            .add("./assets/images/components/game/spritesheets/skyAsset.json")
            //dayOfTheIsland
            .add("./assets/images/components/game/spritesheets/morningBG.json")
    }


    const setup = () => setLoading(false);

    if (loading) return <>Loading</>;

    return (
        <LandingContainer />
    )
};

export { Landing as default }