import React, { useState } from 'react';

import type { NextPage } from 'next';
import { css } from '@emotion/react';

import { useResult } from '../../hooks/ResultProvider';

const styles = {
  container: css`
    width: 375px;
    height: 90vh;
    margin: 20px auto 0;
    padding: 2.4rem 1.2rem;
    background-color: #41c9b3;
    text-align: center;
  `,
  list: css`
    height: 100%;
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1.6rem;

    li {
      width: calc((100% - 0.4rem) / 2);
      margin-bottom: 0.4rem;
      background-color: #fff;
      padding: 0.8rem;
      border-radius: 0.2rem;
      word-break: break-all;
    }
  `,
};

const Home: NextPage = () => {
  const { result, setResult } = useResult();
  console.log(result);

  return (
    <div css={styles.container}>
      <ul css={ styles.list }>
        {result.map((value, index) => (
          <li key={index}>{value.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home
