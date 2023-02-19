import styled from "@emotion/styled";
import { Box, Grid, Typography } from '@mui/material';
import ResponsiveCard from '../../components/ResponsiveCard';
import useAppState from "../../hooks/useAppState";
import useFetchCoins from '../../hooks/useFetchCoins';
import MarketChart from './MarketChart';

const MainDashboardStyle = styled('div')(({ theme }) => ({
  padding: 24,
  height: "100%",
  maxWidth: 1400,
  overflowY: "auto",
}));

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];


const MainDashboard = () => {
  const { ActiveCurrency } = useAppState();
  const topCoinsQuery: any = useFetchCoins(ActiveCurrency);

  if (topCoinsQuery.isLoading) { return <Box sx={{ p: 1 }}>Loading...</Box> }
  if (topCoinsQuery.isError) { return <Box sx={{ p: 1 }}>{topCoinsQuery.error.message}</Box> }

  return (
    <MainDashboardStyle>

      {/* CARDS */}
      <Box component="main" sx={{ flexGrow: 1, mb: 3, mt: 1 }}>
        <Typography variant='h4' className="dark" sx={{ mb: 2 }}><b>Analytics</b></Typography>
        <Typography variant='h5' className="dark" sx={{ mb: 2 }}><b>Top 3 coins by market cap</b></Typography>

        {topCoinsQuery.isSuccess ?
          <Grid container spacing={3}>
            {topCoinsQuery.data.map(coin => {
              return <ResponsiveCard
                key={coin.id}
                title={coin.name}
                subTitle={coin.current_price}
                imgUrl={coin.image} />
            })}
          </Grid> : null}
      </Box>

      <MarketChart coinsData={topCoinsQuery.data} />
    </MainDashboardStyle>
  );
};

export default MainDashboard;