import React from 'react'
import Router from 'next/router'
import { useForm, FormProvider } from "react-hook-form";

import Year from "../../components/request/InputYear";
import Season from "../../components/request/InputSeason";

import type { NextPage } from 'next';
import { css } from '@emotion/react';
import { rgba } from 'emotion-rgba';

const shodow = '#68816d';
const alpha = 0.3;

const date = new Date();
const thisYear = date.getFullYear();
const years = [thisYear + 1, thisYear, thisYear - 1, thisYear - 2];

const thisSeason = 4;

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

type Seasons = {
  text: string;
  labels: string;
  value: number;
}

type Props = {
  year: number;
  season: number;
  setYear: (value: number) => void;
  setSeason: (value: number) => void;
}

export type FormType = {
  year: number;
  years: Array<number>;
  season: number;
  seasons: Array<Seasons>;
};

const convertSeason = (value: number) => {
  switch (value) {
    case 1:
      return '春';
      break;
    case 2:
      return '夏';
      break;
    case 3:
      return '秋';
      break;
    case 4:
      return '冬';
      break;
  }
}

// コンポーネント自体にマージンをつけたくないけど一旦考えないでコーディングする
const styles = {
  container: css`
    width: 375px;
    height: 90vh;
    margin: 20px auto 0;
    padding: 2.4rem 1.2rem;
    background-color: #41c9b3;
    text-align: center;
  `,
  button: css`
    display: block;
    width: 100%;
    margin: auto;
    padding: 10px;
    background-color: #2db696;
    border-radius: 2px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 2px 3px ${rgba(shodow, 0.3)};
    cursor: pointer;
  `,
  inputRadio: css`
    display: none;

    &:checked ~ label {
      background-color: #2db696;
      color: #fff;
    }
  `,
  label: css`
    display: block;
    padding: 1.6rem 0.8rem;
    border-radius: 3px;
    background-color: #fff;
    color: #41c9b3;
    font-weight: bold;
    cursor: pointer;
  `,
  yearList: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1.2rem;

    li {
      width: calc((100% - 0.4rem) / 2);
      margin-bottom: 0.4rem;
    }
  `,
  seasonList: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1.8rem;

    li {
      width: calc((100% - 0.4rem) / 2);
      margin-bottom: 0.4rem;
    }
  `,
};

const Home: NextPage<Props> = ({
  year,
  season,
  setYear,
  setSeason,
}) => {

  const methods = useForm<FormType>({
    defaultValues: {
      year: year,
      season: season,
      years: years,
      seasons: seasons,
    },
  });

  const { register, handleSubmit, watch } = useForm();

  const onSubmit = methods.handleSubmit(
    (data) => {
      console.log(data);
      setYear(data.year);
      setSeason(data.season);
    }
  );

  const moveResultPage = () => {
    Router.push('/request/result');
  }

  return (
    <div css={styles.container}>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} action="#">
          <ul css={styles.yearList}>
            {
              years.map(value => (
                <li key={value}>
                  <input
                    id={String(value)}
                    type="radio"
                    value={value}
                    css={styles.inputRadio}
                    {...register("year", { required: true })}
                  /><label htmlFor={String(value)} css={styles.label}>
                    {value}
                  </label>
                </li>
              ))
            }
          </ul>
          <ul css={styles.seasonList}>
            {
              seasons.map(season => (
                <li key={season.value}>
                  <input
                    id={season.labels}
                    type="radio"
                    value={season.value}
                    css={styles.inputRadio}
                    {...register("season", { required: true })}
                  /><label htmlFor={season.labels} css={styles.label}>
                    {season.text}
                  </label>
                </li>
              ))
            }
          </ul>
          <button type="submit" onClick={moveResultPage} css={styles.button}>
            {watch('year', year)}年{watch('season', season)}放送のアニメを調べる
          </button>
        </form>
      </FormProvider>
    </div>
  )
}

export default Home
