"use client";
import React, { useState } from 'react'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import { mockFetch } from '../utils/mock-fetch';

const vdoCipherPage = () => {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [otp, setOpt] = useState("");
    const [playbackInfo, setPlaybackInfo] = useState("");

    const loadVideo = async (id) => {
        setLoading(true);
        setCurrentVideo(id);
        const result = await mockFetch(id);
        setOpt(result.otp);
        setPlaybackInfo(result.playbackInfo);
        setLoading(false);
    }

    const hide = () => {
        setCurrentVideo(null)
    }

    return (
        <div className='bg-slate-950'>
            <div className='container mx-auto py-5'>
                <div className='grid grid-cols-3 gap-2 lg:gap-8'>
                    <div className='col-span-full w-full space-y-8 lg:col-span-2 border-4 rounded-xl overflow-hidden border-slate-50/[0.06] shadow-1 bg-slate-900'>
                        <div className='z-10 flex aspect-video w-full flex-col justify-center'>
                            {loading && currentVideo && <span className='text-white text-center block'>Loading...</span>}
                            {!loading && currentVideo && (
                                <VideoPlayer loading={loading} currentVideo={currentVideo} otp={otp} playbackInfo={playbackInfo} />
                            )}
                        </div>
                    </div>

                    <div className='bg-slate-900 border-slate-50/[0.06] shadow-1 rounded-md border dark:border-slate-50/[0.06] lg:col-span-1 lg:rounded-lg'>
                        <h1 className='text-2xl text-white text-center pt-3'>&mdash; Video List &mdash;</h1>
                        <ul className="flex justify-center">
                            <li>
                                <button onClick={() => loadVideo(1)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-4">One video</button>
                            </li>
                            <li>
                                <button onClick={() => loadVideo(2)} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-4">Another video</button>
                            </li>
                            <li>
                                <button onClick={() => hide()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-4">No video</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default vdoCipherPage;

// import React, { Component } from "react";
// import { mockFetch } from "../utils/mock-fetch";
// import VideoPlayer from "./VideoPlayer";

// class HelloWorld extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentVideo: null,
//             loading: false,
//             otp: "",
//             playbackInfo: ""
//         };
//     }

//     async loadVideo(id) {
//         // cancel ongoing fetch if any

//         this.setState({
//             loading: true,
//             currentVideo: id
//         });
//         const result = await mockFetch(id);

//         this.setState({
//             otp: result.otp,
//             playbackInfo: result.playbackInfo,
//             loading: false
//         });
//     }

//     hide() {
//         // cancel ongoing fetch if any
//         this.setState({
//             currentVideo: null
//         });
//     }
//     render() {
//         const { loading, currentVideo, otp, playbackInfo } = this.state;
//         return (
//             <div>
//                 <ul className="flex justify-center">
//                     <li>
//                         <button onClick={() => this.loadVideo(1)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-4">One video</button>
//                     </li>
//                     <li>
//                         <button onClick={() => this.loadVideo(2)} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-4">Another video</button>
//                     </li>
//                     <li>
//                         <button onClick={() => this.hide()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-4">No video</button>
//                     </li>
//                 </ul>
//                 {loading && currentVideo && <span>Loading...</span>}
//                 {!loading && currentVideo && (
//                     <VideoPlayer otp={otp} playbackInfo={playbackInfo} />
//                 )}
//             </div>
//         );
//     }
// }

// export default HelloWorld;