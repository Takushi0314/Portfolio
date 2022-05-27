import { Flex, Box } from "@chakra-ui/react";
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
        <Flex w="100%">
          <Box bg="tomato" w="50%">
            <p>aa</p>
          </Box>
          <Box bg="blue" w="50%">
            <p>vbb</p>
          </Box>
        </Flex>
      </main>
    </div>
  );
}
