import React, { useState } from 'react'
import { useForm } from "react-hook-form";

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
  season: number;
};

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<formInputs>();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  }

  return (
    <div css={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} action="/request/first">
        <label htmlFor="spring" css={styles.label}>
          <input id="spring" type="radio" value="1" defaultChecked {...register("season", { required: true })} />
          春
        </label>
        <label htmlFor="summer" css={styles.label}>
          <input id="summer" type="radio" value="2" {...register("season", { required: true })} />
          夏
        </label>
        <label htmlFor="autumm" css={styles.label}>
          <input id="autumm" type="radio" value="3" {...register("season", { required: true })} />
          秋
        </label>
        <label htmlFor="winter" css={styles.label}>
          <input id="winter" type="radio" value="4" {...register("season", { required: true })} />
          冬
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Home
