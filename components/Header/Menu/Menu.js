import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { useMediaQuery } from '@react-hook/media-query'

import Logo from './Logo/Logo';
import MobileMenuWrapper from './MobileMenuWrapper';

const Menu = ({ pagesData, eventsData }) => {
    let isMobile = useMediaQuery('screen and (max-width: 600px)');
    const router = useRouter();

    const formatDate = (event) => {
        const eventIsPublished = event.published;
        const date = event.date;

        if(eventIsPublished){
            const dateArray = date.split(/\D/g)
            const reformattedDate = [dateArray[2], dateArray[1], dateArray[0]].join(".")
            return reformattedDate;
        } else {
            return '00.00.0000';
        }
    }

    const getEventClassNames = (event) => {
        const eventClassNamesArray = ['menuItem', 'menuItemEvent'];

        const eventIsActive = (router.asPath == '/' + event.slug);
        if(eventIsActive){
            eventClassNamesArray.push('active')
        }

        const eventIsPublished = event.published;
        if(eventIsPublished){
            eventClassNamesArray.push('published')
        } else {
            eventClassNamesArray.push('unpublished')
        }

        const eventClassNames = eventClassNamesArray.join(' ');
        return eventClassNames;
    }

    // const sort events data
    const sortEventsData = (data) => {
        return data.sort((a, b) => new Date(a.date) - new Date(b.date));
    } 
    const copiedEventsDataEntries = [...eventsData.entries];
    const sortedEventsData = sortEventsData(copiedEventsDataEntries);

    // mobile menu
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    }
    // to resolve hydration warning because of custom media query hook
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className='navigation'>
            <Logo />
            {mounted
            && <MobileMenuWrapper
                    isMobile={isMobile}
                    mobileMenuVisible={mobileMenuVisible}
                    toggleMobileMenu={toggleMobileMenu} >
                    <Link 
                        href={'/info'}>
                        <a 
                            className={router.asPath == '/info' ? 'menuItem menuItemPage active' : 'menuItem menuItemPage'}>
                            info)
                        </a>
                    </Link>
                    {pagesData.entries.map((page) => (
                        <Link 
                            href={'/' + page.slug}
                            key={page.slug}>
                            <a 
                                className={router.asPath == '/' + page.slug ? 'menuItem menuItemPage active' : 'menuItem menuItemPage'}>
                                {page.title})
                            </a>
                        </Link>
                    ))}
                    {sortedEventsData.map((event) => {
                        return (
                            <Link 
                                href={'/' + event.slug}
                                key={event.slug}>
                                <a 
                                    className={getEventClassNames(event)}>
                                    <div
                                        className='indicator'>
                                    </div>
                                    <div className='date'>
                                        {formatDate(event)}
                                    </div>
                                </a>
                            </Link>
                    )})}
                </ MobileMenuWrapper>
            }
        </div>
    )
}



export default Menu;