import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// We can inject some CSS into the DOM.
const styles = {
  root: {
    color: "red",
    backgroundColor: "yellow",
    "&:hover": {
      background: "green",
    },
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button
      variant="contained"
      color="primary"
      className={clsx(classes.root, className)}
      {...other}
    >
      {children || "class names"}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
