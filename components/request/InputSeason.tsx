import React from 'react'
import { useFormContext } from "react-hook-form";
import { SerializedStyles } from '@emotion/react';

type Seasons = {
  text: string;
  labels: string;
  value: number;
}

type Props = {
  seasons: Array<Seasons>;
  thisSeason: number;
  style: SerializedStyles;
}

export default function Season ({
  seasons,
  thisSeason,
  style,
}: Props) {
  const { register } = useFormContext();
  return (
    <>
      {
        seasons.map(season => (
          <label htmlFor={season.labels} css={style} key={season.value}>
            <input id={season.labels} type="radio" value={season.value} {...register("season", { required: true })} checked={season.value === thisSeason } />
            {season.text}
          </label>
        ))
      }
    </>
  );
}
