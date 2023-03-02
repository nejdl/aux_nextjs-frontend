import Head from 'next/head';
import { useEffect } from 'react';

import { backendUrlForImages } from '../../utils/backendUrl';

const HtmlHead = ({ pageTitle, metaData }) => {
    // site url
    let siteUrl = ''
    useEffect(() => {
        if (typeof window !== 'undefined') {
            siteUrl = window.location.hostname;
        }
    })
    // description
    const description = metaData.description;
    // keywords
    let keywords = ''
    if(metaData.keywords){
        keywords = metaData.keywords.join(', ');
    }
    // share image
    let shareImageUrl = '';
    if(metaData.image){
        shareImageUrl = backendUrlForImages + metaData.image.path
    }

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta charSet="UTF-8" />
            <meta 
                name="viewport" 
                content="width=device-width,initial-scale=1" />

            {/* DESCRIPTION / KEYWORDS */}
            <meta
                name="description"
                content={description}
            />
            <meta 
                name="keywords" 
                content={keywords} />

            {/* TWITTER & FB THUMBNAILS */}
            <meta 
                property="og:title" 
                content={pageTitle} />
            <meta 
                property="og:description" 
                content={description} />
            <meta 
                property="og:image" 
                content={shareImageUrl} />
            <meta 
                property="og:url" 
                content={siteUrl} />
            <meta 
                name="twitter:card" 
                content="summary_large_image" />
            
            {/* FAVICON */}
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/assets/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#ee4036" />
            <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
            <meta name="msapplication-TileColor" content="#ee4036" />
            <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />
    
        </Head>
    )
}

export default HtmlHead;