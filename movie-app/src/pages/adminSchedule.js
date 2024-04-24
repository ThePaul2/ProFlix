import React, { useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from "../components/NavbarAdmin";
import axios from "axios";

const AddShowtime = () => {
    const { movieTitle } = useParams();
    const navigate = useNavigate();

    const [showtime, setShowtime] = useState({
        movieTitle: movieTitle,
        roomName: "",
        theaterName: "",
        date: "",
        time: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShowtime(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
      try {
          // Check if all fields are complete
          const areFieldsComplete = Object.values(showtime).every(value => value !== "" && value !== null);
          if (!areFieldsComplete) {
              // If not, display a popup error message
              alert("Error: Make sure all fields are complete");
              return;
          }
  
          // Check if a showtime with the same details already exists
          const duplicateResponse = await axios.get(`http://localhost:8080/showtime`, { params: showtime });
  
          // Filter the response to find showtimes with the same details
          const duplicateShowtimes = duplicateResponse.data.filter(entry =>
              entry.movieTitle === showtime.movieTitle &&
              entry.roomName === showtime.roomName &&
              entry.theaterName === showtime.theaterName &&
              entry.date === showtime.date &&
              entry.time === showtime.time
          );
  
          if (duplicateShowtimes.length === 0) {
              // If no duplicate entry is found, proceed with adding the showtime
              const response = await axios.post('http://localhost:8080/showtime/', showtime);
  
              if (response.status >= 200 && response.status < 300) {
                  // Successful submission
                  navigate(`/adminMovies`);
                  console.log('Showtime added successfully');
              } else {
                  throw new Error('Failed to add showtime');
              }
          } else {
              // If a duplicate entry is found, display an error message
              alert("Error: A showtime with the same details already exists");
          }
      } catch (error) {
          console.error('Error occurred during adding showtime:', error.message);
      }
  };
  
  
  

    return (
        <div>
            <Navbar />
            <div className="h-screen pt-16 bg-zinc-900">
                <div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
                    <div className="flex flex-row w-full">
                        <div>
                            <h1>Add Showtime for {movieTitle}</h1>
                            <p>Showtime Info</p>
                        </div>
                        <div className="ml-auto">
                            <Link to={`/adminMovies`} className="mr-2 px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out">Back</Link>
                        </div>
                    </div>
                    <br />
                    <div>
                        <label className="font-semibold">Room Name</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Room Name"
                            name="roomName"
                            value={showtime.roomName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-lg text-black"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Theater Name</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Theater Name"
                            name="theaterName"
                            value={showtime.theaterName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-lg text-black"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Date</label>
                        <br />
                        <input
                            type="date"
                            name="date"
                            value={showtime.date}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-lg text-black"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Time</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Time"
                            name="time"
                            value={showtime.time}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-lg text-black"
                        />
                    </div>

                    <br />
                    <hr />
                    <button onClick={handleSubmit} className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Add Showtime</button>
                </div>
            </div>
        </div>
    );
};

export default AddShowtime;







/*

import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "../components/NavbarAdmin";
import axios from "axios";

const AddShowtime = () => {
    const { movieTitle } = useParams();
    const navigate = useNavigate();

    const [showtime, setShowtime] = useState({
        movieTitle: movieTitle,
        roomName: "",
        theaterName: "",
        date: "",
        time: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShowtime(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            // Check if all fields are complete
            const areFieldsComplete = Object.values(showtime).every(value => value !== "" && value !== null);
            if (!areFieldsComplete) {
                // If not, display a popup error message
                alert("Error: Make sure all fields are complete");
                return;
            }

            const response = await axios.post('http://localhost:8080/showtime/', showtime);

            if (response.status >= 200 && response.status < 300) {
                // Successful submission
                navigate(`/adminMovies`);
                console.log('Showtime added successfully');
            } else {
                throw new Error('Failed to add showtime');
            }
        } catch (error) {
            console.error('Error occurred during adding showtime:', error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="h-screen pt-16 bg-zinc-900">
                <div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
                    <div className="flex flex-row w-full">
                        <div>
                            <h1>Add Showtime for {movieTitle}</h1>
                            <p>Showtime Info</p>
                        </div>
                    </div>
                    <br />
                    <div>
                        <label className="font-semibold">Room Name</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Room Name"
                            name="roomName"
                            value={showtime.roomName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-lg text-black"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Theater Name</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Theater Name"
                            name="theaterName"
                            value={showtime.theaterName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-lg text-black"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Date</label>
                        <br />
                        <input
                            type="date"
                            name="date"
                            value={showtime.date}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-lg text-black"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Time</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Time"
                            name="time"
                            value={showtime.time}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 rounded-lg text-black"
                        />
                    </div>

                    <br />
                    <hr />
                    <button onClick={handleSubmit} className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Add Showtime</button>
                </div>
            </div>
        </div>
    );
};

export default AddShowtime;
*/