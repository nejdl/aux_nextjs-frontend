import Menu from './Menu/Menu';
// import SoundSettings from './SoundSettings/SoundSettings';

const Header = ({ pagesData, eventsData, playerRef, isEvent }) => {
    return(
        <header className={isEvent ? 'onEventPage' : ''}>
            <Menu 
                pagesData={pagesData} 
                eventsData={eventsData} />
            {/* <SoundSettings
                playerRef={playerRef} /> */}
        </header>
    )
}

export default Header;