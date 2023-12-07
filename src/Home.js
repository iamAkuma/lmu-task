import React from 'react'
import Movies from './Movies';
import Search from './Search';
import Navbar from './Navbar';

const Home = () => {
  // const name = useContext(AppContext);

  return (
    <>
      <Search />
      <Navbar />
      <Movies />
    </>
  )
}

export default Home
