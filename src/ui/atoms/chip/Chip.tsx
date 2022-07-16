import './Chip.css';

interface ChipProps {
    text: string;
}

export default function Chip({text}: ChipProps) {
    return (
        <div className="chip-root">
            <p className='chip-text'>{text}</p>
        </div>
    )
}