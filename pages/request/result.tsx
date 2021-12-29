import React, { useState, useEffect } from 'react'
import axios from "axios";

import type { NextPage } from 'next'
import { css } from '@emotion/react'

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

type Response = {
  title_short2: String;
  twitter_account: String;
  public_url: String;
  title_short1: String
  sex: Number;
  twitter_hash_tag: String;
  id: Number;
  sequel: Number;
  created_at: String;
  cours_id: Number;
  title: String;
  title_short3: String;
  updated_at: String;
  product_companies: String;
}

type Props = {
  year: number;
  season: number;
}

const Home: NextPage<Props> = ({
  year,
  season,
}) => {

  const [result, setResult] = useState<Response[]>([]);

  useEffect(() => {
    axios
      .get(`http://api.moemoe.tokyo/anime/v1/master/${year}/${season}`)
      .then(res => {
        setResult(
          res.data.map((d: Response) => {
            return {
              url: d.public_url,
              title: d.title,
              company: d.product_companies,
            }
          })
        );
      })
      .catch(err => alert(err));
  },[])

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
