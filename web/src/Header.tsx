import React from 'react';

interface HeaderProps {
    title: string;
    subtitle?: string;
};

//FC = Function Component
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;