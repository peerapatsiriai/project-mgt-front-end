import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock, JongRaiBlock } from 'dan-components';
import { Box, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function SearchProject() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <JongRaiBlock>
        <Grid container justifyContent="center" sx={{ }}>
          <TextField
            id="standard-textarea"
            label="ค้นหาโครงการ"
            placeholder="พิมพ์คีย์เวิดสำคัญ"
            variant="standard"
            sx={{ width: '65%', height: 60 }}
          />
          <IconButton color="secondary" aria-label="Search" sx={{ mt: 1.5, width: 50, height: 50 }}>
            <SearchIcon />
          </IconButton>
        </Grid>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
          p: 1,
        }}>
          <div>
            <FormControl sx={{
              mx: 1,
              mt: 2,
              mb: 2,
              minWidth: 150,
            }}>
              <InputLabel htmlFor="grouped-select">เลือกหลักสูตร</InputLabel>
              <Select defaultValue="" id="grouped-select" label="Grouping">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{
              mx: 1,
              mt: 2,
              mb: 2,
              minWidth: 150,
            }}>
              <InputLabel htmlFor="grouped-select">ปีการศึกษา</InputLabel>
              <Select defaultValue="" id="grouped-select" label="Grouping">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{
              mx: 1,
              mt: 2,
              mb: 2,
              minWidth: 150,
            }}>
              <InputLabel htmlFor="grouped-select">อาจารย์</InputLabel>
              <Select defaultValue="" id="grouped-select" label="Grouping">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
      </JongRaiBlock>
      <PapperBlock title="ค้นหาโครงการ" desc="โครงการที่ค้นพบ" icon="ion-ios-school-outline">
        <Grid container sx={{ m: 2.5 }}>
          <Card sx={{ maxWidth: 320, mr: 5, mt: 3, }}>
            <CardHeader
              title="เครื่องส่งอาหารควายอัตโนมัติ"
              subheader="September 14, 2099"
            />
            <CardMedia
              component="img"
              height="300"
              image= 'https://hackster.imgix.net/uploads/attachments/304927/cover_x_sm_ryeceUbLlV.gif?auto=format%2Ccompress&gifq=35&w=900&h=675&fit=min&fm=mp4'
              alt="Paella dish"
            />
            <Typography sx={{
              ml: 2,
              mt: 1.5,
              mb: 1.5
            }}>
              <Button variant="outlined" color="primary">
                <a href='/app/General/SearchProject/ProjectDoc' style={{
                  textDecoration: 'none',
                }}>
                  รายละเอียดโครงงาน
                </a>
              </Button>
            </Typography>
          </Card>

          <Card sx={{ maxWidth: 320, mr: 5, mt: 3 }}>
            <CardHeader
              title="หมัดเพลิงจงลัยทลายดาก"
              subheader="September 14, 3099"
            />
            <CardMedia
              component="img"
              height="300"
              image= 'https://hackster.imgix.net/uploads/attachments/332712/ezgif_com-optimize_7BrvBM8NYY.gif?auto=format%2Ccompress&gifq=35&w=900&h=675&fit=min&fm=mp4'
              alt="Paella dish"
            />
            <Typography sx={{
              ml: 2,
              mt: 1.5,
              mb: 1.5
            }}>
              <Button variant="outlined" color="primary">
                <a href='/app' style={{
                  textDecoration: 'none',
                }}>
                  รายละเอียดโครงงาน
                </a>
              </Button>
            </Typography>
          </Card>

          <Card sx={{ maxWidth: 320, mr: 5, mt: 3 }}>
            <CardHeader
              title="หุ่นยนต์ตาแป๋วแขม่วพุง"
              subheader="September 14, 2099"
            />
            <CardMedia
              component="img"
              height="300"
              image= 'https://hackster.imgix.net/uploads/attachments/1562942/beat_600_450_uL2vEhiXCs.gif?auto=format%2Ccompress&gifq=35&w=900&h=675&fit=min&fm=mp4'
              alt="Paella dish"
            />
            <Typography sx={{
              ml: 2,
              mt: 1.5,
              mb: 1.5
            }}>
              <Button variant="outlined" color="primary">
                <a href='/app' style={{
                  textDecoration: 'none',
                }}>
                  รายละเอียดโครงงาน
                </a>
              </Button>
            </Typography>
          </Card>
        </Grid>
      </PapperBlock>
    </div>
  );
}

export default SearchProject;
