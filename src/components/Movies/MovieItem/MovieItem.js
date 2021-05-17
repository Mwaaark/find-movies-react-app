import React from "react";
import { Link } from "react-router-dom";
import Card from "../../UI/Card";

export default function MovieItem({ title, id, year, type, image }) {
  return (
    <Card>
      <li>
        <Link to={`/movies/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{id}</p>
        <p>{year}</p>
        <p>{type}</p>
        <img alt={title} src={image} style={{ width: "60px" }} />
      </li>
    </Card>
  );
}
