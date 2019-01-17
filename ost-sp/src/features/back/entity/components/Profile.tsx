import * as React from "react";
import * as Actions from "../actions";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "src/shared/store";
import Entity from "src/data/Entity";
//import Entity from "src/data/Entity";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
//import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: spacing.unit * 10,

      color: palette.text.primary
    },
    avatar: {
      margin: 10
    },
    bigAvatar: {
      margin: 10,
      width: 200,
      height: 200
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: spacing.unit,
      marginTop: 0,
      marginRight: spacing.unit,
      color: palette.text.hint
    },
    title: {
      textDecoration: ""
    }
  });

type Props = TOwnProps & DispatchProps & TStateProps;

class Profile extends React.Component<Props> {
  componentDidMount() {
    this.props.onDidMount();
  }
  render() {
    const { entity, classes } = this.props;
    return (
      <div>
        {/* <h1>Profile {this.props.id}</h1> */}
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <Paper className={classes.paper}>
              <Grid container={true} spacing={0}>
                <Grid item={true} xs={12} sm={6} md={4}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-1/254000/19-512.png"
                    className={classes.bigAvatar}
                  />
                </Grid>
                <Grid item={true} xs={12} sm={6} md={8}>
                  <Typography
                    component="h2"
                    variant="h2"
                    gutterBottom={true}
                    style={{
                      textDecoration: "underline",
                      color: "#2196f3"
                    }}
                  >
                    Information :
                  </Typography>

                  <Grid container={true} spacing={0}>
                    {entity &&
                      Object.entries(entity).map(
                        ([k, v], i) =>
                          (console.log(i) as any) ||
                          (i % 4 === 0 && (
                            <Grid key={i} item={true} xs={12} sm={6} md={4}>
                              {Object.entries(entity)
                                .slice(i, i + 4)
                                .map(([k, v], j) => (
                                  <TextField
                                    key={j}
                                    style={{
                                      backgroundColor: "#fffff8",
                                      fontSize: "15px"
                                    }}
                                    id="filled-name"
                                    label={k}
                                    className={classes.textField}
                                    value={v}
                                    margin="normal"
                                    variant="filled"
                                  />
                                ))}
                            </Grid>
                          ))
                      )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item={true} xs={12} sm={12} md={12}>
            <Paper className={classes.paper}>{this.props.children}</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

interface DispatchProps {
  onDidMount: () => void;
}

interface TOwnProps {
  entity: string;
  id: string;
  classes: any;
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, TOwnProps> = (
  dispatch: ThunkDispatch<IState, void, Actions.All>,
  { entity, id }
) => ({
  onDidMount: () => {
    dispatch(Actions.getEntity(entity, id));
  }
});

interface TStateProps {
  entity: Entity;
}

const mapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  entity: state.entity.entity
});

const connectedProfile = connect(
  mapStateToProp,
  mapDispatchToProps
)(Profile);

export default withStyles(styles, { withTheme: true })(connectedProfile);
