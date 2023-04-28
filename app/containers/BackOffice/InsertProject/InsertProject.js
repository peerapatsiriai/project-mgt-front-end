import React, { useState, useEffect } from 'react';
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
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Axios from 'axios';

function InsertProject() {
  const [curriculums, setCurriculum] = useState([]);
  const [subjects, setSubject] = useState([]);
  const [years, setYears] = useState([]);
  const [sections, setSections] = useState([]);
  const [adviser, setAdviser] = useState(['-']);
  const [subadviser, setSubAdviser] = useState(['-']);
  const [committee, setCommittee] = useState(['-']);
  const [studen, setStuden] = useState(['-']);
  const [preprojectData, setPreprojectData] = useState({
    curriculum_id: '',
    subject_id: '',
    year: '',
    section_id: '',
    project_name_th: '',
    project_name_eng: '',
    project_code: '',
    project_status: 'W',
    project_type: '',
    created_by: '60',
  });
  const fetchDataCurriculums = async () => {
    const result = await Axios.get(
      'http://localhost:3200/api/project-mgt/curriculums'
    );
    setCurriculum(result.data.data);
  };
  const fetchDataSubject = async (subjectID) => {
    const subjectList = await Axios.get(
      `http://localhost:3200/api/project-mgt/curriculums/subjects?curriculum_id=${subjectID}`
    );
    setSubject(subjectList.data.data);
  };
  const fetchYearInSubject = async (year) => {
    const yearList = await Axios.get(
      `http://localhost:3200/api/project-mgt/curriculums/subjects/year?subject_id=${year}`
    );
    setYears(yearList.data.data);
  };
  const fetchSections = async (subjectID, year) => {
    const sectionList = await Axios.get(
      `http://localhost:3200/api/project-mgt/curriculums/subjects/year/sections?subject_id=${subjectID}&year=${year}`
    );
    setSections(sectionList.data.data);
  };

  const handlePreprojectDataFromTextBox = (event) => {
    const { name, value } = event.target;
    setPreprojectData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(preprojectData);
  };

  const handlePreprojectData = (name, value) => {
    setPreprojectData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(preprojectData);
  };

  const handleCurriculum = async (event) => {
    if (event.target.value !== '-') {
      fetchDataSubject(event.target.value);
      handlePreprojectData('curriculum_id', event.target.value);
    }
    setSubject([]);
    setYears([]);
    setSections([]);
  };
  const handleSubject = async (event) => {
    setYears([]);
    setSections([]);
    if (event.target.value !== '-') {
      fetchYearInSubject(event.target.value);
      handlePreprojectData('subject_id', event.target.value);
    }
  };
  const handleYear = (event) => {
    setSections([]);
    if (event.target.value !== '-') {
      fetchSections(preprojectData.subject_id, event.target.value);
      handlePreprojectData('year', event.target.value);
    }
  };
  const handleSection = async (event) => {
    if (event.target.value !== '-') {
      handlePreprojectData('section_id', event.target.value);
    }
  };
  const addAdviser = () => {
    setAdviser(adviser.concat('-'));
  };
  const addSubAdviser = () => {
    setSubAdviser(subadviser.concat('-'));
  };
  const addCommittee = () => {
    setCommittee(committee.concat('-'));
  };
  const addStuden = () => {
    setStuden(studen.concat('-'));
  };
  const handleAdviser = (e, index) => {
    console.log(index);
    adviser[index] = e.target.value;
    console.log('Adviser : ' + adviser);
  };
  const handleSubAdviser = (e, index) => {
    console.log(index);
    subadviser[index] = e.target.value;
    console.log('SubAdviser : ' + subadviser);
  };
  const handleCommittee = (e, index) => {
    console.log(index);
    committee[index] = e.target.value;
    console.log('Committee : ' + committee);
  };
  const handleStuden = (e, index) => {
    console.log(index);
    studen[index] = e.target.value;
    console.log('Studen : ' + studen);
  };
  useEffect(() => {
    fetchDataCurriculums();
  }, []);
  const title = brand.name + ' - AddProject';
  const description = brand.desc;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          property='og:title'
          content={title}
        />
        <meta
          property='og:description'
          content={description}
        />
        <meta
          property='twitter:title'
          content={title}
        />
        <meta
          property='twitter:description'
          content={description}
        />
      </Helmet>
      <PapperBlock
        title='เพิ่มหัวข้อโครงงาน'
        desc='***กรุณากรอกข้อมูลให้ครบถ้วน***'>
        <div>
          <FormControl sx={{ mx: 5, mb: 3, minWidth: 200 }}>
            <InputLabel htmlFor='grouped-select'>เลือกหลักสูตร</InputLabel>
            <Select
              defaultValue=''
              id='grouped-select'
              label='Grouping'
              onChange={handleCurriculum}>
              <MenuItem value='-'>
                <em>-</em>
              </MenuItem>
              {curriculums.map((row, index) => (
                <MenuItem
                  key={index}
                  value={row.curriculum_id}>
                  {row.curriculum_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ mx: 5, mb: 3, minWidth: 200 }}>
            <InputLabel htmlFor='grouped-select'>เลือกรายวิชา</InputLabel>
            <Select
              defaultValue=''
              id='grouped-select'
              label='Grouping'
              onChange={handleSubject}>
              <MenuItem value='-'>
                <em>-</em>
              </MenuItem>
              {subjects.map((row, index) => (
                <MenuItem
                  key={index}
                  value={row.subject_id}>
                  {row.subject_name_th}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ mx: 5, mb: 3, minWidth: 200 }}>
            <InputLabel htmlFor='grouped-select'>ปีที่เรียน</InputLabel>
            <Select
              defaultValue=''
              id='grouped-select'
              label='Grouping'
              onChange={handleYear}>
              <MenuItem value='-'>
                <em>-</em>
              </MenuItem>
              {years.map((row, index) => (
                <MenuItem
                  key={index}
                  value={row.sem_year}>
                  {row.sem_year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ mx: 5, mb: 3, minWidth: 200 }}>
            <InputLabel htmlFor='grouped-select'>ประเภทโครงงาน</InputLabel>
            <Select
              defaultValue=''
              id='grouped-select'
              label='Grouping'
              onChange={handlePreprojectDataFromTextBox}
              name='project_type'>
              <MenuItem value='-'>
                <em>-</em>
              </MenuItem>
              <MenuItem value={'H'}>HerdWare</MenuItem>
              <MenuItem value={'S'}>S</MenuItem>
              <MenuItem value={'HB'}>HB</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ mx: 5, mb: 3, minWidth: 200 }}>
            <InputLabel htmlFor='grouped-select'>SEC</InputLabel>
            <Select
              onChange={handleSection}
              defaultValue=''
              id='grouped-select'
              label='Grouping'>
              <MenuItem value='-'>
                <em>-</em>
              </MenuItem>
              {sections.map((row, index) => (
                <MenuItem
                  key={index}
                  value={row.section_id}>
                  {row.semester_order}/{row.sem_year} {row.section_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id='outlined-basic'
            label='รหัสโครงการ'
            variant='outlined'
            sx={{ mx: 5, mb: 3 }}
            name='project_code'
            onChange={handlePreprojectDataFromTextBox}
          />
        </div>

        <div sx={{ mx: 5 }}>
          <TextField
            id='outlined-basic'
            label='ชื่อโครงงานภาษาไทย'
            variant='outlined'
            sx={{ mx: 5, width: '32.5%' }}
            name='project_name_th'
            onChange={handlePreprojectDataFromTextBox}
          />
          <TextField
            id='outlined-basic'
            label='ชื่อโครงงานภาษาอังกฤษ'
            variant='outlined'
            sx={{ width: '32.5%' }}
            name='project_name_eng'
            onChange={handlePreprojectDataFromTextBox}
          />
        </div>

        <div>
          <span>
            {adviser.map((row, index) => (
              <>
                <FormControl sx={{ ml: 5, mt: 3, width: '68.5%' }}>
                  <InputLabel htmlFor='grouped-select'>
                    เลือกอาจารย์ที่ปรึกษาหลัก
                  </InputLabel>
                  <Select
                    onChange={(e) => handleAdviser(e, index)}
                    defaultValue=''
                    id='grouped-select'
                    label='Grouping'>
                    <MenuItem value={row}>
                      <em>-</em>
                    </MenuItem>
                    <MenuItem value={1}>อาจารย์ จงลัย ชิงดาบ</MenuItem>
                    <MenuItem value={2}>อาจารย์ จงลัย ชิ้งชั้ง</MenuItem>
                  </Select>
                </FormControl>
              </>
            ))}
            <IconButton
              onClick={addAdviser}
              color='primary'
              aria-label='add to shopping cart'
              sx={{ mx: 1, mt: 3 }}>
              <PersonAddAltIcon />
            </IconButton>
          </span>
          <Divider sx={{ mt: 3, mb: 3 }} />
          <span>
            {subadviser.map((row, index) => (
              <>
                <FormControl sx={{ ml: 5, mt: 3, width: '68.5%' }}>
                  <InputLabel htmlFor='grouped-select'>
                    เลือกอาจารย์ที่ปรึกษารอง
                  </InputLabel>
                  <Select
                    onChange={(e) => handleSubAdviser(e, index)}
                    defaultValue=''
                    id='grouped-select'
                    label='Grouping'>
                    <MenuItem value={row}>
                      <em>-</em>
                    </MenuItem>
                    <MenuItem value={1}>อาจารย์ จงลัย ชิงดาบ</MenuItem>
                    <MenuItem value={2}>อาจารย์ จงลัย ชิ้งชั้ง</MenuItem>
                  </Select>
                </FormControl>
              </>
            ))}
            <IconButton
              onClick={addSubAdviser}
              color='primary'
              aria-label='add to shopping cart'
              sx={{ mx: 1, mt: 3 }}>
              <PersonAddAltIcon />
            </IconButton>
          </span>
          <Divider sx={{ mt: 3, mb: 3 }} />

          <span>
            {committee.map((row, index) => (
              <>
                <FormControl sx={{ ml: 5, mt: 3, width: '68.5%' }}>
                  <InputLabel htmlFor='grouped-select'>เลือกกรรมการ</InputLabel>
                  <Select
                    onChange={(e) => handleCommittee(e, index)}
                    defaultValue=''
                    id='grouped-select'
                    label='Grouping'>
                    <MenuItem value={row}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>อาจารย์ จงลัย ชิงดาบ</MenuItem>
                    <MenuItem value={2}>อาจารย์ จงลัย ชิ้งชั้ง</MenuItem>
                  </Select>
                </FormControl>
              </>
            ))}
            <IconButton
              onClick={addCommittee}
              color='primary'
              aria-label='add to shopping cart'
              sx={{ mx: 1, mt: 3 }}>
              <PersonAddAltIcon />
            </IconButton>
          </span>

          <Divider sx={{ mt: 3, mb: 3 }} />
          <span>
            <div>เพิ่มรายชื่อสมาชิก</div>
          </span>
          <span>
            {studen.map((row, index) => (
              <>
                <TextField
                  onChange={(e) => handleStuden(e, index)}
                  id='outlined-basic'
                  label='ชื่อ-นามสกุล'
                  variant='outlined'
                  sx={{ ml: 5, mt: 3, width: '32.5%' }}
                />
                <TextField
                  id='outlined-basic'
                  label='รหัสนักศึกษา'
                  variant='outlined'
                  sx={{ ml: 5, mt: 3, width: '32.5%' }}
                />
              </>
            ))}
            <IconButton
              onClick={addStuden}
              color='primary'
              aria-label='add to shopping cart'
              sx={{ mx: 1, mt: 3 }}>
              <PersonAddAltIcon />
            </IconButton>
          </span>
        </div>
      </PapperBlock>
      <Grid
        container
        justifyContent='center'
        sx={{ mb: 2 }}>
        <Grid item>
          <Button
            variant='outlined'
            color='primary'>
            <a href='/app/BackOffice/DisplayPreproject/DisplayPreproject'>
              บัณทึกข้อมูลของจง
            </a>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default InsertProject;
