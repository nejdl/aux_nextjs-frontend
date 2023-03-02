// import ReactGA from 'react-ga';
import Link from 'next/link';

import { getSingletonData, getCollectionData } from '../utils/getData';
import { backendUrlForImages } from '../utils/backendUrl';
import CheckIfDataIsDefinedWrapper from '../utils/CheckIfDataIsDefinedWrapper';
import HtmlHead from '../components/HtmlHead/HtmlHead';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Shape from '../components/Shape/Shape';

export const getStaticProps = async () => {
  const metaData = await getSingletonData('metaData');
  const coverimageData = await getSingletonData('coverimage');
  const aboutPageData = await getSingletonData('about');
  const pagesData = await getCollectionData('pages');
  const eventsData = await getCollectionData('events');
  const audioFilesData = await getCollectionData('audioFiles');

  return {
    props: {
      metaData,
      coverimageData,
      aboutPageData,
      pagesData,
      eventsData,
      audioFilesData,
    },
  };
};

const HomePage = ({
  metaData,
  coverimageData,
  aboutPageData,
  pagesData,
  eventsData,
  playerRef,
}) => {
  const coverimage = coverimageData.coverimage;

  // useEffect(() => {
  // // Google Analytics
  // ReactGA.initialize('');
  // ReactGA.pageview(pageSlug);
  // }, [])

  return (
    <div>
      <HtmlHead metaData={metaData} pageTitle={metaData.title} />

      <Header
        pagesData={pagesData}
        eventsData={eventsData}
        playerRef={playerRef}
      />

      {/* <Shape /> */}
      {/* <img className='dropShadowOutline' src='/assets/imgs/shape.png' /> */}
      {/* <img className='blurredThreshold' src='/assets/imgs/shape-blurred.png' /> */}
      {/* <img className='blurredThreshold' src='/assets/imgs/shape-blurred.png' /> */}

      <CheckIfDataIsDefinedWrapper data={coverimage}>
        <div className="startPageImage">
          <div className="colorOverlay"></div>
          {coverimage && <img src={backendUrlForImages + coverimage.path} />}
        </div>
      </CheckIfDataIsDefinedWrapper>
      {/* <Content
          data={aboutPageData} /> */}
    </div>
  );
};

export default HomePage;
