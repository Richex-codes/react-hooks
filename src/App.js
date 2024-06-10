import "./App.css";
import movie from "./movie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [rating, setRating] = useState(null);
  const [movies, setMovies] = useState(movie);
  const [titles, setTitles] = useState(null)
  const [ratings, setRatings] = useState(null)

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    e.preventDefault();
    setDesc(e.target.value);
  };

  const handleRating = (e) => {
    e.preventDefault();
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    movie.push({
      title: title,
      desc: desc,
      rating: rating,
    });
    setTitle(null);
    setDesc(null);
    setRating(null);
    console.log(movie);
  };

  useEffect(() => {
    ;
    console.log(movie);
  },[]);
//   const filtered = movie.filter((m) => {
//     const matchesTitle = titles ? m.title.toLowerCase().includes(title.toLowerCase()) : true;
//     const matchesRating = ratings ? m.rating === rating : true;
//     return matchesTitle && matchesRating;
// })



    const handleClick = (e) => {
      e.preventDefault()
      const filtered =  movie.filter((m) => m.title === titles && m.rating === ratings)
      setMovies(filtered)
  }

  const handleTitles = (e) => {
  e.preventDefault()
  setTitles(e.target.value)
  }

  const handleRatings = (e) => {
  e.preventDefault()
  setRatings(e.target.value)
  }

  return (
    <div>
      <Filter handleSubmit={handleClick}  handleRating={handleRatings} handleTitle={handleTitles}  ></Filter>
      <MovieList movie={movies} />
      <div className="form">
        <input
          className="input"
          onChange={handleTitle}
          type="text"
          name="title"
          placeholder="title:"
        />
        <input
          className="input"
          onChange={handleDesc}
          type="text"
          name="desc"
          placeholder="desc:"
        />
        <input
          className="input"
          onChange={handleRating}
          type="text"
          name="rating"
          placeholder="rating:"
        />
        <button
          onClick={title ? handleSubmit : ""}
          on
          type="submit"
          style={{ backgroundColor: "lightblue", border: "none" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
