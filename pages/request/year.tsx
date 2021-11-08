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
  year: string;
};

const date = new Date();
const thisYear = date.getFullYear();
const years = [thisYear+1, thisYear, thisYear-1, thisYear-2];

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<formInputs>();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  }

  return (
    <div css={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} action="/request/season">
        {years.map(value => (
          <label css={styles.label} key={value}>
            <input type="radio" value={value} {...register("year", { required: true })} />
            {value}
          </label>
        ))}
      </form>
      <Link href="/request/season" passHref>
        <a>request season</a>
      </Link>
    </div>
  )
}

export default Home
