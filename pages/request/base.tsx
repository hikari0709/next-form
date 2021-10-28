import React from 'react'
import type { NextPage } from 'next'
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
};

const Home: NextPage = () => {
  return (
    <div css={styles.container}>
      request base
      <Link href="/request/first" passHref>
        <a css={styles.button}>request first</a>
        </Link>
    </div>
  )
}

export default Home
