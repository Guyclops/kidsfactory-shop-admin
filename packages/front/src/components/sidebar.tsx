import React, { useState } from "react";
import { Divider, List, ListItem, ListItemIcon, ListItemText, Collapse } from "@material-ui/core";
import {
  MoveToInbox as InboxIcon,
  ExpandLess,
  ExpandMore,
  StarBorder,
  DashboardRounded as DashboardIcon,
  ExitToApp,
} from "@material-ui/icons";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { navigate } from "gatsby";
import storageKey from "../configs/storageKey";
import util from "../utils/util";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigatePage = () => {
    navigate("/");
  };

  const logout = () => {
    const keys = Object.keys(storageKey);
    for (const item of keys) {
      util.removeData(item);
    }
    navigate("/login");
  };

  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem button onClick={navigatePage}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"대시 보드2"} />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={logout}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="로그아웃" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
