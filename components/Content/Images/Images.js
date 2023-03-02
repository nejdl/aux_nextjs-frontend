import { backendUrlForImages } from '../../../utils/backendUrl';
import CheckIfDataIsDefinedWrapper from '../../../utils/CheckIfDataIsDefinedWrapper';

const Images = ({ data }) => {
  const images = data.images;

  return (
    <CheckIfDataIsDefinedWrapper data={images}>
      {images.length != 0 &&
        images.map((image, index) => (
          <div className='imageWrapper' key={index}>
            <CheckIfDataIsDefinedWrapper data={image.meta.title}>
              <div className='caption'>{image.meta.title}</div>
            </CheckIfDataIsDefinedWrapper>
            <div className='image'>
              <div className='colorOverlay'></div>
              <img src={backendUrlForImages + image.path} />
            </div>
          </div>
        ))}
    </CheckIfDataIsDefinedWrapper>
  );
};

export default Images;
