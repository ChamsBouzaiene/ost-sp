import * as React from "react";
import MainRoutes from "../Routes";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Link } from "react-router-dom";
//import MailIcon from "@material-ui/icons/Mail";

const drawerWidth = 240;

const styles = (theme: any) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      backgroundColor: theme.palette.common.blue,
      color: theme.palette.common.blue
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

const Links = [
  { Name: "Home", Link: "/admin" },
  { Name: "Applications Dashboard", Link: "/admin/applications" },
  { Name: " Selectors Dashboard", Link: "/admin/selectors" },
  { Name: " Grading Dashboard", Link: "/admin/grades" },
  { Name: "Assemssments Dashboard", Link: "/admin/assessments" },
  { Name: "Emails Managment Dashboard", Link: "/admin/emails" },
  { Name: "Alumnis Dashboard", Link: "/admin/alumnis" },
  { Name: "Admins Dashboard", Link: "/admin/admins" },
  { Name: "Selection Dashboard", Link: "/admin/selection" },
  { Name: "Unassigned Dashboard", Link: "/admin/unassigned" },
  { Name: " Team Dashboard", Link: "/admin/team" }
];

interface OwnState {}

interface OwnProps {
  classes: any;
  theme: any;
}

class MainDashboard extends React.Component<OwnProps, OwnState> {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: "#E3E2E2" }}
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              style={{ backgroundColor: "#00000" }}
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            {/* <img
              src="https://i.imgur.com/R1elE2d.png"
              alt=""
              style={{ height: "64px" }}
            /> */}
            <Typography
              variant="h6"
              style={{ backgroundColor: "#00000" }}
              noWrap={true}
            >
              OST Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <img src="https://i.imgur.com/R1elE2d.png" alt="" />
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {Links.map((item, index) => (
              <Link to={item.Link} className="sidebar-element">
                <ListItem button={true} key={item.Name}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.Name} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button={true} key={text}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>

                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />

          <MainRoutes />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainDashboard);
