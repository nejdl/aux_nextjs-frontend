import { useEffect, useState } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';

import { getCollectionData } from '../../utils/getData';
import { backendUrlForAssets } from '../../utils/backendUrl';

const Player = ({ setPlayerRef }) => {
    const [audioFiles, setAudioFiles] = useState([]);

    const getAndSetAudioFiles = async () => {
        // get audio files from backend
        const audioFiles = await getCollectionData('audioFiles');
        const audioFilesArray = [];
        // format audio files data into array
        for(let i = 0; i < audioFiles.entries.length; i++){
            const audioFile = audioFiles.entries[i];
            audioFilesArray.push({
                musicSrc: backendUrlForAssets + audioFile.file.path,
                name: audioFile.title,
                // duration: ''
                // singer: '',
            })
        }
        // QUESTION: is map or for loop preferred?
        // audioFiles.entries.map((audioFile) => {
        //     audioFilesArray.push({
        //         musicSrc: backendUrlForAssets + audioFile.file.path,
        //         name: audioFile.title,
        //     })
        // });

        // set audio files array to player
        setAudioFiles(audioFilesArray);
    } 

    useEffect(() => {
        // get and set audio files
        getAndSetAudioFiles();
    }, [])
       

    // COLLAPSE
    // collapse player after timeout if it isn’t hovered
    const collapseTimeout = 30000;
    const [playerIsHovered, setPlayerIsHovered] = useState(false);

    const handleMouseEnter = () => {
        if(!playerIsHovered){
            setPlayerIsHovered(true);
            const playerPanel = document.querySelector('.music-player-panel');
            playerPanel.classList.remove('collapsed');
        }
    }
    const handleMouseLeave = () => {
        if(playerIsHovered){
            setPlayerIsHovered(false);
        }
    }

    // start collapsing player after timeout loop
    useEffect(() => {
        const collapseInterval = setInterval(collapsePlayerAfterTimeout, collapseTimeout);

        return () => {
            clearInterval(collapseInterval);
        }
    })

    const collapsePlayerAfterTimeout = () => {
        const playerPanel = document.querySelector('.music-player-panel');
        const playlist = document.querySelector('.audio-lists-panel');

        if(playerPanel && playlist){
            const playlistIsVisible = playlist.classList.contains('show');

            if(!playerIsHovered && !playlistIsVisible){
                playerPanel.classList.add('collapsed');
            }
        }
    }

    return (
        <div
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave} >
            <ReactJkMusicPlayer
                getAudioInstance={(instance) => {
                    setPlayerRef(instance);
                }}
                audioLists={audioFiles}
                // RESPONSIVE
                mode='full'
                responsive={false}
                // MINI PLAYER
                drag={true}
                showMiniProcessBar={true}
                showMiniModeCover={false}
                // STYLING
                glassBg={true}
                theme='dark'
                autoHiddenCover={true}
                // OPTIONS
                toggleMode={false}
                showProgressLoadBar={false}
                showPlay={true}
                showReload={false}
                showDownload={false}
                showPlayMode={false}
                showThemeSwitch={false}
                showLyrics={false}
                showDestroy={false}
                // SETTINGS
                spaceBar={true}
                autoPlay={false}
                defaultPlayMode='orderLoop'
                // preload={true}
                // autoplayInitLoadPlayList={true}
                // remember={true}
                // clearPriorAudioLists={false}
                // restartCurrentOnPrev={false}
                // quietUpdate={true}
                // remove={false}
                />
        </div>
    )
}

export default Player;