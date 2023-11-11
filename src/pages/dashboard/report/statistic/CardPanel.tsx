import { Avatar, Box, Card, CardContent, Skeleton, Typography, Divider } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { deepOrange, green, yellow, blue } from '@mui/material/colors';
import {
  AccountBalance as AccountBalanceIcon,
  AttachMoney as AttachMoneyIcon,
  AccountTree as AccountTreeIcon,
  DoneOutline as DoneOutlineIcon
} from '@mui/icons-material';
import { ReactNode } from "react";

/* 
  Types
*/

type CardObj = {
  text: string;
  color?: string;
  icon?: any;
  content: number;
  prefix?: any;
  suffix?: any;
}

export default function CardPanel({loading}: {loading: boolean}){

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Divider textAlign="left" color="text.secondary">What do we have today?</Divider>
      <Grid2 container spacing={2}>
        {[{
          text: "Market Cap",
          color: deepOrange[500],
          icon: AccountBalanceIcon,
          content: 100000000,
          prefix: "$"
        }, {
          text: "Profit",
          color: green[500],
          icon: AttachMoneyIcon,
          content: 5000000,
          prefix: "$"
        }, {
          text: "Project Started",
          color: yellow[700],
          icon: AccountTreeIcon,
          content: 1800
        }, {
          text: "Project Finished",
          color: blue[500],
          icon: DoneOutlineIcon,
          content: 1728
        }].map((x: CardObj, i) => (
        <Grid2 xs={12} sm={4} md={3} key={i}>
          {loading ? <Skeleton variant="rectangular" height="100%" /> : 
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 18, fontWeight: 600 }} color="text.secondary" gutterBottom>
                {x.text}
              </Typography>
              <div className="d-flex">
                <Avatar sx={{ bgcolor: x.color }} variant="rounded"><x.icon/></Avatar>
                {/* <div style={{alignItems: 'center', display: 'flex', padding: '0.4rem'}}>{x.content}</div> */}
                <Typography sx={{ fontSize: 20, fontWeight: 600, alignItems: 'center', display: 'flex', padding: '0.4rem' }} color="text.secondary" gutterBottom>
                  {x.prefix} {x.content.toLocaleString()} {x.suffix}
                </Typography>
              </div>
            </CardContent>
          </Card>
          }
        </Grid2>
        ))}
      </Grid2>
      </Box>
  )
}