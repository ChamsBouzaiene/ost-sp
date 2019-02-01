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

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const isIndividual = (value: any) => {
  if (value !== undefined) {
    return value.pathname.includes("individual");
  }
  return value;
};

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

const CustomEntity = (list: any, schema: any) => {
  if (schema.selectorId && schema.team) {
    return list;
  }
  if (schema.selectorId && !schema.team) {
    return list.filter((el: any) => el.selectorId);
  }
  if (!schema.selectorId) {
    if (schema.team) {
      return list.filter((el: any) => el.team === true);
    } else {
      console.log(schema);
      return list.filter((el: any) => el.selectorId === undefined);
    }
  }

  return list;
};

const dataMapper = (data: any, key: any) => {
  if (key === "step") {
    return stepsMap(data);
  }
  return data;
};

const stepsMap = (step: any) => {
  switch (step) {
    case 2:
      return "20%";
    case 3:
      return "40%";
    case 4:
      return "60%";
    case 5:
      return "80%";
    case 6:
      return "100%";
    default:
      return "20%";
  }
};

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
                CustomEntity(this.props.entities, this.props.schema[0]).map(
                  (entity: any) => (
                    <TableRow className={classes.row} key={entity.id}>
                      {schema.map(([k, v], i) => (
                        <CustomTableCell
                          align="left"
                          key={i}
                          component="th"
                          scope="row"
                          onClick={() => this.props.onClickEntity(entity.id)}
                        >
                          {dataMapper(entity[k], k)}
                        </CustomTableCell>
                      ))}
                    </TableRow>
                  )
                )}
            </TableBody>
          </Table>

          {this.props.children}
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
  entities: state.entity.entities,
  isIndividual: isIndividual((state.router || {}).location)
});
const ConnectedList = connect(
  mapStateToProp,
  mapDispatchToProps
)(List);

export default withStyles(styles)(ConnectedList);
