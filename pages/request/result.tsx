import React, { useContext, useEffect } from 'react'

import type { NextPage } from 'next';
import { css } from '@emotion/react';
import { rgba } from 'emotion-rgba';

import { ResultContext } from '../../hooks/ResultProvider';
import Link from 'next/link';

const styles = {
  container: css`
    width: 375px;
    height: 100vh;
    margin: auto;
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
  button: css`
    position: fixed;
    bottom: 50px;
    right: 15px;
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: auto;
    padding: 10px;
    background-color: #2db696;
    border-radius: 50%;
    color: #fff;
    font-size: 1.1rem;
    line-height: 1.2;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 2px 3px ${rgba('#68816d', 0.3)};
    cursor: pointer;
  `,
};

const Home: NextPage = () => {
  let { result } = useContext(ResultContext);

  useEffect(() => {
    if (!result.length) {
      //result = JSON.parse(localStorage.getItem('result'));
    }
  }, []);

  return (
    <div css={styles.container}>
      <ul css={ styles.list }>
        {result.map((value, index) => (
          <li key={index}>{value.title}</li>
        ))}
      </ul>
      <div css={ styles.button }>
        <Link href="/request/all" passHref>
          <a css={styles.button}>検索条件を変える</a>
        </Link>
      </div>
    </div>
  );
}

export default Home
