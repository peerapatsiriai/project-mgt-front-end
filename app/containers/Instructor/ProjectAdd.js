import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Divider from '@mui/material/Divider';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function ProjectAdd() {
  const title = brand.name + ' - AddProject';
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
      <PapperBlock title="เพิ่มหัวข้อโครงงาน" desc="***กรุณากรอกข้อมูลให้ครบถ้วน***">

        <div>
          <FormControl sx={{ mx: 5, mb: 3, minWidth: 200 }}>
            <InputLabel htmlFor="grouped-select">เลือกหลักสูตร</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ mx: 5, mb: 3, minWidth: 200 }}>
            <InputLabel htmlFor="grouped-select">เลือกรายวิชา</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ mx: 5, mb: 3, minWidth: 200 }}>
            <InputLabel htmlFor="grouped-select">ปีที่เรียน</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ mx: 5, mb: 3, minWidth: 200 }}>
            <InputLabel htmlFor="grouped-select">เทอม</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ mx: 5, mb: 3, minWidth: 200 }}>
            <InputLabel htmlFor="grouped-select">SEC</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
            </Select>
          </FormControl>
          <TextField id="outlined-basic" label="รหัสโครงการ" variant="outlined" sx={{ mx: 5 }} />
        </div>

        <div>
          <TextField id="outlined-basic" label="ชื่อโครงงานภาษาไทย" variant="outlined" sx={{ mx: 5, minWidth: 340 }} />
          <TextField id="outlined-basic" label="ชื่อโครงงานภาษาอังกฤษ" variant="outlined" sx={{ mx: 5, minWidth: 340 }} />
        </div>

        <div>
          <span>
            <FormControl sx={{ ml: 5, mt: 3, minWidth: 760 }}>
              <InputLabel htmlFor="grouped-select">เลือกอาจารย์ที่ปรึกษา</InputLabel>
              <Select defaultValue="" id="grouped-select" label="Grouping">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>อาจารย์ จงลัย ชิงดาบ</MenuItem>
                <MenuItem value={2}>อาจารย์ จงลัย ชิ้งชั้ง</MenuItem>
              </Select>
            </FormControl>
            <IconButton color="primary" aria-label="add to shopping cart" sx={{ mx: 1, mt: 3 }}>
              <PersonAddAltIcon />
            </IconButton>
          </span>
          <Divider sx={{ mt: 3, mb: 3 }} />

          <span>
            <FormControl sx={{ ml: 5, mt: 3, minWidth: 760 }}>
              <InputLabel htmlFor="grouped-select">เลือกอาจารย์ที่ปรึกษารอง</InputLabel>
              <Select defaultValue="" id="grouped-select" label="Grouping">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>อาจารย์ จงลัย ชิงดาบ</MenuItem>
                <MenuItem value={2}>อาจารย์ จงลัย ชิ้งชั้ง</MenuItem>
              </Select>
            </FormControl>
            <IconButton color="primary" aria-label="add to shopping cart" sx={{ mx: 1, mt: 3 }}>
              <PersonAddAltIcon />
            </IconButton>
          </span>
          <Divider sx={{ mt: 3, mb: 3 }} />

          <span>
            <FormControl sx={{ ml: 5, mt: 3, minWidth: 760 }}>
              <InputLabel htmlFor="grouped-select">เลือกกรรมการ</InputLabel>
              <Select defaultValue="" id="grouped-select" label="Grouping">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>อาจารย์ จงลัย ชิงดาบ</MenuItem>
                <MenuItem value={2}>อาจารย์ จงลัย ชิ้งชั้ง</MenuItem>
              </Select>
            </FormControl>
            <IconButton color="primary" aria-label="add to shopping cart" sx={{ mx: 1, mt: 3 }}>
              <PersonAddAltIcon />
            </IconButton>
          </span>

          <Divider sx={{ mt: 3, mb: 3 }} />
          <span>
            <div>เพิ่มรายชื่อสมาชิก</div>
          </span>
          <span>
            <TextField id="outlined-basic" label="ชื่อ-นามสกุล" variant="outlined" sx={{ ml: 5, mt: 3, minWidth: 360 }} />
            <TextField id="outlined-basic" label="รหัสนักศึกษา" variant="outlined" sx={{ ml: 5, mt: 3, minWidth: 360 }} />
            <IconButton color="primary" aria-label="add to shopping cart" sx={{ mx: 1, mt: 3 }}>
              <PersonAddAltIcon />
            </IconButton>
          </span>
        </div>
      </PapperBlock>
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="contained" endIcon={<SendIcon />} sx={{ mb: 5 }}>
            บัณทึก
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectAdd;
