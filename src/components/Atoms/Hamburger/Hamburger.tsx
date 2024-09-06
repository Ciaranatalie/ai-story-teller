import React, { Dispatch, SetStateAction, useState } from 'react'; 
import style from "./Hamburger.module.scss";

interface HamburgerProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = () => {
    const {active, setActive} = props;
    
  return (
    <div className = {`${style.main} ${active ? style.active :""}`}>
        <div className= {style.breadUp}/>
        <div className= {style.hamburger}/>
        <div className= {style.breadDown}/>      
    </div>
  )
}

export default Hamburger;
