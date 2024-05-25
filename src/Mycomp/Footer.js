import React from "react";

export default function footer() {   //styling for footer
  let footerstyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
  };

  return (
    <footer className="bg-dark text-light py-1 mt-5" style={footerstyle}>
      <p className="text-center my-2">copyright &copy; To-DoWebApp.com</p>
    </footer>
  );
}
