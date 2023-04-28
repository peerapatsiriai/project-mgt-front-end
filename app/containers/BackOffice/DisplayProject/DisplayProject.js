import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock, JongRaiBlock } from 'dan-components';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

function createData(code, nameTH, nameEN, detail) {
  return {
    code,
    nameTH,
    nameEN,
    detail
  };
}

const rows = [
  createData(
    'CE010302',
    'เครื่องสรรเสริญน้องซายัน',
    'GodJongRai',
    <div>
      <a style={{ textDecoration: 'none', color: '#32a852', marginRight: 10 }} href="/app/BackOffice/ProjectDetail/ProjectDetail">รายละเอียด</a>
      <a style={{ textDecoration: 'none', color: '#ccc20c', marginRight: 10 }}>แก้ไข</a>
      <a style={{ textDecoration: 'none', color: 'red', marginRight: 10 }}>ลบ</a>
      <a style={{ textDecoration: 'none', color: '#f93dfc', marginRight: 10 }} href="/app/BackOffice/ProjectDocumentStatus/ProjectDocumentStatus" >อัปโหลดเอกสาร</a>
    </div>
  ),
];

function DisplayProject() {
  const title = brand.name + ' - DisplayProject';
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
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
          p: 1,
        }}>
          <span>
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
              <InputLabel htmlFor="grouped-select">เลือกวิชา</InputLabel>
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
              <InputLabel htmlFor="grouped-select">ปี</InputLabel>
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
              <InputLabel htmlFor="grouped-select">เทอม</InputLabel>
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
              <InputLabel htmlFor="grouped-select">SEC</InputLabel>
              <Select defaultValue="" id="grouped-select" label="Grouping">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
              </Select>
            </FormControl>

            <IconButton color="secondary" aria-label="Search" sx={{ mt: 2.5 }}>
              <SearchIcon />
            </IconButton>
          </span>
        </Box>
      </JongRaiBlock>
      <PapperBlock title="Table" whiteBg icon="ion-ios-menu-outline" desc="ตารางแสดงรายชื่อหัวข้อโครงการ วิชาโปรเจค">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>รหัสโครงงาน</TableCell>
                <TableCell align="right">หัวข้อโครงงาน&nbsp;(ภาษาไทย)</TableCell>
                <TableCell align="right">หัวข้อโครงงาน&nbsp;(ภาษาอังกฤษ)</TableCell>
                <TableCell align="right">รายละเอียด</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.code}
                  </TableCell>
                  <TableCell align="right">{row.nameTH}</TableCell>
                  <TableCell align="right">{row.nameEN}</TableCell>
                  <TableCell align="right">{row.detail}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PapperBlock>
    </div>
  );
}

export default DisplayProject;
