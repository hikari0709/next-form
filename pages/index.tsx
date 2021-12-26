import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import style from '../styles/style.scss';
import { css } from '@emotion/react';
import { rgba } from 'emotion-rgba';
import Link from 'next/link';


const shodow = '#68816d';
const alpha = 0.3;

const styles = {
  container: css`
    width: 375px;
    height: 90vh;
    margin: 20px auto 0;
    padding: 2.4rem 1.2rem;
    background-color: #41c9b3;
    text-align: center;
  `,
  button: css`
    display: block;
    width: 80%;
    margin: auto;
    padding: 10px;
    background-color: #2db696;
    border-radius: 2px;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 2px 3px ${rgba(shodow, 0.3)};
  `,
  logoImage: css`
    display: block;
    margin-bottom: 1.6rem;
  `,
};

const Home: NextPage = () => {
  return (
    <div css={styles.container}>
      <div css={styles.logoImage}>
        <Image
          src="/images/logo.png"
          layout="fixed"
          width={200}
          height={200}
        />
      </div>
      <Link href="/request/all" passHref>
        <a css={styles.button}>今やってるアニメを調べる</a>
      </Link>
    </div>
  )
}

export default Home
