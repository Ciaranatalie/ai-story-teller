import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Molecules/Header/Header";
import WindowBox from "@/components/Organism/WindowBox/WindowBox";



export default function Home() {
  return (
    <>
      <Head>
        <title>AI Story Teller</title>
        <meta name="description" content="AI-based app to generate stories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header title="AI Story Teller"/>
        <div className={styles.content}>
        <WindowBox title='Story Params'/>
        </div>
      </main>
    </>
  );
}
