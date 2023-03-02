import parse from 'html-react-parser';
import CheckIfDataIsDefinedWrapper from '../../../utils/CheckIfDataIsDefinedWrapper';

const Description = ({ title, data }) => {    
    return (
        <CheckIfDataIsDefinedWrapper data={data}>
            <div className='subtitle'>
                {title}
            </div>
            <div className='textWithTitle'>
                {parse(data)}
            </div>
        </CheckIfDataIsDefinedWrapper>
    )
}

export default Description;