// import ReactGA from 'react-ga';
import Link from 'next/link';
import parse from 'html-react-parser';

import { getSingletonData, getCollectionData } from '../utils/getData';
import HtmlHead from '../components/HtmlHead/HtmlHead';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Title from '../components/Content/Title/Title';
import Info from '../components/Content/Info/Info';
import Description from '../components/Content/Description/Description';
import ConnectedAudio from '../components/Content/ConnectedAudio/ConnectedAudio';
import Images from '../components/Content/Images/Images';
import TextWithTitle from '../components/Content/TextWithTitle/TextWithTitle';

export const getStaticProps = async () => {
  const metaData = await getSingletonData('metaData');
  const aboutPageData = await getSingletonData('about');
  const pagesData = await getCollectionData('pages');
  const eventsData = await getCollectionData('events');
  const audioFilesData = await getCollectionData('audioFiles');

  return {
    props: {
      metaData,
      aboutPageData,
      pagesData,
      eventsData,
      audioFilesData,
    },
  };
};

const InfoPage = ({
  metaData,
  aboutPageData,
  pagesData,
  eventsData,
  playerRef,
}) => {
  // useEffect(() => {
  // // Google Analytics
  // ReactGA.initialize('');
  // ReactGA.pageview(pageSlug);
  // }, [])

  const facilitators1 = parse(aboutPageData.facilitators1);
  const facilitators2 = parse(aboutPageData.facilitators2);
  const facilitators3 = parse(aboutPageData.facilitators3);
  const facilitators4 = parse(aboutPageData.facilitators4);
  const facilitators5 = parse(aboutPageData.facilitators5);
  const facilitators6 = parse(aboutPageData.facilitators6);
  const contact1 = parse(aboutPageData.contact1);
  const contact2 = parse(aboutPageData.contact2);

  return (
    <div>
      <HtmlHead metaData={metaData} pageTitle={metaData.title} />

      <Header
        pagesData={pagesData}
        eventsData={eventsData}
        playerRef={playerRef}
      />

      <main>
        <Title data={aboutPageData} />
        <Description data={aboutPageData} />
        <Info data={aboutPageData} />

        <div className="subtitle">Facilitators</div>
        <div className="text" id="text7">
          {facilitators1}
        </div>
        <div className="text" id="text8">
          {facilitators2}
        </div>
        <div className="text" id="text9">
          {facilitators3}
        </div>
        <div className="text" id="text10">
          {facilitators4}
        </div>
        <div className="text" id="text4">
          {facilitators5}
        </div>
        <div className="text" id="text3">
          {facilitators6}
        </div>

        <div className="subtitle">Contact</div>
        <div className="text contact" id="text5">
          {/* <div className="text" id="text6"> */}
          {contact1}
        </div>
        <div className="text contact" id="text6">
          {/* <div className="text" id="text10"> */}
          {contact2}
        </div>

        <Images data={aboutPageData} />
      </main>
    </div>
  );
};

export default InfoPage;
