import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import './audioplayer.css';

import loffyMusic from './../../../assets/audio/ES_Deprived - Guustavv.mp3'

export const AudioPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const audioElement = useRef(false);
    // const [audioName, setAudioName] = useState("Playing...");
    // SPLIT THE URL BY /
    const splitUrl = audioElement.current.currentSrc?.split("/");
    // THE URL IS THE LAST ARRAY
    const audioName = splitUrl && splitUrl[splitUrl.length -1 ];

    console.log(audioName);

    const handleMusic = () =>{
        if(playing){// IF THE AUDIO IS PLAYING, PAUSE IT
            audioElement.current.pause()
            setPlaying(false)
        }else{// HENCE THE AUDIO IS PAUSED, PLAY THE MUSIC
            setPlaying(true)
            audioElement.current.play()
        }
    }

    return (
        <React.Fragment>    
            <div className="audio-name">
                {playing && <marquee scrollamount="1">{audioName}</marquee>}
            </div>
            <div className="music-player">
                <audio ref={audioElement} loop>

                    <source src={loffyMusic} type="audio/mp3" />

                    <source src="horse.mp3" type="audio/mpeg" />

                    Your browser does not support the audio element.
                </audio>

                <FontAwesomeIcon icon={playing ? faPauseCircle : faPlayCircle } onClick={handleMusic}/>
            </div>
        </React.Fragment>
    )
}
