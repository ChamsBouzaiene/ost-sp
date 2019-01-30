import * as React from "react";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

interface TStateProps {}

interface DispatchProps {}
interface TOwnProps {
  classes: any;
}

type Props = DispatchProps & TOwnProps & TStateProps;

class Details extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell
              style={{ backgroundColor: "#2196f3", fontSize: "15px" }}
              align="left"
            >
              Questions
            </CustomTableCell>
            <CustomTableCell
              style={{ backgroundColor: "#2196f3", fontSize: "15px" }}
              align="left"
            >
              Answers
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
          <TableRow className={classes.row}>
            <CustomTableCell align="left" component="th" scope="row">
              Questions
            </CustomTableCell>
            <CustomTableCell align="left" component="th" scope="row">
              I know !!
            </CustomTableCell>
            <CustomTableCell align="left" component="th" scope="row">
              2/10
            </CustomTableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(Details);
