import CheckIfDataIsDefinedWrapper from '../../../utils/CheckIfDataIsDefinedWrapper';

const Title = ({ data }) => {
    const title = data.title;

    // only show title if page is event 
    // and therefore has a date
    const isEvent = data.date;

    return (
        <CheckIfDataIsDefinedWrapper data={title}>
            <CheckIfDataIsDefinedWrapper data={isEvent}>
            <div className='title'>
                {title}
            </div>
            </CheckIfDataIsDefinedWrapper>
        </CheckIfDataIsDefinedWrapper>
    )
}

export default Title;