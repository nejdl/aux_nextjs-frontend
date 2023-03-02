// import { homeMenuItem } from '../Menu/MenuItems';
// import { transformMenuItemToSlug } from '../Menu/MenuItems';
// import { transformMenuItemToApiSlug } from '../Menu/MenuItems';

export const homeMenuItem = 'Home';
export const homeMenuItemSlug = '';
export const homeMenuItemApiSlug = '';
export const aboutMenuItem = 'About';
export const aboutMenuItemSlug = 'about';
export const aboutMenuItemApiSlug = 'about';
export const blogMenuItem = 'Blog';
export const blogMenuItemSlug = 'blog';
export const blogMenuItemApiSlug = 'blog';

export const transformMenuItemToSlug = (menuItem) => {
    switch (menuItem){
        case homeMenuItem:
            return homeMenuItemSlug;
        case aboutMenuItem:
            return aboutMenuItemSlug;
        case blogMenuItem:
            return blogMenuItemSlug;
        default: 
            return '';
    }
}

export const transformMenuItemToApiSlug = (menuItem) => {
    switch (menuItem){
        case homeMenuItem:
            return homeMenuItemApiSlug;
        case aboutMenuItem:
            return aboutMenuItemApiSlug;
        case blogMenuItem:
            return blogMenuItemApiSlug;
        default: 
            return '';
    }
}

