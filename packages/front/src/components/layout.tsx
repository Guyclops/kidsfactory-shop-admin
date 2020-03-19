import React, { useEffect } from "react";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles, useTheme, Theme, createStyles } from "@material-ui/core/styles";
import "./layout.css";
import Sidebar from "./sidebar";
import util from "../utils/util";
import storageKey from "../configs/storageKey";
import { navigate } from "gatsby";
import { inject, observer } from "mobx-react";
import { Store } from "../stores";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      backgroundColor: "rgb(32, 83, 134)",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "rgb(255, 255, 255)",
    },
  }),
);

export interface LayoutProps extends Store {
  /** content */
  children?: React.ReactNode;
  /** header visible */
  headerVisible?: boolean;
  /** footer visible */
  footerVisible?: boolean;
}

const Layout = (props: LayoutProps) => {
  const { children, headerVisible, footerVisible, common } = props;
  const { loading } = common;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (!util.getData(storageKey.TOKEN)) {
      navigate("/login");
    }
  }, []);

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {headerVisible ? (
        <>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Kidsfactory 관리
              </Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
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
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                <Sidebar />
              </Drawer>
            </Hidden>
          </nav>
        </>
      ) : null}

      <main className={classes.content}>
        {headerVisible ? <div className={classes.toolbar} /> : null}
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          <main>{children}</main>
          {footerVisible ? (
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://kidsfactory.net">Kidsfactory</a>
            </footer>
          ) : null}
        </div>
      </main>
    </div>
  );
};

Layout.defaultProps = {
  headerVisible: true,
  footerVisible: true,
};

export default inject("common")(observer(Layout));
