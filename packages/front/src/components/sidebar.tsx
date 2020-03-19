import React, { useState } from "react";
import { Divider, List, ListItem, ListItemIcon, ListItemText, Collapse } from "@material-ui/core";
import {
  ExpandLess,
  ExpandMore,
  DashboardRounded as DashboardIcon,
  ExitToApp,
  Storage,
  FolderShared,
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

  const navigatePage = path => {
    navigate(`${path}`);
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
        <ListItem button onClick={() => navigatePage("/")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"현재 매장 정보"} />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Storage />
          </ListItemIcon>
          <ListItemText primary="통계" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={() => navigatePage("/report/total")}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FolderShared />
              </ListItemIcon>
              <ListItemText primary="전체" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
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
