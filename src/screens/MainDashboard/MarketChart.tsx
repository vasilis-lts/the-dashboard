import React, { useMemo, useState } from 'react';
import styled from "@emotion/styled";
import {
  Box, Grid,
  MenuItem, Select, Typography,
  ButtonGroup, Button
} from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';
import useCoinRangePrice from '../../hooks/useCoinRangePrice';

export default function MarketChart({ coinsData }) {
  const [ActiveCoin, setActiveCoin] = useState(coinsData[0].id);
  const [DayRange, setDayRange] = useState(7);

  const coinRangePriceQuery: any = useCoinRangePrice(ActiveCoin, DayRange);

  const handleChange = (event) => {
    setActiveCoin(event.target.value);
  };

  // if (coinRangePriceQuery.isLoading) { return <Box sx={{ p: 1 }}><CircularProgress /> Loading...</Box> }
  if (coinRangePriceQuery.isError) { return <Box sx={{ p: 1 }}>{coinRangePriceQuery.error.message}</Box> }

  return (<>
    <Box className="flex flex-resp jcsb" sx={{ mb: 1 }}>

      <Typography variant='h5' sx={{ mt: 1 }} className='flex1 dark' gutterBottom><b>Coin price chart</b></Typography>

      <Box className="flex-center-y" sx={{ mt: 1 }}>
        <label htmlFor="coin-chart-select"><b>Select coin:</b></label>
        <Select
          sx={{ ml: 1, mr: 2 }}
          id="coin-chart-select"
          value={ActiveCoin}
          size="small"
          onChange={handleChange}>
          {coinsData.map(coin => {
            return <MenuItem key={coin.id} value={coin.id}>{coin.name}</MenuItem>
          })}
        </Select>
      </Box>

      <Box className="flex-center-y" sx={{ mt: 1 }}>
        <label htmlFor="dayRange"><b>Range:</b></label>
        <ButtonGroup id='dayRange' variant="contained" disableElevation aria-label="outlined primary button group" sx={{ ml: 1 }}>
          <Button onClick={() => setDayRange(1)} color={DayRange === 1 ? "primary" : "inherit"}>24h</Button>
          <Button onClick={() => setDayRange(7)} color={DayRange === 7 ? "primary" : "inherit"}>7d</Button>
          <Button onClick={() => setDayRange(14)} color={DayRange === 14 ? "primary" : "inherit"}>14d</Button>
          <Button onClick={() => setDayRange(30)} color={DayRange === 30 ? "primary" : "inherit"}>30d</Button>
          <Button onClick={() => setDayRange(90)} color={DayRange === 90 ? "primary" : "inherit"}>90d</Button>
        </ButtonGroup>
      </Box>

    </Box>

    {/* GRAPHS */}
    <Grid sx={{ height: "50%", background: "#fff", p: 1, borderRadius: 1 }} className="mui-shadow" container>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={coinRangePriceQuery.data}
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Grid>
  </>)

}