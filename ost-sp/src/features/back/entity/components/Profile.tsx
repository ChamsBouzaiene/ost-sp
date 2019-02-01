import * as React from "react";
import * as Actions from "../actions";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "src/shared/store";
import Entity from "src/data/Entity";
import { teamMember } from "src/data/TeamMember";
//import Entity from "src/data/Entity";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
//import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { API_URL } from "src/data/Api";
import "./Profile.css";
import { Card, CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";

//import { Link } from "react-router-dom";

const getAvatarLink = (value: any) => {
  return API_URL + "/attachements/container/download/" + value;
};

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    card: {
      maxWidth: 345
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: "cover"
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
    },
    table: {
      minWidth: 700
    },
    row: {
      "&:nth-of-type(odd)": {
        backgroundColor: palette.background.default
      }
    }
  });

// const TeamMembers = (classes: any) => {
//   return (

//   );
// };

const EntityId = (value: any) => {
  if (value !== undefined) {
    return value.pathname.split("/")[value.pathname.split("/").length - 1];
  }
  return value;
};

const FiltreEntity = (entity: any) => {
  return entity.filter(([k, v]: [any, any]) => {
    console.log(k);
    return (
      k !== "avatar" &&
      k !== "resume" &&
      k !== "cinPicture" &&
      k !== "teamMembers" &&
      k !== "team" &&
      k !== "step" &&
      k !== "id" &&
      k !== "confirmPassword" &&
      k !== "emailVerified"
    );
  });
};

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
                  <div className="avatar-col">
                    <Avatar
                      alt="Remy Sharp"
                      src={
                        entity && entity.avatar
                          ? getAvatarLink(entity.avatar)
                          : "https://www.w3schools.com/howto/img_avatar.png"
                      }
                      className={classes.bigAvatar}
                    />
                    <a href={entity ? getAvatarLink(entity.resume) : "/404"}>
                      Resume
                    </a>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <img
                          className={classes.media}
                          style={{ width: "300px" }}
                          src={
                            entity && entity.cinPicture
                              ? getAvatarLink(entity.cinPicture)
                              : "http://www.baya.tn/wp-content/uploads/2016/04/carte-identite.jpg"
                          }
                          title="CIN"
                        />
                      </CardActionArea>
                    </Card>
                  </div>
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
                      FiltreEntity(Object.entries(entity)).map(
                        ([k, v]: [any, any], i: any) =>
                          i % 4 === 0 && (
                            <Grid key={i} item={true} xs={12} sm={6} md={4}>
                              {FiltreEntity(Object.entries(entity))
                                .slice(i, i + 4)
                                .map(([k, v]: [any, any], j: any) => (
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
                          )
                      )}

                    {this.props.entityId && (
                      <Link to={`/admin/grade/`}>Grade Candidate</Link>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item={true} xs={12} sm={12} md={12}>
            <Paper className={classes.paper}>
              {entity && entity.team && (
                <table id="customers">
                  <tr>
                    {teamMember.map((el: any, id: any) => (
                      <th key={id}>{Object.values(el)}</th>
                    ))}
                  </tr>
                  {entity.teamMembers.map((el: any, id: any) => (
                    <tr>
                      {Object.entries(el).map((el: any, id: any) => (
                        <td>{el[1]}</td>
                      ))}
                    </tr>
                  ))}
                </table>
              )}
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
  entityId: any;
}

const mapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  entity: state.entity.entity,
  entityId: EntityId((state.router || {}).location)
});

const connectedProfile = connect(
  mapStateToProp,
  mapDispatchToProps
)(Profile);

export default withStyles(styles, { withTheme: true })(connectedProfile);
