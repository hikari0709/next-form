import React, {useEffect, useContext, useState, useRef} from 'react'
import Router from 'next/router'
import { useForm } from "react-hook-form";
import axios from "axios";
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import { rgba } from 'emotion-rgba';
import { ResultContext } from '../../hooks/ResultProvider';

const shodow = '#68816d';

const date = new Date();
const thisYear = date.getFullYear();
// TODO: 2年よりさらに前も選択できるようにする「もっと見る」ボタンを設置アコーディオンとかで
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

const styles = {
  container: css`
    width: 375px;
    height: 100vh;
    margin: auto;
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

const modal = (status : boolean) => css`
  display: ${ status ? 'block': 'none' };
`

type Response = {
  public_url: String;
  title: String;
  product_companies: String;
}

const Home: NextPage = () => {
  const date = new Date();
  const { register, handleSubmit, watch } = useForm();
  const { result, setResult } = useContext(ResultContext);
  const isFirstRender = useRef(true);
  const isShowModal = useRef(false);

  const selectedSeason = watch('season', 1);
  const selectedYear = watch('year', date.getFullYear());

  const moveResultPage = () => {
    if (result.length) {
      Router.push('/request/result');
    }
  }

  const onSubmit = handleSubmit(
    (data) => {
      axios
        .get(`http://api.moemoe.tokyo/anime/v1/master/${data.year}/${data.season}`)
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
        }).catch(err => alert(err));
    }
  );

  // 初期ローディング時に実行
  useEffect(() => {
    isFirstRender.current = false
  }, []);

  // statusの更新されるタイミングが変
  // モーダル用に準備したコンテンツは表示されるが一足遅く表示される→ステータスの更新のタイミングを知る
  // 項目を選択して他の動作（クリックなど）をすると表示される タイミングが遅い
  useEffect(() => {
    if(isFirstRender.current) {
      moveResultPage();
      isShowModal.current = true;
    } else {
      isFirstRender.current = true;
    }
  }, [result]);

  const convertSeasonValue = (value: string) => {
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

  return (
    <div css={styles.container}>
      <div css={ modal(isShowModal.current) }>
        <p>アニメが見つかりませんでした。条件を変えて検索してください。</p>
      </div>
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
                  defaultChecked={selectedYear === value}
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
                  defaultChecked={selectedSeason === season.value}
                  {...register("season", { required: true })}
                /><label htmlFor={season.labels} css={styles.label}>
                  {season.text}
                </label>
              </li>
            ))
          }
        </ul>
        <button type="submit" css={styles.button}>
          {selectedYear}年{convertSeasonValue(selectedSeason)}放送のアニメを調べる
        </button>
      </form>
    </div>
  )
}

export default Home
