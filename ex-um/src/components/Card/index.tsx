import '.style.css';

type Props = { text: string };

export default function Card({ text }: Props) {
    return (
        <div className='card container'>{text}</div>
    )
}