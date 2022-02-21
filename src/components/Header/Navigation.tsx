
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useSelector} from 'react-redux';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import style from './Header.scss';



// import { List, Drawer, ListItem, Toolbar, Typography } from "@mui/material";
// import {useNavigate} from "react-router-dom";

// import { styled, useTheme } from '@mui/material/styles';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export const Navigation = () => {


//   const navigate = useNavigate()
//   const [open, setOpen] = useState(false);
//   const theme = useTheme();
//   const closeDrawer = () => {
//     setOpen(false);
//   }
//   const openDrawer = () => {
//     setOpen(true);
//   }

//   const links = [
//     {
//       text: 'Home',
//       onClick: () => navigate({pathname: './home'}),
//     },
//     {
//       text: 'Textbook',
//       onClick: () => navigate({pathname: './textbook'}),
//     },
//     {
//       text: 'Games',
//       onClick: () => navigate({pathname: './games'}),
//     },
//     {
//       text: 'Statistics',
//       onClick: () => navigate({pathname: './statistics'}),
//     },
//   ];
//   return (
    
//     <>
//     <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={openDrawer}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Persistent drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={closeDrawer}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <List>
//            {links.map(link=>(<ListItem key={link.text} onClick={link.onClick}>{link.text}</ListItem>))}
//         </List>
//       </Drawer>
//     </>
//   )
// }

const SideBar = ({isOpen, close}:{isOpen: boolean, close: ()=>void}) => {

  return (
      <div className={`${style.sideBar} ${isOpen ? style.sideBar_active : null}`}> 
        <div className={style.menuWrapper}>
          <div className={style.buttonWrapper}>
            <button className={style.buttonClose} onClick={close}></button>
          </div>
        <ul className={style.menuList}>
          <li>
            <Link to="/" className={`${style.menuLink} ${style.menuLink1}`} onClick={close}>Главная</Link>
          </li>
          <li>
            <Link to="/textbook" className={`${style.menuLink} ${style.menuLink2}`} onClick={close}>Учебник</Link>
          </li>
          <li>
            <Link to="/games" className={`${style.menuLink} ${style.menuLink3}`} onClick={close}>Игры</Link>
          </li>
          <li>
            <Link to="/statistics" className={`${style.menuLink} ${style.menuLink4}`} onClick={close}>Статистика</Link>
          </li>
          <li>
            <Link to="/team" className={`${style.menuLink} ${style.menuLink5}`} onClick={close}>О команде</Link>
          </li>
        </ul>
        </div>
      
      </div>
    
  )
}
export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const openSideBar = () => {
    setOpen(true);
  }
  const closeSideBar = () => {
    setOpen(false);
  }

  const dispatch = useAppDispatch();
  const user = useSelector((state: {user: {id: string, token: string, email: string, name: string}}) => state);
 
  const auth = useAuth();
  const navigate = useNavigate();
  console.log(auth);
  const logOut = () => {
   dispatch(removeUser());
   navigate('/');
  } 

  return(
    <>
    <header className={style.header}>
      <div className={style.headerContainer}>
        <button className={style.headerMenu} onClick={openSideBar}></button>
         <Link className={style.headerLogo} to="/">
          <span className={style.headerLogo}>RSLang</span>
        </Link>
        <div className={style.headerUser}>
          <div className={style.headerInfo}>
            <div className={style.headerName}>{user.user.name}</div>
            <div className={style.headerEmail}>{user.user.email}</div>
          </div>
          {auth.isAuth && <button className={style.headerLogout} onClick={logOut}>
            <svg className={style.logoutBtn} viewBox="0 0 24 24" >
              <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
              </path>
            </svg>
          </button>}
        </div>
      </div>
    </header>
    <SideBar isOpen={open} close={closeSideBar}/>
    </>
  )
}