import React from "react";

export default function MovieItem({ title, id, year, type, image }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{id}</p>
      <p>{year}</p>
      <p>{type}</p>
      <img alt={title} src={image} />
    </li>
  );
}
