import { useState, ReactDOM } from 'react';

import { startSoundReactiveType, stopSoundReactiveType } from './makeTypeSoundReactive';

const SoundSettings = ({ playerRef }) => {

    const [micOn, setMicOn] = useState(false);
    const handleMicClick = () => {
        if(!micOn){
            startSoundReactiveType();
        } else {
            stopSoundReactiveType();
        }
        setMicOn(!micOn);
    }

    const [playerVisible, setPlayerVisible] = useState(false);
    const handleListenClick = () => {
        if(playerIsLoaded){
            const player = document.querySelector('.react-jinke-music-player-main');
            const playerPanel = document.querySelector('.music-player-panel');


            if(player && playerPanel){
                // if player is currently invisible, make visible and play music
                if(!playerVisible){
                    player.classList.add('show');
                    setPlayerVisible(true);
                    playerRef.play();
                    // make sure the panel is not collapsed
                    playerPanel.classList.remove('collapsed');
                // if player is currently visible, make invisible and pause music
                } else {
                    player.classList.remove('show');
                    setPlayerVisible(false);
                    playerRef.pause();
                }
            }
        }
    }

    const playerIsLoaded = (playerRef) => {
        if(playerRef.length !== 0){
            if(playerRef.src){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    return (
        <div className='soundSettings'>
            <div 
                className='soundSetting button'
                onClick={handleMicClick} >
                <div className={micOn ? 'indicator active' : 'indicator'}>
                </div>
                <div className='soundSettingLabel'>
                    mic
                </div>
            </div>
            <div 
                className='soundSetting button'
                onClick={handleListenClick} >
                <div className={playerVisible ? 'indicator active' : 'indicator'}>
                </div>
                <div className='soundSettingLabel'>
                    listen
                </div>
            </div>
        </div>
    )
}

export default SoundSettings;