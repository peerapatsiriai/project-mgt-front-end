import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function PreprojectDetail() {
  const title = brand.name + '';
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
      <PapperBlock title="รายละเอียดโปรเจค" desc="" icon="ion-ios-folder-open-outline">
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div>ชื่อโครงงาน(ภาษาไทย)&nbsp;&nbsp;:&nbsp;&nbsp;เครื่องสรรเสริญน้องซายัน</div>
          <div>ชื่อโครงงาน(ภาษาอังกฤษ)&nbsp;&nbsp;:&nbsp;&nbsp; JongRaiTheRealGod</div>
          <br/>
          <div>ปีที่จัดทำ&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; 2099</div>
          <div>เทอมที่จัดทำ&nbsp;&nbsp; :&nbsp;&nbsp; 2</div>
          <div>SEC&nbsp;&nbsp;:&nbsp;&nbsp; 1</div>
          <div>รหัสโครงการ&nbsp;&nbsp; :&nbsp;&nbsp; CE1-65-01</div>
          <div>หลักสูตร&nbsp;&nbsp;:&nbsp;&nbsp; วศบ.</div>
          <br/>
          <div>อาจารย์ที่ปรึกษา&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; จงลำ ไรชิง</div>
          <div>กรรมการ 1&nbsp;&nbsp; :&nbsp;&nbsp; ชิงรัม จงไร</div>
          <div>กรรมการ 2&nbsp;&nbsp; :&nbsp;&nbsp; ทานตะวัน อังสุพัน</div>
          <br/>
          <div>สมาชิก 1&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; จงไร ชิงช้า</div>
          <div>สมาชิก 2&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; อังสุพัน ทานหมูกระทะ</div>
        </Box>
      </PapperBlock>
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="outlined" color="primary">
            <a href="/app/BackOffice/InsertProject/InsertProject" style={{ textDecoration: 'none', }}>แก้ไขข้อมูล</a>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default PreprojectDetail;
