import React, { useContext, useEffect, useState, useCallback } from 'react'

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
  button: (scrollStatus: boolean) => {
    return css`
    position: fixed;
    bottom: 50px;
    right: 15px;
    display: ${scrollStatus ? 'flex' : 'none' };
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: auto;
    padding: 10px;
    background-color: #2db696;
    border-radius: 50%;
    color: #fff;
    font-size: 1rem;
    line-height: 1.1;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 2px 3px ${rgba('#68816d', 0.3)};
    cursor: pointer;
  `
  },
};

const Home: NextPage = () => {
  let { result } = useContext(ResultContext);

  const [scrollStatus, setScrollStatus] = useState(true);

  // scrollイベントつけたいけどなぜか動かない…
  // const [scrollY, setScrollY] = useState(0);

  // function logit() {
  //   setScrollY(window.pageYOffset);
  //   console.log(new Date().getTime());
  // }

  // useEffect(() => {
  //   function watchScroll() {
  //     window.addEventListener("scroll", logit);
  //   }
  //   watchScroll();
  //   return () => {
  //     window.removeEventListener("scroll", logit);
  //   };
  // });

  return (
    <div css={styles.container}>
      <ul css={ styles.list }>
        {result.map((value, index) => (
          <li key={index}>{value.title}</li>
        ))}
      </ul>
      <div>
        <Link href="/request/all" passHref>
          <a css={styles.button(scrollStatus)}>条件を変えて検索</a>
        </Link>
      </div>
    </div>
  );
}

export default Home
