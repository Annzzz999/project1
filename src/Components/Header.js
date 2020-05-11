import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


import FontIcon from '@material-ui/core/Icon'
import LocalDining from '@material-ui/icons/LocalDining';
import AllOutRounded from '@material-ui/icons/AllOutRounded';
import HomeIcon from '@material-ui/icons/Home';
import Cake from '@material-ui/icons/Cake';
import RestaurantIcon from '@material-ui/icons/Restaurant';

import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            
            Кулинарная книга
            
          </Typography>
          
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {/* <Button variant="contained" color="primary" href="#contained-buttons" startIcon={< AddIcon/>}>
        <Typography   >Добавить </Typography>
          </Button>
         
          <Button variant="contained" color="primary" href="#contained-buttons"  startIcon={<DeleteIcon />}>
        <Typography   >Удалить </Typography>
          </Button> */}
        <List>
          {
          [<Typography variant="h6"color="textSecondary" ><FontIcon  className="material-icons" > <HomeIcon style={{ FontSize: 30 }} /> <Link to='/' style={{ textDecoration: 'none' }}> Главная</Link> </FontIcon> </Typography>,
          <Typography variant="h6" color="textSecondary"> <FontIcon  className="material-icons" > <LocalDining style={{ FontSize: 30  }} /><Link to='/Rep1' style={{ textDecoration: 'none' }}>Бульоны/cупы</Link></FontIcon></Typography>, 
         <Typography variant="h6" color="textSecondary" > <FontIcon  className="material-icons" > <RestaurantIcon style={{ FontSize: 30  }} /><Link to='/Rep2' style={{ textDecoration: 'none' }}>Горячие блюда</Link></FontIcon></Typography>,
          <Typography variant="h6" color="textSecondary"> <FontIcon  className="material-icons" > <AllOutRounded style={{ FontSize: 30 }} /><Link to='/Rep3' style={{ textDecoration: 'none' }}>Салаты </Link></FontIcon></Typography>,
          <Typography variant="h6" color="textSecondary"> <FontIcon  className="material-icons" > <LocalDining style={{ FontSize: 30  }} /><Link to='/Rep4' style={{ textDecoration: 'none' }}>Закуски</Link></FontIcon></Typography>,
          <Typography variant="h6" color="textSecondary"> <FontIcon  className="material-icons" > <Cake style={{ FontSize: 30  }} /><Link to='/Rep5' style={{ textDecoration: 'none' }}>Выпечка</Link></FontIcon></Typography>,
           ].map((text, index) => ( 


            <ListItem button key={text}>
            
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
       
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
              </main>
    </div>
  );
}