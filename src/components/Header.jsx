import React from 'react';
import {Link} from "react-router-dom";

export default function Header({ back }) {
    return (
        <header className="Header">
            <div className="width">
                {back && (
                <Link to="/">    
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        // height="24" 
                        viewBox="0 -960 960 960"
                        width="24"
                    >
                        <path
                            fill="currentColor" 
                            d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"
                            />
                    </svg>
                </Link>
                )}
                <h1>
                    <Link to="/">cryptraker!</Link>
                </h1>
            </div>
        </header>
    );
}