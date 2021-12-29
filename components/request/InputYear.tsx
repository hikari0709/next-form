import React from 'react'
import { useFormContext } from "react-hook-form";
import { SerializedStyles } from '@emotion/react';

type Props = {
  years: Array<number>;
  thisYear: number;
  style: SerializedStyles;
  list: SerializedStyles;
  input: SerializedStyles;
}

export default function Year({
  years,
  thisYear,
  style,
  list,
  input,
}: Props) {
  const { register } = useFormContext();

  return (
    <ul css={list}>
      {
        years.map(value => (
        <li key={value}>
          <input
            type="radio"
            value={value}
            checked={value === thisYear}
            css={input}
            // なんでこの書き方？ ref={}と何が違う？
            {...register("year", { required: true })}
          /><label css={style}>
            {value}
          </label>
        </li>
        ))
      }
    </ul>
  );
}
