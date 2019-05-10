import * as React from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router"
import {
  withStyles,
  Typography,
  Theme,
  WithStyles,
  createStyles,
  Card,
  Button,
  CardContent,
} from "@material-ui/core"

// eslint-disable-next-line
interface Props extends WithStyles<typeof styles> {
  gotoOverview: () => void
  gotoDapp: () => void
  gotoAbout: () => void
}

const Home: React.SFC<Props> = ({
  classes,
  gotoOverview,
  gotoDapp,
  gotoAbout,
}) => (
  <div className={classes.root}>
    <div className={classes.topPadding} />
    <div className={classes.cardWrapper}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h2" className={classes.header}>
            dOrg
          </Typography>
          <Typography variant="subtitle1" className={classes.header}>
            Empowering Distributed Organization
          </Typography>
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={gotoAbout}
          >
            About
          </Button>
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={gotoDapp}
          >
            Create a DAO
          </Button>
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={gotoOverview}
          >
            F.A.Q.
          </Button>
        </CardContent>
      </Card>
    </div>
    <div className={classes.bottomPadding} />
  </div>
)

// STYLE
const padding = 50
const minWidth = 450
const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      minWidth: minWidth + padding * 2,
      height: "100vh",
    },
    topPadding: {
      width: "inherit",
      padding: padding,
      paddingTop: padding * 3,
    },
    cardWrapper: {
      width: 0,
      // bring forward (infront of background)
      position: "relative",
      // move to horizontal middle
      left: "50%",
      // disable pointer events, don't block background
      pointerEvents: "none",
    },
    card: {
      maxWidth: 900,
      minWidth: minWidth,
      // inherit parent's position
      position: "inherit",
      // move horizontally left by 50% this el's width
      transform: "translateX(-50%)",
      // enable all pointer events
      pointerEvents: "all",
    },
    bottomPadding: {
      paddingBottom: padding * 3,
    },
    cardContent: {
      textAlign: "center",
    },
    header: {
      margin: 10,
    },
    button: {
      margin: 10,
    },
  })

const componentWithStyles = withStyles(styles)(Home)

// STATE
const mapStateToProps = (state: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    gotoDapp: () => {
      dispatch(push("/dapp"))
    },
    gotoOverview: () => {
      dispatch(push("/overview"))
    },
    gotoAbout: () => {
      dispatch(push("/about"))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentWithStyles)