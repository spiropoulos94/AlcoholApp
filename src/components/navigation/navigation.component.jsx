import React from 'react';
import './navigation.styles.scss';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <Link to="/">Home</Link>
            <Link to="/select">Go Back</Link>
        </div>
    );
};

export default Navigation;