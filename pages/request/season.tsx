import type { NextPage } from 'next'
import { css } from '@emotion/react'
import Link from 'next/link';
import { useForm, useFormContext } from "react-hook-form";

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
  const { register, handleSubmit } = useFormContext();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(register));
  }

  return (
    <div css={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} action="/request/result">
        {
          seasons.map(season => (
            <label htmlFor={season.labels} css={styles.label} key={season.value}>
              <input id={season.labels} type="radio" value={season.value} {...register("season", { required: true })} />
              {season.text}
            </label>
          ))
        }
        <input type="submit" />
      </form>
    </div>
  );
}

export default Home
