import './Badge.css'
interface BadgeProps {
    text: string
    darkMode?: boolean
    variant: 'default' | 'secondary' | 'outline' | 'destructive'
}

const Badge: React.FC<BadgeProps> = ({ text, darkMode, variant }) => {

    return (
        <p className={`badge ${darkMode && 'darkMode'} ${variant}`}>{text}</p>
    )
}

export default Badge