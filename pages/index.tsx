import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/style.scss'
import { css } from '@emotion/react'
import Link from 'next/link'

const styles = {
  container: css`
    width: 375px;
    height: 90vh;
    margin: 20px auto 0;
    padding: 1.2rem;
    background-color: #fff;
  `,
  button: css`
    display: block;
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    background-color: #00a022;
    border-radius: 2px;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  `,
  title: css`
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.2;
  `,
};

const Home: NextPage = () => {
  return (
    <div css={styles.container}>
      <p css={styles.title}>Next<br />TypeScript<br />Rect Hook Form</p>

      <Link href="/request/all" passHref>
        <a css={styles.button}>今やってるアニメを調べる</a>
      </Link>
    </div>
  )
}

export default Home
