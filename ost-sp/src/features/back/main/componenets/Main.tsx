import * as React from "react";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: spacing.unit * 10,
      textAlign: "center",
      color: palette.text.secondary
    }
  });

function Main(props: any) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          <Paper className={classes.paper}>Number of total applications</Paper>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Paper className={classes.paper}>
            Number of indivdual applications
          </Paper>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Paper className={classes.paper}>Number of team applications</Paper>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Paper className={classes.paper}>
            Number of indivdual completed applications
          </Paper>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Paper className={classes.paper}>
            Number of completed team applications
          </Paper>
        </Grid>
        <Grid item={true} xs={6} sm={3}>
          <Paper className={classes.paper}>Number of team Selectors</Paper>
        </Grid>
        <Grid item={true} xs={6} sm={3}>
          <Paper className={classes.paper}>Number of accepted Applicants</Paper>
        </Grid>
        <Grid item={true} xs={6} sm={3}>
          <Paper className={classes.paper}>Number of graded Applicants</Paper>
        </Grid>
        <Grid item={true} xs={6} sm={3}>
          <Paper className={classes.paper}>Number of rejected Applicants</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Main);
