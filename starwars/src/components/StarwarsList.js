import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row} from 'reactstrap';
import StarwarsCard from "./StarwarsCard";
export default function MovieList() {
  // NOTE: The value given to useState() must be of the same type as your vale is expected to be
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
            // key={film.id}
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
