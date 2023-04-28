import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid } from '@mui/material';

function ProjectDocumentStatus() {
  const title = brand.name;
  const description = brand.desc;
  const useStyles = makeStyles()((theme) => ({
    demo: {
      height: 'auto',
    },
    divider: {
      margin: `${theme.spacing(3)} 0`,
    },
    field: {
      margin: `${theme.spacing(3)} 5px`,
    },
    button: {
      margin: theme.spacing(1),
    },
    inputUpload: {
      display: 'none',
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
  }));
  const {
    classes,
  } = useStyles();

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
      <PapperBlock title="สถานะเอกสาร" desc="">
        <Grid container justifyContent="center" >
          <div style={{ display: 'flex', flexWrap: 'wrap' }} >
            <Card sx={{ width: 260, m: 3, }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, ml: 1 }} color="text.secondary" gutterBottom>
                    บทที่ 1 <TaskAltIcon sx={{ color: 'green' }} />
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        สถานะการส่ง : <span>ส่งแล้วเสร็จ</span>
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        วันที่ส่ง : <span>00 : 00 : 0000</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" className={classes.button}><a href='#' style={{ textDecoration: 'none' }}>อัปโหลดเอกสาร</a></Button>
              </CardActions>
            </Card>

            <Card sx={{ width: 260, m: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, ml: 1 }} color="text.secondary" gutterBottom>
                    บทที่ 2 <TaskAltIcon sx={{ color: 'green' }} />
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        สถานะการส่ง : <span>ส่งแล้วเสร็จ</span>
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        วันที่ส่ง : <span>00 : 00 : 0000</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" className={classes.button}><a href='#' style={{ textDecoration: 'none' }}>อัปโหลดเอกสาร</a></Button>
              </CardActions>
            </Card>

            <Card sx={{ width: 260, m: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, ml: 1 }} color="text.secondary" gutterBottom>
                    บทที่ 3 <TaskAltIcon sx={{ color: 'green' }} />
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        สถานะการส่ง : <span>ส่งแล้วเสร็จ</span>
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        วันที่ส่ง : <span>00 : 00 : 0000</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" className={classes.button}><a href='#' style={{ textDecoration: 'none' }}>อัปโหลดเอกสาร</a></Button>
              </CardActions>
            </Card>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }} >
            <Card sx={{ width: 260, m: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, ml: 1 }} color="text.secondary" gutterBottom>
                    บทที่ 4 <CancelIcon sx={{ color: 'red' }} />
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        สถานะการส่ง : <span>ยังไม่แล้วส่ง</span>
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        วันที่ส่ง : <span>00 : 00 : 0000</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" className={classes.button}><a href='#' style={{ textDecoration: 'none' }}>อัปโหลดเอกสาร</a></Button>
              </CardActions>
            </Card>

            <Card sx={{ width: 260, m: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, ml: 1 }} color="text.secondary" gutterBottom>
                    บทที่ 5 <CancelIcon sx={{ color: 'red' }} />
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        สถานะการส่ง : <span>ยังไม่แล้วส่ง</span>
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        วันที่ส่ง : <span>00 : 00 : 0000</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" className={classes.button}><a href='#' style={{ textDecoration: 'none' }}>อัปโหลดเอกสาร</a></Button>
              </CardActions>
            </Card>

            <Card sx={{ width: 260, m: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, ml: 1 }} color="text.secondary" gutterBottom>
                    บทที่ 6 <CancelIcon sx={{ color: 'red' }} />
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        สถานะการส่ง : <span>ยังไม่แล้วส่ง</span>
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        วันที่ส่ง : <span>00 : 00 : 0000</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" className={classes.button}><a href='#' style={{ textDecoration: 'none' }}>อัปโหลดเอกสาร</a></Button>
              </CardActions>
            </Card>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }} >
            <Card sx={{ width: 260, m: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, ml: 1 }} color="text.secondary" gutterBottom>
                    VDO <CancelIcon sx={{ color: 'red' }} />
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        สถานะการส่ง : <span>ยังไม่แล้วส่ง</span>
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        วันที่ส่ง : <span>00 : 00 : 0000</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" className={classes.button}><a href='#' style={{ textDecoration: 'none' }}>อัปโหลดเอกสาร</a></Button>
              </CardActions>
            </Card>

            <Card sx={{ width: 260, m: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, ml: 1 }} color="text.secondary" gutterBottom>
                    สไลด์ <CancelIcon sx={{ color: 'red' }} />
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        สถานะการส่ง : <span>ยังไม่แล้วส่ง</span>
                </Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>
                        วันที่ส่ง : <span>00 : 00 : 0000</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" className={classes.button}><a href='#' style={{ textDecoration: 'none' }}>อัปโหลดเอกสาร</a></Button>
              </CardActions>
            </Card>
          </div>
        </Grid>
      </PapperBlock>
    </div>
  );
}

export default ProjectDocumentStatus;
