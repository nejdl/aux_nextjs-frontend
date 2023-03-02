import { useEffect } from 'react';

import { getSingletonData, getCollectionData } from '../utils/getData';
import { backendUrlForImages } from '../utils/backendUrl';
import HtmlHead from '../components/HtmlHead/HtmlHead';
import Header from '../components/Header/Header';

export const getStaticProps = async () => {
  const metaData = await getSingletonData('metaData');
  const pagesData = await getCollectionData('pages');
  const eventsData = await getCollectionData('events');

  return {
    props: {
      metaData, 
      pagesData, 
      eventsData, 
    }
  }
}
 
const Custom404 = ({ metaData, pagesData, eventsData, playerRef }) => {

    // site url
    let siteUrl = 'https://www.aux-sonic.com'
    useEffect(() => {
        if (typeof window !== 'undefined') {
            siteUrl = window.location.hostname;
        }
    })

  return (
        <div class='errorPage'>

            <HtmlHead metaData={metaData} pageTitle={metaData.title} />

            <Header 
                pagesData={pagesData}
                eventsData={eventsData}
                playerRef={playerRef} />

            <h1>
                <center>
                    <a href={siteUrl}>
                        404 | Page not found. <br/>
                        Return to home.
                    </a>
                </center>
            </h1>
            {/* <Content
                data={aboutPageData} /> */}

      </div>     
  )
}

export default Custom404;