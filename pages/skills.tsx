import { SimpleGrid, Box } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Skills() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skills</title>
        <meta name="description" content="Takushi Nishiyama Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>スキルセット</h1>
        <div className={styles.description}>
          業務や趣味で使用したことのあるスキルを記載しています
          本業はSIerでバッグエンド系を主に担当しております。
          強みとしては、フロントエンドからバックエンドで広く見ることができます。
          現在、クラウドサービス（AWSやAzure、GCP）に関して勉強中です。
        </div>
        <SimpleGrid columns={3} spacing={10} w="100%">
          <Box>
            <p>フロントエンド</p>
            <p>Angular</p>
            <p>React(Next.js)</p>
            <p>jQuery</p>
            <p>Bootstrap</p>
            <p>WordPress</p>
          </Box>
          <Box>
            <p>バックエンド</p>
            <p>Ruby on Rails</p>
            <p>Spring Framework</p>
            <p>Django</p>
            <p>Oracle</p>
            <p>MySQL</p>
            <p>PostgreSQL</p>
          </Box>
          <Box>
            <p>ツール</p>
            <p>Docker</p>
            <p>vim</p>
            <p>Git / Github</p>
            <p>Ubuntu / CentOS(Linux)</p>
            <p>VMWare / VirtualBox</p>
            <p>Jenkins</p>
            <p>nginx / apache</p>
            <p>tomcat</p>
          </Box>
        </SimpleGrid>
      </main>
    </div>
  );
}
