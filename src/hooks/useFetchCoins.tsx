import { useQuery } from "react-query";
import { apiSettings } from '../appSettings';

async function getTopCoins(activeCurrency) {
  try {
    const response = await fetch(`${apiSettings.BASE_URL}/coins/markets?vs_currency=${activeCurrency}&order=market_cap_desc&per_page=3&page=1&sparkline=false&price_change_percentage=24h`);
    if (!response.ok) {
      throw Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    throw Error(JSON.stringify(error));
  }
}

export default function useFetchCoins(activeCurrency) {
  return useQuery(["topCoins", activeCurrency], () => getTopCoins(activeCurrency), {
    staleTime: 120000
  });
}
