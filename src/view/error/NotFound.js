import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <span>
                Not Found
            </span>
            <div>
                <Link to={'/'}> Back To Home </Link>
            </div>
        </div>
    )
}