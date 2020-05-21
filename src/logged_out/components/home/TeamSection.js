import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import image1 from "../../../logged_in/dummy_data/images.bak/image1.jpg";
import image2 from "../../../logged_in/dummy_data/images.bak/image2.jpg";
import image3 from "../../../logged_in/dummy_data/images.bak/image3.jpg";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles,
} from "@material-ui/core";
import calculateSpacing from "./calculateSpacing";
import TeamCard from "./TeamCard";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
});

function TeamSection(props) {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Team
      </Typography>
      <div
        className={classNames("container-fluid", classes.containerFix)}
        style={{ alignItems: "center" }}
      >
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={4}
            lg={4}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <TeamCard
              title="Jim Jimson"
              src={image1}
              designation="CEO"
              email="jim@waver.com"
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={4}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <TeamCard
              title="John Johnson"
              src={image2}
              designation="CTO"
              email="john@waver.com"
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={4}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <TeamCard
              title="Jack Jackson"
              src={image3}
              designation="CFO"
              email="jack@waver.com"
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            {/*<PriceCard
              title="Tycoon"
              pricing={
                <span>
                  $99.99
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Feature 1", "Feature 2", "Feature 3"]}
            />*/}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

TeamSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(TeamSection)
);
