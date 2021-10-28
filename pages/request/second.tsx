import React from 'react'
import type { NextPage } from 'next'
import { css } from '@emotion/react'
import Link from 'next/link'

const styles = {
  container: css`
    width: 375px;
    margin: 0 auto;
    background-color: #fff;
  `,
};

const Home: NextPage = () => {
  return (
    <div css={styles.container}>
      request first
      <Link href="/" passHref>
          <a>request alliance</a>
        </Link>
    </div>
  )
}

export default Home
