import React from 'react';
import './grid-item.styles.scss';
import {withRouter} from 'react-router-dom';

const GridItem = ({title, icon, link, history, match}) => {
    return (
        <div onClick={() => history.push(`${match.url}${link}`)} className="grid-item">
            <span className="grid-item-title">{title}</span>
                <img src={icon} width="40px;" style={{background: 'inherit'}} />
        </div>
    );
};

export default withRouter(GridItem);
