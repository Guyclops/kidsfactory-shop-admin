import React from "react";
import Sidebar from "../src/components/sidebar";
import { Drawer, Hidden } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export default {
  title: "Component|Drawer",
  component: Sidebar,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
  }),
);

export function Default() {
  const classes = useStyles();
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Sidebar />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent" open>
          <Sidebar />
        </Drawer>
      </Hidden>
    </nav>
  );
}
