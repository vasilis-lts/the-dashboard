import styled from '@emotion/styled';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

interface IResponsiveCard {
  title: string;
  subTitle: string;
  imgUrl: string;
}

const CardStyle = styled('div')(({ theme }) => ({
  '& .MuiCardContent-root': {
    // paddingBottom: 0
    color: "#1a252a"
  }
}));


function ResponsiveCard({ title, subTitle, imgUrl }: IResponsiveCard) {

  return (
    <Grid item xs={12} md={6} lg={4}>
      <CardStyle>
        <Card>
          <CardContent sx={{ pb: 0 }}>

            <Box className="flex">

              <Box className="flex-col flex1">
                <Typography sx={{ fontSize: 22 }} gutterBottom color={'primary'} >
                  {title}
                </Typography>
                <div className="flex-center-y">
                  <Typography sx={{ fontSize: 30, fontWeight: 700 }} color={'primary'} gutterBottom>
                    {subTitle}
                  </Typography>
                  <Typography sx={{ ml: .5 }} variant='subtitle1' color={'primary'} >USD</Typography>
                </div>
              </Box>

              <Box>
                <img src={imgUrl} alt={title} width="50" />
              </Box>

            </Box>

          </CardContent>
        </Card>
      </CardStyle>
    </Grid>
  )

}
export default ResponsiveCard