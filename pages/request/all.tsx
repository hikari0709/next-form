import React from 'react'
import Router from 'next/router'
import { useForm, useFormContext, FormProvider } from "react-hook-form";

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

const setDefaultSeason = (month: number) => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      return 1;
      break;
    case 4:
    case 5:
    case 6:
      return 2;
      break;
    case 7:
    case 8:
    case 9:
      return 3;
      break;
    case 10:
    case 11:
    case 12:
      return 4;
      break;
  }
}

const date = new Date();
const thisYear = date.getFullYear();
const thisMonth = date.getMonth() + 1;
const years = [thisYear + 1, thisYear, thisYear - 1, thisYear - 2];
const thisSeasonValue = setDefaultSeason(thisMonth);

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

export type FormType = {
  year: number;
  years: Array<number>;
  season: number;
  seasons: Array<object>;
};

const Home: NextPage<Props> = ({
  setYear,
  setSeason,
}) => {

  const methods = useForm<FormType>({
    defaultValues: {
      years: years,
      seasons: seasons,
    },
  });

  const { register, handleSubmit, watch } = useForm();

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
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} action="#">
          <div css={styles.margin}>
            <Year />
          </div>
          <Season />
          <button type="submit" onClick={moveResultPage}>
            {watch('year', thisYear)}年{convertSeason(watch('season', '1'))}放送のアニメを調べる
          </button>
        </form>
      </FormProvider>
    </div>
  )
}

const Year = () => {
  const { register } = useFormContext();
  return (
    <>
      {
        years.map(value => (
          <label css={styles.label} key={value}>
            <input type="radio" value={value} {...register("year", { required: true })} checked={value === thisYear} />{value}
          </label>
        ))
      }
    </>
  );
}

const Season = () => {
  const { register } = useFormContext();
  const thisSeason = { ...register('season') };
  console.log(thisSeason);
  return (
    <>
      {
        seasons.map(season => (
          <label htmlFor={season.labels} css={styles.label} key={season.value}>
            <input id={season.labels} type="radio" value={season.value} {...register("season", { required: true })} checked={season.value === thisSeasonValue } />
            {season.text}
          </label>
        ))
      }
    </>
  );
}

export default Home
