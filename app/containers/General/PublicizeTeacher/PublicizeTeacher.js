import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

  function PublicizeTeacher() {
    const title = brand.name + ' - PublicizeTeacher Page';
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
        <PapperBlock title="Blank Page" desc="Some text description">
          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439513437_20191117111033.png&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย กิตตินันท์ น้อยมณี
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mr. KITTINAN NOIMANEE
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439513437_20191117111033.png&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย รอน วีสลีย์
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  นั่นนายหรอแฮรี่
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439514350_20200701131720.jpg&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย จักรภพ ใหม่เสน
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mr. Chakkraphop Maisen
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439513463_20160114001958.jpg&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                 นาย ณัฐชาสิทธิ์ ชูเกียรติขจร
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                Mr. Natchasit Chukiatkhajorn
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://scontent.xx.fbcdn.net/v/t1.15752-9/319766255_462134219443281_4772918397619837132_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeEjpWgAgfRrUNs2HUlJBSCTjUd7mpWlS72NR3ualaVLvacVHHhWw2GpWAtnj1BFutc_Za4Px_jhqZ7b6Ei5JW8z&_nc_ohc=qcwVJcjgXywAX_zJyP6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRVSLKNF-wWDAhNHRxj9ld27uNuwCFGBJS8AsFk6VTYyg&oe=647303CE"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย ธนิต เกตุแก้ว
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mr. Thanit Keatkaew
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/none.png&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย ปณต พุกกะพันธุ์
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  -
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24045387274802654_20210820153129.jpg&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย ปรัชญ์ ปิยะวงศ์วิศาล
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mr. Pratch Piyawongwisal
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439513727_20190719121858.jpg&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย ปิยพล ยืนยงสถาวร
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  -
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439512987_20220707144529.jpg&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย พิชิต ทนันชัย
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mr. Phichit Thananchai
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439512869_20190403164444.png&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย ภาณุเดช ทิพย์อักษร
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mr. Panudech Tipauksorn
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439514447_20221212212116.jpg&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย สมนึก สุระธง
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mr. Somnuek Surathong
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439514470_20200623143114.jpg&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย อนุพงศ์ ไพโรจน์
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mr. Anupong Pairote
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439513808_20220902104024.jpg&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  นาย อรรถพล วิเวก
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mr. Atthaphon Wiwek
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439512959_20220707155151.PNG&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  ผศ ขวัญชัย เอื้อวิริยานุกูล
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mr. Kwanchai Eurviriyanukul
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439513003_20220324121118.jpg&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  ผศ ยุพดี หัตถสิน
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Miss. Upady Hatthasin
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', mb: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 180, height: 200 }}
              image="https://hr.rmutl.ac.th/images?src=https://hr.rmutl.ac.th/assets/upload/photo-hr/24002453439512896_20160831221452.jpg&w=185&h=230"
              alt=""
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  ผศ อนันท์ ทับเกิด
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mr. Anan Tubkerd
                </Typography>
              </CardContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1
              }}>
                <Button size="large">
                  <a href='#' style={{ textDecoration: 'none' }}>รายละเอียด</a>
                </Button>
              </Box>
            </Box>
          </Card>
        </PapperBlock>
      </div>
    );
  }
export default PublicizeTeacher;
