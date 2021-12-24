import React from 'react'
import { useFormContext } from "react-hook-form";
import { SerializedStyles } from '@emotion/react';

type Props = {
  years: Array<number>;
  thisYear: number;
  style: SerializedStyles;
}

export default function Year({
  years,
  thisYear,
  style,
}: Props) {
  const { register } = useFormContext();

  return (
    <>
      {
        years.map(value => (
          <label css={style} key={value}>
            <input type="radio" value={value} {...register("year", { required: true })} checked={value === thisYear} />{value}
          </label>
        ))
      }
    </>
  );
}
