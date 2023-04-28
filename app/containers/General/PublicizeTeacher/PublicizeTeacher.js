import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { makeStyles } from 'tss-react/mui';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import imgTeacher from '../../../api/images/imgTeacher'; // รูปอาจารย์

const useStyles = makeStyles()((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      padding: 25,
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    img: {
        maxWidth: '250px',
        maxHeight: '280px',
        minWidth: '250px',
        minHeight: '280px',
    }
  }));

  function PublicizeTeacher() {
    const title = brand.name + ' - PublicizeTeacher Page';
    const description = brand.desc;
    const {
      classes
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
        <PapperBlock title="Blank Page" desc="Some text description">
          <ImageList className={classes.gridList} cols={4}>
            {imgTeacher.map((tile, index) => (
              <a href={`${tile.author}`} className={classes.root} key={index}>
                <ImageListItem>
                  <img src={tile.img} alt={tile.title} className={classes.img} />
                  <ImageListItemBar
                    title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </ImageListItem>
              </a>
            ))}
          </ImageList>
        </PapperBlock>
      </div>
    );
  }
export default PublicizeTeacher;
