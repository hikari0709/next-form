import React, { useState, useEffect } from 'react'
import axios from "axios";

import type { NextPage } from 'next'
import { css } from '@emotion/react'

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
  label: css`
    display: block;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
  `,
  margin: css`
    margin-bottom: 16px;
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
      <ul>
        {result.map((value, index) => (
          <li key={index}>{value.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home
