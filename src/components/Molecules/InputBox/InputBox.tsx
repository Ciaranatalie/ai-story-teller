import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import style from "./InputBox.module.scss";
import React from "react";

interface InputBoxProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const InputBox = (props: InputBoxProps) => {
  const { label, value, setValue } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());

  };

  return (
    <div className={style.main}>
      <h3>{label}</h3>
      {/* controlled component */}
      <input
        value={value}
        onChange={handleChange}
        type="text"
      />
    </div>
  );
};

export default InputBox;