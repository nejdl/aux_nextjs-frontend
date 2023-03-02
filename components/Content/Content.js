import Title from './Title/Title';
import Info from './Info/Info';
import Description from './Description/Description';
import ConnectedAudio from './ConnectedAudio/ConnectedAudio';
import Images from './Images/Images';
import Shape from './Shape/Shape';

const Content = ({ data }) => {
    // style differently if page is event 
    // and therefore has a date
    const isEvent = data.date;

    return (
        <main className={isEvent ? 'onEventPage': ''}>
            <Title 
                data={data} />
            <Description 
                data={data} />
            <Info 
                data={data} />
            {/* <ConnectedAudio 
                data={data} /> */}
            <Shape 
                data={data} />
            <Images 
                data={data} />
        </main>
    )
}

export default Content;