import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listitems';
import PicAvatar from './avatar/avatar.jsx';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import SimpleLineChart from './Charts/Linecharts/SimpleLineChart';
import SimpleTable from './Charts/Linecharts/SimpleTable.jsx';

const drawerWidth = 240;

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root: {
        display: 'flex',
        flexGrow: 1,
        width: 'auto',
        height: 'auto',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '1000vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginTop: 100,
        marginLeft: 10,
    },
    tableContainer: {
        height: 320,
        // width: 500,
        marginLeft: 10,
    },
    h5: {
        marginBottom: theme.spacing.unit * 2,
    },
});

class Dashboard extends React.Component {
    state = {
        anchorEL: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (

            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                    <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                                classes.menuButton,
                                this.state.open && classes.menuButtonHidden,
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}
                        >
                            Dashboard
                        </Typography>

                        <IconButton color="inherit">
                            <Badge badgeContent={1} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                        <div>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <PicAvatar />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                <MenuItem onClick={this.handleClose}>Log out</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                    <Divider />
                    <List>{secondaryListItems}</List>
                </Drawer>
                {/* <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Typography variant="h4" gutterBottom component="h2">
                        Orders
                    </Typography>
                    <Typography component="div" className={classes.chartContainer}>
                        <SimpleLineChart />
                    </Typography>
                    <Typography component="div" className={classes.chartContainer}>
                        <SimpleLineChart />
                    </Typography>
                    <Typography variant="h4" gutterBottom component="h2">
                        Products
                    </Typography>
                    <div className={classes.tableContainer}>
                        <SimpleTable />
                    </div>
                </main> */}
                <div className={classes.root}>
                    <Grid container spacing={24} direction="row" justify="space-evenly" alignItems="flex-end">
                        <Grid item xs={3} >
                            <Typography component="div" className={classes.chartContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Entries
                            </Typography>
                                <SimpleLineChart />
                            </Typography>
                        </Grid>

                        <Grid item xs={3} >
                            <Typography component="div" className={classes.chartContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Entries
                            </Typography>
                                <SimpleLineChart />
                            </Typography>
                        </Grid>

                        <Grid item xs={3} >
                            <Typography component="div" className={classes.chartContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Entries
                                </Typography>
                                <SimpleLineChart />
                            </Typography>
                        </Grid>

                        <Grid item xs={3} >
                            <Typography component="div" className={classes.chartContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Entries
                                </Typography>
                                <SimpleLineChart />
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom component="h2">
                                Products
                            </Typography>
                            <div className={classes.tableContainer}>
                                <SimpleTable />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);