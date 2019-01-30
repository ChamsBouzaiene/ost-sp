import * as React from "react";
import { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
//import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { MapDispatchToProps, connect } from "react-redux";
import { IState } from "src/shared/store";
import * as Actions from "../actions";
import { ThunkDispatch } from "redux-thunk";
import ISelector from "src/data/Selector";
import { push, RouterAction } from "react-router-redux";

interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

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
    button: {
      margin: 15,
      backgroundColor: "#2196f3",
      color: "white"
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

interface OwnProps {
  classes: any;
}

type Props = OwnProps & DispatchProps;

class AddSelectors extends Component<Props, MyState> {
  state = {
    firstName: "",
    lastName: "",

    email: ""
  };
  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className="container-fluid">
          <Grid container={true} spacing={24}>
            <Grid item={true} xs={12}>
              <TextField
                placeholder="Enter Selector First Name"
                label="First Name"
                name="firstName"
                onChange={this.handleChange}
                value={this.state.firstName}
              />
              <br />
              <TextField
                placeholder="Enter Selector Last Name"
                label="Last Name"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.lastName}
              />
              <br />
              <TextField
                placeholder="Enter Selector Email"
                label="Email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />

              <br />

              <br />
              <Button
                color={"primary"}
                className={classes.button}
                onClick={() => this.props.onSubmit({ newAdmin: this.state })}
              >
                Add Selector
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

interface DispatchProps {
  onSubmit: (selector: any) => void;
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch: ThunkDispatch<
    IState,
    void,
    Actions.AddSelectorActions | RouterAction
  >
) => ({
  onSubmit: (selector: ISelector) => {
    dispatch(Actions.postSelector(selector));
    dispatch(push(`/admin`));
  }
});

const AddSelectorsWithStyles = withStyles(styles, { withTheme: true })(
  AddSelectors
);

export default connect(
  null,
  mapDispatchToProps
)(AddSelectorsWithStyles);
