import React from 'react'
import Router from 'next/router'
import { useForm, useFormContext } from "react-hook-form";

import type { NextPage } from 'next'
import { css } from '@emotion/react'

const styles = {
  container: css`
    width: 375px;
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

type Props = {
  setYear: (value: number) => void;
  setSeason: (value: number) => void;
}

const Home: NextPage<Props> = ({
  setYear,
  setSeason,
  }) => {
  type FormValues = {
    year: Number;
    season: Number;
  };

  const { register, handleSubmit, watch } = useForm();
  const methods = useFormContext();

  const convertSeason = (value: String) => {
    switch (value) {
      case '1':
        return '春';
        break;
      case '2':
        return '夏';
        break;
      case '3':
        return '秋';
        break;
      case '4':
        return '冬';
        break;
    }
  }

  const onSubmit = handleSubmit(
    (data) => {
      setYear(data.year);
      setSeason(data.season);
    }
  );

  const moveResultPage = () => {
    Router.push('/request/result');
  }

  return (
    <div css={styles.container}>
      <form onSubmit={onSubmit} action="#">
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
        <button type="submit" onClick={moveResultPage}>
          {watch('year', thisYear)}年{convertSeason(watch('season', '1'))}放送のアニメを調べる
        </button>
      </form>
    </div>
  )
}

export default Home
