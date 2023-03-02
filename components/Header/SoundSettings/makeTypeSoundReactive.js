let microphoneStream;
let javascriptNode;

export const startSoundReactiveType = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
        microphoneStream = stream;
        let audioContext = new AudioContext();
        let analyser = audioContext.createAnalyser();
        let microphone = audioContext.createMediaStreamSource(microphoneStream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        javascriptNode.onaudioprocess = function() {
            var array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            var values = 0;

            var length = array.length;
            for (var i = 0; i < length; i++) {
                values += (array[i]);
            }

            var average = Math.round(values / length);

            changeTypeReactiveProperties(average);
            // console.log('vol: ' + average);
        }
    })
    .catch(function(err) {
        console.log(err)
    });
}

export const stopSoundReactiveType = () => {
    if(microphoneStream){
        microphoneStream.getTracks().forEach(function(track) {
            if (track.readyState == 'live') {
                track.stop();
                javascriptNode.onaudioprocess = null;
            }
        });
    }
    resetTypeReactiveProperties();
}

const changeTypeReactiveProperties = (average) => {
    const root = document.documentElement;
    root.style.setProperty('--volume_0-10', map(average, 0, 100, 0, 10));
    root.style.setProperty('--volume_75-300', map(average, 0, 100, 75, 300));
    // root.style.setProperty('--volume_100-300', map(average, 0, 100, 100, 300));
    root.style.setProperty('--volume_190-75', map(average, 0, 100, 140, 100));
    root.style.setProperty('--volume_100-300', map(average, 0, 100, 200, 0));
    root.style.setProperty('--volume_60-110', map(average, 0, 100, 60, 110));
    root.style.setProperty('--volume_0-100', map(average, 0, 100, 0, 100));
    root.style.setProperty('--volume_1-10', map(average, 0, 100, 1, 10));
    root.style.setProperty('--volume_1_-1', map(average, 0, 100, 1, -1));
    root.style.setProperty('--volume_1_-10', map(average, 0, 100, 1, -10));
    root.style.setProperty('--volume_0-1', map(average, 0, 100, 0, 1));
    root.style.setProperty('--volume_100-0', map(average, 0, 100, 100, 0));
    root.style.setProperty('--volume_10-0', map(average, 0, 100, 10, 0));
    root.style.setProperty('--volume_1-0', map(average, 0, 100, 1, 0));
    root.style.setProperty('--volume_1-5', map(average, 0, 100, 1, 5));
    root.style.setProperty('--volume_1-5_fontStretching', map(average, 0, 100, 1, 5));
    root.style.setProperty('--volume_1_-10_fontStretching', map(average, 0, 100, 1, -10));
}

const resetTypeReactiveProperties = () => {
    const root = document.documentElement;
    const volume_0_10_defaultValue = getComputedStyle(root).getPropertyValue('--volume_0-10_defaultValue');
    const volume_75_300_defaultValue = getComputedStyle(root).getPropertyValue('--volume_75-300_defaultValue');
    const volume_190_75_defaultValue = getComputedStyle(root).getPropertyValue('--volume_190-75_defaultValue');
    const volume_100_300_defaultValue = getComputedStyle(root).getPropertyValue('--volume_100-300_defaultValue');
    const volume_60_110_defaultValue = getComputedStyle(root).getPropertyValue('--volume_60-110_defaultValue');
    const volume_0_100_defaultValue = getComputedStyle(root).getPropertyValue('--volume_0-100_defaultValue');
    const volume_1_10_defaultValue = getComputedStyle(root).getPropertyValue('--volume_1-10_defaultValue');
    const volume_1__1_defaultValue = getComputedStyle(root).getPropertyValue('--volume_1_-1_defaultValue');
    const volume_1__10_defaultValue = getComputedStyle(root).getPropertyValue('--volume_1_-10_defaultValue');
    const volume_0_1_defaultValue = getComputedStyle(root).getPropertyValue('--volume_0-1_defaultValue');
    const volume_100_0_defaultValue = getComputedStyle(root).getPropertyValue('--volume_100-0_defaultValue');
    const volume_10_0_defaultValue = getComputedStyle(root).getPropertyValue('--volume_10-0_defaultValue');
    const volume_1_0_defaultValue = getComputedStyle(root).getPropertyValue('--volume_1-0_defaultValue');
    const volume_1_5_defaultValue = getComputedStyle(root).getPropertyValue('--volume_1-5_defaultValue');
    const volume_1_5_fontStretching_defaultValue = getComputedStyle(root).getPropertyValue('--volume_1-5_fontStretching_defaultValue');
    const volume_1__10_fontStretching_defaultValue = getComputedStyle(root).getPropertyValue('--volume_1_-10_fontStretching_defaultValue');
    root.style.setProperty('--volume_0-10', volume_0_10_defaultValue);
    root.style.setProperty('--volume_75-300', volume_75_300_defaultValue);
    root.style.setProperty('--volume_190-75', volume_190_75_defaultValue);
    root.style.setProperty('--volume_100-300', volume_100_300_defaultValue);
    root.style.setProperty('--volume_60-110', volume_60_110_defaultValue);
    root.style.setProperty('--volume_0-100', volume_0_100_defaultValue);
    root.style.setProperty('--volume_1-10', volume_1_10_defaultValue);
    root.style.setProperty('--volume_1_-1', volume_1__1_defaultValue);
    root.style.setProperty('--volume_1_-10', volume_1__10_defaultValue);
    root.style.setProperty('--volume_0-1', volume_0_1_defaultValue);
    root.style.setProperty('--volume_100-0', volume_100_0_defaultValue);
    root.style.setProperty('--volume_10-0', volume_10_0_defaultValue);
    root.style.setProperty('--volume_1-0', volume_1_0_defaultValue);
    root.style.setProperty('--volume_1-5', volume_1_5_defaultValue);
    root.style.setProperty('--volume_1-5_fontStretching', volume_1_5_fontStretching_defaultValue);
    root.style.setProperty('--volume_1_-10_fontStretching', volume_1__10_fontStretching_defaultValue);
}

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
