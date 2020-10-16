import React from 'react';
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        padding: "20px",
        "&:hover" : {
            backgroundColor :'red',
            padding :"50px"
        }
    }

})


const StyledButton = (props) => {

    let classes = useStyles();

    let {root} = classes

    return (
        <Button variant="contained" color="secondary" classes={{
            root: classes.root
        }} >{props.children}</Button>
    );
};

export default StyledButton;
