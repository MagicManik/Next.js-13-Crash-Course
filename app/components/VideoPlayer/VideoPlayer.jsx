import React, { useEffect, useRef } from 'react';

const VideoPlayer = ({ otp, playbackInfo }) => {
    const containerRef = useRef(null);

    const loadPlayer = () => {
        window.playerContainer = containerRef.current; // here some change
        new window.VdoPlayer({
            otp: otp,
            playbackInfo: playbackInfo,
            theme: "9ae8bbe8dd964ddc9bdb932cca1cb59a",
            container: containerRef.current // here some change
        });
    }

    useEffect(() => {
        if (window.VdoPlayer) {
            loadPlayer();
        } else {
            const playerScript = document.createElement("script");
            playerScript.src = "https://player.vdocipher.com/playerAssets/1.6.10/vdo.js";
            document.body.appendChild(playerScript);

            playerScript.addEventListener("load", loadPlayer); // here some change

            return () => {
                playerScript.removeEventListener("load", loadPlayer);
            };
        }
    }, [otp, playbackInfo]);

    return (
        <div className='relative'>
            <div className='flex h-full w-full items-center justify-center' ref={containerRef}></div>
        </div>
    );
}

export default VideoPlayer;


// import React, { Component } from "react";

// class VideoPlayer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             videoObject: null
//         };
//     }

//     componentDidMount() {
//         if (window.VdoPlayer) {
//             return this.loadPlayer();
//         }
//         const playerScript = document.createElement("script");
//         playerScript.src = "https://player.vdocipher.com/playerAssets/1.6.10/vdo.js";
//         document.body.appendChild(playerScript);
//         playerScript.addEventListener("load", () => {
//             return this.loadPlayer();
//         });
//     }

//     loadPlayer() {
//         window.playerContainer = this.refs.container;
//         new window.VdoPlayer({
//             otp: this.props.otp,
//             playbackInfo: this.props.playbackInfo,
//             theme: "9ae8bbe8dd964ddc9bdb932cca1cb59a",
//             container: this.refs.container
//         });
//     }

//     render() {
//         return <div className="player" ref="container"></div>;
//     }
// }

// export default VideoPlayer;
