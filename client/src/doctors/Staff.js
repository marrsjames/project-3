import React from "react";
import { Cardview } from "react-card-with-image";
import "react-card-with-image/dist/index.css";

const Staff = () => {
  const medics = [
    {
      id: 1,
      header: "Dr. Antony Long",
      bio: "Blah, blah blah...",
      image: "",
    },
    {
      id: 2,
      header: "Dr. James Marrs",
      bio: "Blah, blah blah...",
      image: "",
    },
    {
      id: 2,
      header: "Dr. Anne Kerrins",
      bio: "Blah, blah blah...",
      image: "",
    },
  ];
  return <CardView medics={medics} imageHeight="650px" imageWidth="800px" />;
};
export default Staff;
