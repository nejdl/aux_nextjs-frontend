import parse from 'html-react-parser';
import CheckIfDataIsDefinedWrapper from '../../../utils/CheckIfDataIsDefinedWrapper';

const Description = ({ data }) => {
    const description = data.description;
    
    return (
        <CheckIfDataIsDefinedWrapper data={description}>
            <div className='description'>
                {parse(description)}
            </div>
        </CheckIfDataIsDefinedWrapper>
    )
}

export default Description;