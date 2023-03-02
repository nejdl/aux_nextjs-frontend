import parse from 'html-react-parser';
import CheckIfDataIsDefinedWrapper from '../../../utils/CheckIfDataIsDefinedWrapper';

const Info = ({ data }) => {
    const info = data.info;
    
    return (
        <CheckIfDataIsDefinedWrapper data={info}>
            <div className='info'>
                {parse(info)}
            </div>
        </CheckIfDataIsDefinedWrapper>
    )
}

export default Info;