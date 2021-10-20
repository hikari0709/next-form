import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import { css } from '@emotion/react'

const styles = {
  container: css`
    width: 375px;
    margin: 0 auto;
  `,
};

const Home: NextPage = () => {
  return (
    <div css={styles.container}>
      Hello!
    </div>
  )
}

export default Home
