import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";
const MovieCard = props => {
  return (
    <Col className = "column" xs="6" sm="4">
      <Card>
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardText>Gender: {props.gender}</CardText>
          <CardSubtitle>Birth Year: {props.birth_year}</CardSubtitle>
          <CardSubtitle>Mass: >{props.mass}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MovieCard;