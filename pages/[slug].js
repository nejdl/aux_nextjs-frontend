// import ReactGA from 'react-ga';

import {
  getSingletonData,
  getCollectionData,
  getSlugsOfCollectionEntries,
} from '../utils/getData';
import HtmlHead from '../components/HtmlHead/HtmlHead';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';

export const getStaticPaths = async () => {
  const pagesPaths = await getSlugsOfCollectionEntries('pages');
  const eventsPaths = await getSlugsOfCollectionEntries('events');

  const paths = [...pagesPaths, ...eventsPaths];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const metaData = await getSingletonData('metaData');
  // get pages data
  let pageData = null;
  const pagesData = await getCollectionData('pages');
  // find page according to current slug
  pageData = pagesData.entries.find((x) => x.slug === params.slug);
  // if no page is found, check for events according to current slug
  const eventsData = await getCollectionData('events');
  if (!pageData) {
    const eventData = eventsData.entries.find((x) => x.slug === params.slug);
    pageData = eventData;
  }

  return {
    props: {
      metaData,
      pageData,
      pagesData,
      eventsData,
    },
  };
};

const Page = ({ metaData, pageData, pagesData, eventsData, playerRef }) => {
  // style differently if page is event
  // and therefore has a date
  const isEvent = pageData.date;

  // useEffect(() => {
  // // Google Analytics
  // ReactGA.initialize('');
  // ReactGA.pageview(pageSlug);
  // }, [])

  return (
    <div className={isEvent ? 'eventPage' : ''}>
      <HtmlHead metaData={metaData} pageTitle={pageData.title} />

      <Header
        pagesData={pagesData}
        eventsData={eventsData}
        playerRef={playerRef}
        isEvent={isEvent}
      />

      <Content data={pageData} />
    </div>
  );
};

export default Page;
