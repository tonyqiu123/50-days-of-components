import { HTMLAttributes } from 'react'
import './Badge.css'
type BadgeProps = {
    text: string
    darkMode?: boolean
    variant: 'default' | 'secondary' | 'outline' | 'destructive' | 'success'
} & HTMLAttributes<HTMLElement>

const Badge: React.FC<BadgeProps> = ({ text, darkMode, variant, ...props }) => {

    return (
        <p {...props} className={`badge ${props.className ? props.className : ''} ${darkMode && 'darkMode'} ${variant}`}>{text}</p>
    )
}

export default Badge