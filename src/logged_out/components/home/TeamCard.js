import React, { useRef, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { withStyles, Box, Typography } from "@material-ui/core";

const styles = (theme) => ({
  imageContainer: {
    width: "100%",
    paddingTop: "100%",
    overflow: "hidden",
    position: "relative",
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  card: {
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderBottomLeftRadius: theme.shape.borderRadius * 2,
    borderBottomRightRadius: theme.shape.borderRadius * 2,
  },
  teamInfo: {
    textAlign: "center",
  },
  title: {
    color: theme.palette.primary.main,
  },
});

function TeamCard(props) {
  const {
    classes,
    src,
    title,
    roundedBorder,
    theme,
    designation,
    email,
  } = props;
  const img = useRef();
  const [hasMoreWidthThanHeight, setHasMoreWidthThanHeight] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  const onLoad = useCallback(() => {
    if (img.current.naturalHeight < img.current.naturalWidth) {
      setHasMoreWidthThanHeight(true);
    } else {
      setHasMoreWidthThanHeight(false);
    }
    setHasLoaded(true);
  }, [img, setHasLoaded, setHasMoreWidthThanHeight]);

  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img
          style={{
            height: hasMoreWidthThanHeight ? "100%" : "auto",
            width: hasMoreWidthThanHeight ? "auto" : "100%",
            display: hasLoaded ? "block" : "none",
            borderRadius: roundedBorder ? theme.shape.borderRadius : 0,
          }}
          ref={img}
          className={classes.image}
          onLoad={onLoad}
          src={src}
          alt=""
        />
      </div>
      <div className={classes.teamInfo}>
        <Box>
          <Typography variant={"h4"} className={null}>
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography variant={"h5"} className={classes.title}>
            {designation}
          </Typography>
        </Box>
        <Box mb={1}>
          <Typography variant={"h6"} className={null}>
            {email}
          </Typography>
        </Box>
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(TeamCard);
