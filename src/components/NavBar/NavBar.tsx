import React, { useState } from 'react';
import './NavBar.css';
import Button from '@/components/Button/Button';

type LinkItem = {
    title: string;
    url: string;
    image: any;
};

type DropdownMenu = {
    links: LinkItem[];
};

type NavBarLink = {
    label: string;
    dropdown?: DropdownMenu;
    url?: string;
};

type NavBarButton = {
    text: string;
    url: string;
};

type NavBarProps = {
    logo: any;
    linksData: NavBarLink[];
    buttonsData: NavBarButton[];
};

const NavBar: React.FC<NavBarProps> = ({ logo, linksData, buttonsData }) => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <ul className="navbar-links">
                {linksData.map((linkData, index) => (
                    <li key={index} className="navbar-link">
                        {linkData.dropdown ? (
                            <div
                                onMouseEnter={() => setOpenDropdownIndex(index)}
                                onMouseLeave={() => setOpenDropdownIndex(null)}
                            >
                                <p className="navbar-label">{linkData.label}</p>
                                {openDropdownIndex === index && (
                                    <div className="navbar-dropdown">
                                        <h3>{linkData.label}</h3>
                                        <ul>
                                            {linkData.dropdown.links.map((link, linkIndex) => (
                                                <li key={linkIndex} className="navbar-dropdown-link">
                                                    <img src={link.image} alt={link.title} />
                                                    <a href={link.url}>{link.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a href={linkData.url}>
                                <p className="navbar-label">{linkData.label}</p>
                            </a>
                        )}
                    </li>
                ))}
            </ul>
            <ul className="navbar-buttons">
                {buttonsData.map((buttonData, index) => (
                    <Button text={buttonData.text}/>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
