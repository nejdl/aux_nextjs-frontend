import { backendUrlForAssets } from '../../../utils/backendUrl';
import CheckIfDataIsDefinedWrapper from '../../../utils/CheckIfDataIsDefinedWrapper';

const ConnectedAudio = ({ data }) => {
    const connectedAudio = data.connectedAudio;
    
    return (
        <CheckIfDataIsDefinedWrapper data={connectedAudio}>
            {connectedAudio.length != 0
            && connectedAudio.map((audio, index) => (
                <div
                    key={index} 
                    className='audio'>
                    <pre>
                        {JSON.stringify(audio, null, 2)}
                    </pre>
                </div>
            ))}
        </CheckIfDataIsDefinedWrapper>
    )
}

export default ConnectedAudio;