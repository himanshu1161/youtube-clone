import React from 'react'
import { Box, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromApi } from '../utilites/fetchFromApi'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm} = useParams();
  useEffect(() =>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  },[searchTerm]);
  return (
    <Box p={2} sx={{overflowY: 'auto',
    height: '90vh', flex:2}}>
      <Typography variant='h4' fontWeight="bold" mb={2}
      sx={{color:'white'}}>
      Search Results For: <span style={{color: '#F31503'}}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos}/>
     </Box>
  )
}

export default SearchFeed
