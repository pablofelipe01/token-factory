import { FullyManagedForm } from "../src/components/form/FullyManagedForm";
import { FormContainer } from "../src/components/FormContainer";
import { NextPage } from "next";

export const FullyManaged: NextPage = () => {
  return (
    <FormContainer title="Non-custodial bidirectional Token">
      <FullyManagedForm />
    </FormContainer>
  );
};

export default FullyManaged;




















// import { SwapComponent } from '../src/components/SwapComponent';
// import { Container } from '@chakra-ui/react';
// import type { InferGetServerSidePropsType, NextPage } from 'next';
// import { GetServerSideProps } from 'next';
// import Head from 'next/head';
// import React from 'react';
// import styles from '../styles/Home.module.css';





// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       foo: "bar"
//     }
//   }
// }

// const Home: NextPage = ({ foo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//   // console.log("Hello12");
//   // const myPublicKey = usePublicKey();
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Swap Form</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//         <div>
//       <main>
//         <Container backgroundColor='white'>
          
//           <SwapComponent />
        
//         </Container>
//       </main>
//       </div>
//     </div>
//   );
// };

// export default Home;
