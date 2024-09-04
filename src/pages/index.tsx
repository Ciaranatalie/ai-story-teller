import React, { useState } from "react";
import Head from "next/head";
import style from "@/styles/Home.module.css";
import Header from "../components/Molecules/Header/Header";
import WindowBox from "../components/Organism/WindowBox/WindowBox";
import InputBox from "../components/Molecules/InputBox/InputBox";
import SelectBox from "../components/Molecules/SelectBox/SelectBox";
import { listaGeneri } from "../constants/common";

export default function Home() {
  const [protagonista, setProtagonista] = useState("");
  const [antagonista, setAntagonista] = useState("");

  const [genere, setGenere] = useState("");
  
  return (
    <>
      <Head>
        <title>AI Story Teller</title>
        <meta name="description" content="AI-based app to generate stories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <Header title="AI Story Teller"/>
        <div className={style.content}>
        <WindowBox title='Story Params'>
          <div className = {style.container}>
          </div>
          <div className = {style.container}>
            <SelectBox label="ciao" list={listaGeneri} setAction={function (value: React.SetStateAction<string>): void {
                throw new Error("Function not implemented.");
              } }/>
          <InputBox 
            label="Nome Protagonista"
            value={protagonista}
            setValue= {setProtagonista}
          />
          <InputBox 
            label="Nome Antagonista"
            value={antagonista}
            setValue= {setAntagonista}
          />
          </div>
        </WindowBox>
        </div>
      </main>
    </>
  );
}
