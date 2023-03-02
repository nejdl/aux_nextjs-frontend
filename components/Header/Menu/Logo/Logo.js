import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

const Logo = () => {
    const router = useRouter();
    const pathname = router.pathname;

    const initLetterStatus = [false, false, false, false];
    const [letterStatus, setLetterStatus] = useState(initLetterStatus);

    const minIntervalTime = 300;
    const maxIntervalTime = 1000;
    const [randomIntervalTime, setRandomIntervalTime] = useState();
    const [stepSequenceInterval, setStepSequenceInterval] = useState();

    let currentActiveLetter = 0;

    const startStepSequencer = () => {
        const sequenceInterval = setInterval(() => {
            stepSequenceLetters();
        }, randomIntervalTime);
        setStepSequenceInterval(sequenceInterval);
    }

    const stepSequenceLetters = () => {
        const updatedLetterStatus = [...initLetterStatus];
        updatedLetterStatus[currentActiveLetter] = true;
        setLetterStatus(updatedLetterStatus)

        if (currentActiveLetter < letterStatus.length - 1){
            currentActiveLetter += 1;
        } else {
            currentActiveLetter = 0;
        }
    }

    useEffect(() => {
        clearInterval(stepSequenceInterval);
    
        if(randomIntervalTime){
            startStepSequencer();
        }

        return () => {
            // stop interval
            clearInterval(stepSequenceInterval);
            setStepSequenceInterval();
        }
    }, [randomIntervalTime])


    useEffect(() => {
        const handleRouteChange = () => {
            const randomTime = Math.floor((Math.random()*maxIntervalTime)+minIntervalTime)
            setRandomIntervalTime(randomTime);
        }
        handleRouteChange()
        
        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])


    return (
        <Link href={'/'}>
            <a
                className={`menuItem logo noselect ${pathname == '/' ? 'active' : ''}`}>
                <div className={letterStatus[0] ? 'letter active' : 'letter'}>a</div>
                <div className={letterStatus[1] ? 'letter active' : 'letter'}>u</div>
                <div className={letterStatus[2] ? 'letter active' : 'letter'}>x</div>
                <div className={letterStatus[3] ? 'letter active' : 'letter'}>)</div>
            </a>
        </Link>
    )
}

export default Logo;