import { AudioClip } from "./types"

interface DrumPadProps {
    audioClip: AudioClip
};

const DrumPad = ({ audioClip }: DrumPadProps) => {
    const playSound = (audioClip: AudioClip) => {
        const sound = document.getElementById(audioClip.keyTrigger) as HTMLAudioElement
        sound.currentTime = 0
        sound.play().catch(err => console.error(err))

        document.getElementById("display")!.innerText = audioClip.description
    }

    return (
        <button 
            className="drum-pad" 
            id={`drum-${audioClip.keyTrigger}`}
            onClick={() => playSound(audioClip)}>
            <audio src={audioClip.url} className="clip" id={audioClip.keyTrigger} />
            {audioClip.keyTrigger}
        </button>
    )
};

export default DrumPad; // DrumPad is not exported from DrumPad.tsx