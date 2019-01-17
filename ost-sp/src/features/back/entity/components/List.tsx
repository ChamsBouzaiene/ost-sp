import * as React from "react";
import * as Actions from "../actions";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "src/shared/store";
import Entity from "src/data/Entity";
//import Table from "@material-ui/core/Table";

import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { push, RouterAction } from "react-router-redux";
//import ICandidate from "src/data/Candidate";

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
      width: "100%",
      marginTop: spacing.unit * 3,
      overflowX: "auto"
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

type Props = DispatchProps & TOwnProps & TStateProps;

class List extends React.Component<Props> {
  componentDidMount() {
    this.props.onDidMount();
    const currentRoute = window.location.href.split("/");
    console.log(currentRoute.length);
  }
  render() {
    const { classes } = this.props;
    const schema = Object.entries(this.props.schema[0]);
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {/* {this.props.entities &&
                  Object.entries(this.props.entities[0]).map(([k, v]) => (
                    <CustomTableCell align="right">{k}</CustomTableCell>
                  ))} */}
                {schema.map(([k, v]: any) => (
                  <CustomTableCell
                    style={{ backgroundColor: "#2196f3", fontSize: "15px" }}
                    align="left"
                  >
                    {v}
                  </CustomTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.entities &&
                this.props.entities.map(entity => (
                  <TableRow className={classes.row} key={entity.id}>
                    {schema.map(([k, v], i) => (
                      <CustomTableCell
                        align="left"
                        key={i}
                        component="th"
                        scope="row"
                        onClick={() => this.props.onClickEntity(entity.id)}
                      >
                        {entity[k]}
                      </CustomTableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const currentRoute = window.location.href.split("/");
const currentDashboard = currentRoute[currentRoute.length - 1];

interface DispatchProps {
  onDidMount: () => void;
  onClickEntity: (id: any) => void;
}
interface TOwnProps {
  entity: string;
  classes: any;
  schema: any;
}
const mapDispatchToProps: MapDispatchToProps<DispatchProps, TOwnProps> = (
  dispatch: ThunkDispatch<IState, void, Actions.All | RouterAction>,
  { entity }
) => ({
  onDidMount: () => {
    dispatch(Actions.getAllEntitys(entity));
  },
  onClickEntity: (id: any) => {
    dispatch(push(`${currentDashboard}/${id}`));
  }
});

interface TStateProps {
  entities: Entity[];
}

const mapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  entities: state.entity.entities
});
const ConnectedList = connect(
  mapStateToProp,
  mapDispatchToProps
)(List);

export default withStyles(styles)(ConnectedList);
