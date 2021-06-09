import React from 'react';
import { Loader, Texture } from 'pixi.js'
import { Stage, Sprite, Container, AnimatedSprite } from '@inlet/react-pixi'
import Grid from '@material-ui/core/Grid';

import ViewPort from '../shared/PixiViewPort'

const domElement = document.querySelector('#root');
let initWidth = domElement.offsetWidth;
let initHeight = domElement.offsetHeight;

const LandingContainer = () => {

    const loader = Loader.shared; // PixiJS exposes a premade instance for you to use.   

    let xInitial = 0;
    let yInitial = 0;
    if (initWidth < 2000) {
        initWidth = 1920;
        initHeight = 900;
    }
    else {
        xInitial = (initWidth - 1920) / 2;
        yInitial = (initHeight - 900) / 2;
    }

    let backgroundPath = loader.resources["./assets/images/components/game/spritesheets/morningBG.json"].textures[`island__bg-morning.png`]; //morning

    let greenArea = Texture.from(`./assets/images/components/game/isometric/area/greenArea.png`);
    let decoration1 = Texture.from(`./assets/images/components/game/isometric/tree/decoration1.png`);
    let decoration2 = Texture.from(`./assets/images/components/game/isometric/tree/decoration2.png`);
    let areaForest = Texture.from(`./assets/images/components/game/isometric/tree/areaForest.png`);
    let areaForestReverse = Texture.from(`./assets/images/components/game/isometric/tree/areaForestReverse.png`);
    let areaRecreation = Texture.from(`./assets/images/components/game/isometric/tree/areaRecreation.png`);
    let stream = Texture.from(`./assets/images/components/game/isometric/tree/stream.png`);
    let stream2 = Texture.from(`./assets/images/components/game/isometric/tree/stream2.png`);
    let smallForest = Texture.from(`./assets/images/components/game/isometric/tree/smallForest.png`);

    return (
        <div className="gameContainer">
            <Grid container>
                <Stage width={initWidth} height={initHeight}>
                    <ViewPort>
                        <Sprite width={initWidth} height={initHeight} texture={greenArea} />
                        <Container x={xInitial} y={yInitial}>

                            <Sprite y={-20} texture={smallForest} scale={{ x: 0.5, y: 0.5 }} />
                            <Sprite y={50} texture={smallForest} scale={{ x: 0.5, y: 0.5 }} />
                            <Sprite x={180} y={-20} texture={areaForest} scale={{ x: 0.5, y: 0.5 }} />
                            <Sprite texture={decoration2} scale={{ x: 0.5, y: 0.5 }} />

                            <Sprite x={420} texture={stream2} scale={{ x: 0.5, y: 0.5 }} />
                            <Sprite x={820} y={-30} texture={smallForest} scale={{ x: 0.5, y: 0.5 }} />
                            <Sprite x={950} y={-30} texture={areaForestReverse} scale={{ x: 0.5, y: 0.5 }} />

                            <Sprite x={1250} y={-30} texture={areaRecreation} scale={{ x: 0.5, y: 0.5 }} />

                            <Sprite x={1500} texture={stream} scale={{ x: 0.5, y: 0.5 }} />
                            <Sprite x={1450} y={20} texture={decoration1} scale={{ x: 0.5, y: 0.5 }} />
                            <Sprite x={1720} y={20} texture={decoration1} scale={{ x: 0.5, y: 0.5 }} />
                        </Container>
                    </ViewPort>
                </Stage>
            </Grid>
        </div>
    );
}

export { LandingContainer as default }