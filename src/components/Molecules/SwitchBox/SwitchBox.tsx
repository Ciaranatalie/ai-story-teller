import { Dispatch, SetStateAction } from "react";
import style from "./SwitchBox.module.scss";
import Switch from "../../Atoms/Switch/Switch";
import React from "react";

interface SwitchBoxProps {
  label: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

const SwitchBox = (props: SwitchBoxProps) => {
  const { label, value, setValue } = props;

  return (
    <div className={style.main}>
      <h3>{label}</h3>
      <Switch active={value} setActive={setValue} />
    </div>
  );
};

export default SwitchBox;
