import * as React from "react";
import { Component } from "react";
import {
  Button,
  Select,
  Input,
  MenuItem,
  InputLabel,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from "@material-ui/core";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
//import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

import { MapDispatchToProps, connect, MapStateToProps } from "react-redux";
import { IState } from "src/shared/store";
import * as Actions from "../actions";
import { getAllEntitys } from "../../entity/actions";
import { ThunkDispatch } from "redux-thunk";
import ISelector from "src/data/Selector";
import { push, RouterAction } from "react-router-redux";
import Axios from "axios";
import { API_URL } from "src/data/Api";

const GetFullName = (first: string, last: string) => {
  return first + " " + last;
};

const applicationTableRow = (entities: any, selcId: any, classes: any) => {
  return (
    entities &&
    selcId &&
    entities
      .filter((el: any) => !(el.selectorId === undefined))
      .filter((el: any) => selcId.toString() === el.selectorId.toString())
      .map((el: any) => (
        <TableRow className={classes.row} key={el.id}>
          <CustomTableCell align="left" component="th" scope="row">
            {el.email}
          </CustomTableCell>
          <CustomTableCell align="left" component="th" scope="row">
            {el.firstName &&
              el.lastName &&
              GetFullName(el.firstName, el.lastName)}
          </CustomTableCell>
          <CustomTableCell align="left" component="th" scope="row">
            {el.submited ? "Completed the application " : " Not yet"}
          </CustomTableCell>
        </TableRow>
      ))
  );
};
// const applicationTableRowName = (entities: any, selcId: any, classes: any) => {
//   return (
//     entities &&
//     selcId &&
//     entities
//       .filter((el: any) => !(el.selectorId === undefined))
//       .filter((el: any) => selcId.toString() === el.selectorId.toString())
//       .map((el: any) => (
//         <TableRow className={classes.row} key={el.id}>
//           <CustomTableCell align="left" component="th" scope="row">
//             {el.firstName &&
//               el.lastName &&
//               GetFullName(el.firstName, el.lastName)}
//           </CustomTableCell>
//         </TableRow>
//       ))
//   );
// };

const GetSelectorId = (value: any) => {
  return value.pathname.split("/")[value.pathname.split("/").length - 1];
};

interface OwnState {}
//type MyProps = {};
type MyState = OwnState;

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

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
  entities: any;
}

type Props = OwnProps & DispatchProps & TOwnProps & TStateProps;

class AssignApplication extends Component<Props, MyState> {
  state = {
    application: { email: "choose applicant", id: 0 }
  };

  componentDidMount() {
    this.props.onDidMount("candidates");
  }
  handleChange = (event: any) => {
    console.log(event.target);
    this.setState({
      [event.target.name]: this.props.entities.filter(
        (el: any) => el.email === event.target.value
      )[0]
    });
    console.log(
      this.props.entities.filter(
        (el: any) => el.email === event.target.value
      )[0]
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className="container-fluid">
          <Grid container={true} spacing={24}>
            <Grid item={true} xs={4}>
              <div className="assign-applicant">
                <InputLabel htmlFor="university-id">Applications</InputLabel>
                <Select
                  value={this.state.application.email}
                  onChange={this.handleChange}
                  input={
                    <Input
                      name="application"
                      id="university-id"
                      value={this.state.application}
                    />
                  }
                >
                  <MenuItem value={this.state.application.email}>
                    <em>Choose an applicant</em>
                  </MenuItem>
                  {this.props.entities &&
                    this.props.entities.map((el: any) => (
                      <MenuItem value={el.email} key={el.id}>
                        {el.email}
                      </MenuItem>
                    ))}
                </Select>
              </div>
              <br />

              <Button
                color={"primary"}
                className={classes.button}
                onClick={() => {
                  Axios.patch(
                    `${API_URL}/candidates/${this.state.application.id}`,
                    { selectorId: this.props.selcId }
                  );
                  this.props.onDidMount("candidates");
                }}
              >
                Add Applications
              </Button>
            </Grid>
            <Grid item={true} xs={8}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell
                      style={{ backgroundColor: "#2196f3", fontSize: "15px" }}
                      align="left"
                    >
                      Email
                    </CustomTableCell>
                    <CustomTableCell
                      style={{ backgroundColor: "#2196f3", fontSize: "15px" }}
                      align="left"
                    >
                      Name{this.props.selcId && this.props.selcId}
                    </CustomTableCell>
                    <CustomTableCell
                      style={{ backgroundColor: "#2196f3", fontSize: "15px" }}
                      align="left"
                    >
                      Grade
                    </CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {applicationTableRow(
                    this.props.entities,
                    this.props.selcId,
                    this.props.entities
                  )}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

interface DispatchProps {
  onSubmit: (selector: any) => void;
  onDidMount: (entity: any) => void;
}

interface TStateProps {
  entities: any;
  selcId: any;
}
interface TOwnProps {}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, TOwnProps> = (
  dispatch: ThunkDispatch<IState, void, Actions.All | RouterAction>
) => ({
  onDidMount: (entity: any) => {
    dispatch(getAllEntitys(entity));
  },
  onSubmit: (selector: ISelector) => {
    dispatch(Actions.postSelector(selector));
    dispatch(push(`/admin`));
  }
});

const mapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  entities: state.entity.entities,
  selcId: GetSelectorId((state.router || {}).location)
});

const AssignApplicationWithStyles = withStyles(styles, { withTheme: true })(
  AssignApplication
);

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(AssignApplicationWithStyles);
