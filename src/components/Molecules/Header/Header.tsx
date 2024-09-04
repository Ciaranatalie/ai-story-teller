import Button from "../../Atoms/Button/Button";
import style from './Header.module.scss';
import React from 'react';

interface HeaderProps{
    title: string;
}
const Header = (props: HeaderProps) => {
    const {title} = props;
  return (
    <div className={style.main}>
      <h1>{title}</h1>
      <Button label='login'/>
    </div>
  );
};

export default Header;
