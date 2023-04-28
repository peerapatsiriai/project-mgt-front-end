import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import Upload from './Upload';

function DocumentUpload() {
  const title = brand.name;
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
      <PapperBlock title="อัปโหลดเอกสาร" desc="***กรุณาอัปโหลดไฟล์ DOC หรือ PDF เท่านั้น">
        <Upload/>
      </PapperBlock>
    </div>
  );
}

export default DocumentUpload;
