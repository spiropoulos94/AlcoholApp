import React from 'react';
import "./button.styles.scss";
// import {withRouter} from 'react-router-dom';

const Button = ({children, entryButton,  ...restProps}) => {

    return (
        <button  className={`${entryButton ? 'entry-button' :'' } button`}  {...restProps} >{children}</button>
    );
};

export default Button;
