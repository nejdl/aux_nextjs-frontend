const MobileMenuWrapper = ({ children, isMobile, mobileMenuVisible, toggleMobileMenu }) => {
    if(isMobile){
        return (
            <>
                <div 
                    onClick={toggleMobileMenu} 
                    className={`menuItem mobileMenuButton noselect ${mobileMenuVisible ? 'active' : ''}`}>
                    menu)
                </div>
                <div className={`mobileMenu noselect ${!mobileMenuVisible ? 'hidden' : ''}`}>
                    {children}
                </div>
            </>
        )
    } else {
        return children;
    }
}

export default MobileMenuWrapper;