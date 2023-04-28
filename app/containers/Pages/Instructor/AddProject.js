import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';

function AddProject() {
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
        CONTENT
      </PapperBlock>
    </div>
  );
}

export default AddProject;
