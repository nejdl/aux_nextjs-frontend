import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import '../styles/styles.scss';
import SoundSettings from '../components/Header/SoundSettings/SoundSettings';

const PlayerWithNoSSR = dynamic(() => import('../components/Player/Player'), {
  ssr: false,
})

const MyApp =({ Component, pageProps }) => {
  // QUESTION: is it  ok to set the ref as state and mutate it directly through playerRef.play() etc.? 
  const [playerRef, setPlayerRef] = useState([]);
  
  const pagePropsAndPlayerRef = {...pageProps, playerRef: playerRef}

  const checkIfOnEventPage = () => {
    if(pageProps.pageData){
      if (pageProps.pageData.date){
          return true;
      } 
    }  
  }
 
  return (
    <>
      <header className={checkIfOnEventPage() ? 'onEventPage soundSettings' : 'soundSettings'}>
        <SoundSettings
            playerRef={playerRef}
            pageProps={pageProps} />
      </header>
      <Component {...pagePropsAndPlayerRef} />
      <PlayerWithNoSSR 
        setPlayerRef={setPlayerRef} />
    </>
  )
}

export default MyApp;
