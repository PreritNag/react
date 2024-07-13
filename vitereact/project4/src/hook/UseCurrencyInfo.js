import { useEffect, useState } from "react";

function CurrencyInfo(currency) {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setdata(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
}

export default CurrencyInfo;
