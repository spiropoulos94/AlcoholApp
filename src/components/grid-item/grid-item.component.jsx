import React from 'react';
import './grid-item.styles.scss';

const GridItem = ({title, icon, link}) => {
    return (
        <div className="grid-item">
            <span className="grid-item-title">{title}</span>
                <img src={icon} width="40px;" style={{background: 'inherit'}} />

        </div>
    );
};

export default GridItem;
