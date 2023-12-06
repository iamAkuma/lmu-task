// SelectedMovie.js

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

const SelectedMovie = () => {
  const { imdbID } = useParams();
  const [SelectedMovie, setSelectedMovie] = useState(null);
  const [ticketAmount, setTicketAmount] = useState(1);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_API_KEY}`)
        const data = await response.json();
        console.log(imdbID);
        console.log(data);

        if (data.Response === 'True') {
          setSelectedMovie(data);
        }
        else {
          console.error(data.Error);
        }
      } catch (error) {
        console.error("Error fetching movie details: ", error)

      }
    };
    fetchMovieDetails();
  }, [imdbID]);

  if (!SelectedMovie) {
    return <p>Loading...</p>
  }

  // Calculate total price based on ticket amount
  const totalPrice = 410 * ticketAmount;

  const handleTicketChange = (event) => {
    const amount = parseInt(event.target.value, 10);
    setTicketAmount(amount);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    alert(`Checkout for ${totalPrice}`);
  };


  return (
    <>
      <Navbar />
      <div className="movie-card">
        <img src={SelectedMovie.Poster} alt={SelectedMovie.Title} />
        <h2>{SelectedMovie.Title}</h2>
        <div className='event-card'>


          <div className="event-details">
            <div className="icon-text">
              <i className="fas fa-calendar-alt"></i>
              <div className="text-container">
                <h1 id='card'> Date and Time</h1>
                <p>8th August, 2023 8:45 PM</p>
              </div>
            </div>
            <hr />
            <div className="icon-text">
              <i className="fas fa-map-marker-alt"></i>
              <div className="text-container">
                <h1 id='card'>Location</h1>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
            <hr />
            {/* Ticket selection form */}
            <div className="ticket-form">
              <label>
                Select Tickets:
              </label>
              <div className="ticket-amount">
                <button onClick={() => setTicketAmount(Math.max(ticketAmount - 1, 1))}>
                  -
                </button>
                <input
                  type="number"
                  id="ticketAmount"
                  name="ticketAmount"
                  value={ticketAmount}
                  onChange={handleTicketChange}
                  min="1"
                  max="10"
                />
                <button onClick={() => setTicketAmount(ticketAmount + 1)}>+</button>
              </div>
              <p className="ticket-info">
                Rs. {410 * ticketAmount}
              </p>
              <button onClick={handleCheckout}>Check out for Rs.{totalPrice}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default SelectedMovie;
