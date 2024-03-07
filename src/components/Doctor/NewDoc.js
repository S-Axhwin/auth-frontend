import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import axios from '../auth/Axios';
import { Rating } from '@mui/material';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import doc from "../doctor.png";
import { Link } from 'react-router-dom'
/*
!name?notfound?<>not doctor found with name: {params.name}</>:<>loading</>
*/

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
function FeaturedPost(props) {
  const params =  useParams();
  const { post } = props;
  const [name, setName] = React.useState();
  const [notfound, setNotfound] = React.useState();
  const value = parseInt((Math.random()*10)/2)
  //console.log(value);
  React.useEffect(()=>{
    const fetchApi = async()=>{
        const res = await axios.get(`/doc/${params.name}`);
        if(res.data.username){
            return setName(res.data.username);
        }
        setNotfound(true);
    }
    fetchApi();
  }, [])

  return (
    <Grid item xs={12} md={6}  >
      <CardActionArea component="a" disableripple={"false"}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
                {props.name || name }
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post?.date}
            </Typography>
            <Typography variant="subtitle1" color="primary">
            <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
            </Typography>
            <Typography variant="subtitle1" paragraph>
              <Link to={`/doctors/appointment/${params.name}`} >
              <Button >Book Appointment</Button>
              </Link>
            </Typography>
          </CardContent>
          <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
          image={doc}
          alt={post?.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
/*
FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
*/
export default FeaturedPost;