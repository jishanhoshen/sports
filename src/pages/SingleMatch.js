import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SingleMatch() {
  const location = useLocation();
  console.log(location);
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    history("/home");
  }

  return <div>SingleMatch{handleSubmit()}</div>;
}
