import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";

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

type formInputs = {
  year: number;
  season: {
    text: string,
    value: number,
  }
};

const date = new Date();
const thisYear = date.getFullYear();
const years = [thisYear + 1, thisYear, thisYear - 1, thisYear - 2];

const seasons = [
  {
    text: '春',
    labels: 'spring',
    value: 1,
  },
  {
    text: '夏',
    labels: 'summer',
    value: 2,
  },
  {
    text: '秋',
    labels: 'autumm',
    value: 3,
  },
  {
    text: '冬',
    labels: 'winter',
    value: 4,
  }
];

const Home: NextPage = () => {
  const { register, handleSubmit, watch } = useForm<formInputs>();
  const [result, setResult] = useState('');

  type FormValues = {
    year: number;
    season: number;
  };

  const onSubmit = (data: FormValues) => {
    //setResult(JSON.stringify(data));
    axios
      .get(`http://api.moemoe.tokyo/anime/v1/master/${data.year}/${data.season}`)
      .then(result => console.log(result))
      .catch(err => alert(err));
  }

  return (
    <div css={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} action="#">
        <div css={styles.margin}>
          {
            years.map(value => (
              <label css={styles.label} key={value}>
              <input type="radio" value={value} {...register("year", { required: true })} />
              {value}
            </label>
            ))
          }
        </div>
        <div>
          {
            seasons.map(season => (
              <label htmlFor={season.labels} css={styles.label} key={season.value}>
                <input id={season.labels} type="radio" value={season.value} {...register("season", { required: true })} />
                {season.text}
              </label>
            ))
          }
        </div>
        <button type="submit">
          {watch('year', thisYear)}年{watch('season')}放送のアニメを調べる
        </button>
      </form>
    </div>
  )
}

export default Home
