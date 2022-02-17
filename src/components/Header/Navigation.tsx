import React, {useState} from "react";
import { Link } from "react-router-dom";
import style from './Header.scss';

const SideBar = ({isOpen, close}:{isOpen: boolean, close: ()=>void}) => {
  console.log(isOpen)
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
  return(
    <>
    <header className={style.header}>
      <div className={style.headerContainer}>
        <button className={style.headerMenu} onClick={openSideBar}></button>
         <Link className={style.headerLogo} to="/">
          <span className={style.headerLogo}>RSLang</span>
        </Link>
        <span></span>
      </div>
    </header>
    <SideBar isOpen={open} close={closeSideBar}/>
    </>
  )
}