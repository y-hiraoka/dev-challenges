import React from "react";
import { useRecoilValue,useResetRecoilState } from "recoil";
import {
  countriesValue,
  countriesCountValue,
  getCountryByIndex,
} from "./state/countries";

export const UseAsyncRecoil = () => {
  const countries = useRecoilValue(countriesCountValue);

  const contry1 = useRecoilValue(getCountryByIndex(5));
  const contry2 = useRecoilValue(getCountryByIndex(41));
  const contry3 = useRecoilValue(getCountryByIndex(168));
  const contry4 = useRecoilValue(getCountryByIndex(246));

  return (
    <div>
      べつのコンポーネント
      <pre style={{ width: 400,color:"white" }}>{JSON.stringify(contry1, null, 2)}</pre>
      <pre style={{ width: 400,color:"pink" }}>{JSON.stringify(contry2, null, 2)}</pre>
      <pre style={{ width: 400,color:"yellow" }}>{JSON.stringify(contry3, null, 2)}</pre>
      <pre style={{ width: 400,color:"yellowgreen" }}>{JSON.stringify(contry4, null, 2)}</pre>
    </div>
  );
};
