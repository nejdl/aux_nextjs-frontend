import { backendUrlForImages } from '../../../utils/backendUrl';
import CheckIfDataIsDefinedWrapper from '../../../utils/CheckIfDataIsDefinedWrapper';

const Shape = ({ data }) => {
    const shape = data.shape;

    return (
        <CheckIfDataIsDefinedWrapper data={shape}>
            <div
                className='shape'>
                {shape 
                    && <img
                    src={backendUrlForImages + shape.path} />
                }
            </div>
        </CheckIfDataIsDefinedWrapper>
    )
}

export default Shape;