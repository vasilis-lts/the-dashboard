import { useQuery } from "react-query";
import { apiSettings } from '../appSettings';
import { getDayAndMonth, getHoursAndMinutes } from "../helpers/helperFunctions";


function modifyPricesArray(prices, dayRange) {
  let modifiedPrices: any[] = [];
  modifiedPrices = prices.map(function (row) {
    return {
      name: dayRange <= 1 ? getHoursAndMinutes(row[0]) : getDayAndMonth(row[0]),
      price: row[1].toFixed(2)
    }
  });
  return modifiedPrices;
}

async function getCoinRangePrice(coin, dayRange) {
  try {
    const response = await fetch(`${apiSettings.BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=${dayRange}&interval=daily`);
    if (!response.ok) {
      throw Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const modifiedPrices = modifyPricesArray(data.prices, dayRange);
    return modifiedPrices;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    throw Error(JSON.stringify(error));
  }
}

export default function useCoinRangePrice(coin, dayRange) {
  return useQuery(
    ["coinRangePrice", coin, dayRange],
    () => getCoinRangePrice(coin, dayRange),
    { staleTime: 20000000 }
  );
}
