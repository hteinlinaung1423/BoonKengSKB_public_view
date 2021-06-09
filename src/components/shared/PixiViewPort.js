import React from "react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { PixiComponent } from "@inlet/react-pixi";
import { useApp } from '@inlet/react-pixi'

const domElement = document.querySelector('#root');
let initWidth = domElement.offsetWidth;
let initHeight = domElement.offsetHeight;

if (initWidth < 2000) {
    initWidth = 1920;
    initHeight = 900;
}

const Props = () => {
    children: React.ReactNode
    screenWidth: initWidth;
    screenHeight: initHeight;
    worldWidth: initWidth;
    worldHeight: initHeight;
}

const Viewport = (Props) => {
    const app = useApp();
    return <PixiComponentViewport app={app} {...Props} />;
};

const PixiComponentProps = () => {
    app: PIXI.Application;
}

const PixiComponentViewport = PixiComponent("Viewport", {
    create: (PixiComponentProps) => {
        const viewport = new PixiViewport({
            screenWidth: initWidth,
            screenHeight: initHeight,
            worldWidth: initWidth,
            worldHeight: initHeight,
            ticker: PixiComponentProps.app.ticker,
            interaction: PixiComponentProps.app.renderer.plugins.interaction
            // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
        });

        viewport
            .drag()
            .pinch()
            .wheel()
            //.bounce({ underflow: 'center', sides: 'all', ease: 'easeInOutSine', time: 150 })
            .clamp({ direction: 'all' })
            .clampZoom({ minWidth: 500, minHeight: 500, maxWidth: initWidth, maxHeight: initHeight })
            .decelerate({ friction: 0.95, minSpeed: 0.01 });

        return viewport;
    },
});

export default Viewport;