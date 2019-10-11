import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container} from 'reactstrap';
import StarwarsCard from "./StarwarsCard";
export default function MovieList() {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setFilms(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
   <Container className = "contain">
     
      {films.map(film => {
        return (
          <StarwarsCard
            name={film.name}
            gender={film.gender}
            mass={film.mass}
            birth_year={film.birth_year}
          />
        );
      })}
      
  </Container>
  );
}
