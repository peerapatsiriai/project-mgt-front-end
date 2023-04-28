import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { JongRaiBlock } from 'dan-components';
import { makeStyles } from 'tss-react/mui';
import Slider from 'react-slick';
import imgData from 'dan-api/images/imgData'; // ใส่ภาพตรงนี้
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';
import Typography from '@mui/material/Typography';
import { Card, CardMedia } from '@mui/material';

const useStyles = makeStyles()(() => ({
  item: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  }
}));

function ProjectDoc() {
  const title = brand.name + ' - Doc Page';
  const description = brand.desc;
  const {
    classes
  } = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
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
      <JongRaiBlock title=" " desc=" ">
        <div className="container">
          <h3 style={{ marginBottom: 20, marginLeft: 10 }}>รูปภาพชิ้นงาน</h3>
          <Slider {...settings}>
            {imgData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <img src={item.img} alt={item.title} />
              </div>
            ))}
          </Slider>
        </div>
        <JongRaiBlock>
          <h1 style={{ }}>รายละเอียดโครงงาน</h1>
          <Typography sx={{ }}>
            <div style={{ width: '100%' }}>
              &emsp;&emsp;Duis tristique metus magna, lobortis aliquam risus euismod sit amet. Suspendisse porttitor velit nisl, feugiat tincidunt nisl mattis ut. Nulla lobortis nunc vitae nisi semper semper.
              Nulla eget lobortis lacus. Aliquam venenatis magna et odio lobortis maximus. Nullam in tortor ligula. Proin maximus risus nunc, eu aliquam nibh tempus a. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </div>
          </Typography>

          <h1 style={{ marginTop: 50 }}>ผู้จัดทำ</h1>
          <Typography sx={{
            display: 'flex',
            height: 250,
            mb: 5,
          }}>
            <Card orientation="horizontal" variant="outlined" sx={{ width: 260, bgcolor: 'background.body' }}>
              <cardoverflow>
                <CardMedia
                  component="img"
                  height="250"
                  image= 'https://scontent.xx.fbcdn.net/v/t1.15752-9/337671380_752496886591638_4337536449962719543_n.jpg?stp=dst-jpg_s206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeH-brfQ8nsNDJcsB2IJcsW9tk8RqhmMRTG2TxGqGYxFMcxQs6DGnEgcP9WJdPzmHwAtRnRvn9ri3iYq-wf1BY55&_nc_ohc=ILsDdGysPSwAX9R9bdU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQlDSmNwfab1NRI0z7F1p4DnUROYXsbZ1XQ5ap2bjV15g&oe=6471B72B'
                  alt="IMG"
                />
              </cardoverflow>
            </Card>
            <Card style={{
              marginLeft: 15,
              width: '65%',
              padding: 10,
              overflowX: 'auto',
            }}>
              <div style={{ width: 250, marginLeft: 20, marginTop: 20 }}>
                <div>ชื่อ-นามสกุล: นาย จงลัย ชิงดาบ</div>
                <div>แผนก: วศบ.คอม</div>
                <div>Email: TheJong@gmail.com</div>
                <div>เบอร์ติดต่อ: 099-999-999</div>
              </div>
            </Card>
          </Typography>

          <Typography sx={{
            display: 'flex',
            height: 250,
            mb: 5,
          }}>
            <Card orientation="horizontal" variant="outlined" sx={{ width: 260, bgcolor: 'background.body' }}>
              <cardoverflow>
                <CardMedia
                  component="img"
                  height="250"
                  image= 'https://scontent.xx.fbcdn.net/v/t1.15752-9/337671380_752496886591638_4337536449962719543_n.jpg?stp=dst-jpg_s206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeH-brfQ8nsNDJcsB2IJcsW9tk8RqhmMRTG2TxGqGYxFMcxQs6DGnEgcP9WJdPzmHwAtRnRvn9ri3iYq-wf1BY55&_nc_ohc=ILsDdGysPSwAX9R9bdU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQlDSmNwfab1NRI0z7F1p4DnUROYXsbZ1XQ5ap2bjV15g&oe=6471B72B'
                  alt="IMG"
                />
              </cardoverflow>
            </Card>
            <Card style={{
              marginLeft: 15,
              width: '65%',
              padding: 10,
              overflowX: 'auto',
            }}>
              <div style={{ width: 250, marginLeft: 20, marginTop: 20 }}>
                <div>ชื่อ-นามสกุล: นาย จงลัย ชิงดาบ</div>
                <div>แผนก: วศบ.คอม</div>
                <div>Email: TheJong@gmail.com</div>
                <div>เบอร์ติดต่อ: 099-999-999</div>
              </div>
            </Card>
          </Typography>

          <h1 style={{ marginTop: 50 }}>เอกสารโครงการ</h1>
          <div>
            <a href='#'>ดาวโหลด</a>
          </div>
        </JongRaiBlock>
      </JongRaiBlock>
    </div>
  );
}

export default ProjectDoc;
