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
  labelStyle: SerializedStyles;
  list: SerializedStyles;
  input: SerializedStyles;
}

export default function Season ({
  seasons,
  thisSeason,
  labelStyle,
  list,
  input,
}: Props) {
  const { register } = useFormContext();
  return (
    <ul css={list}>
        {
        seasons.map(season => (
          <li key={season.value}>
            <input
              type="radio"
              value={season.value}
              checked={season.value === thisSeason}
              css={input}
              {...register("season", { required: true })}
            /><label css={labelStyle}>
              {season.text}
            </label>
          </li>
          ))
        }
    </ul>
  );
}
