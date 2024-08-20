import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const Heading = () => {
  const [search, setSearch] = useState("");
  const OnSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="heading">
      <img
        style={{ width: "290px", height: "96px" }}
        src="https://www.bits-pilani.ac.in/wp-content/uploads/pilani-hyderabad-1.png"
      />
      <Typography variant="h3">Acads Blog</Typography>
      <form className="search">
        <input
          type="text"
          className="Enter"
          placeholder="Enter your search"
          value={search}
          onChange={OnSearch}
        ></input>
        <button onClick={console.log(search)} style={{backgroundColor:"transparent",border:"0px"}}>
        <SearchIcon />
        </button>
      </form>
    </div>
  );
};
const Body = () => {
  return (
    <>
      <div className="body">
        <img src="https://www.bits-pilani.ac.in/wp-content/uploads/Home-image-Library.jpeg" />
        <Typography paragraph style={{ paddingTop: "30px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        <div className="thoughts">
          <Typography paragraph style={{ paddingBottom: "5px" }}>
            Tell us about your thoughts !!!
          </Typography>
          <br />
          <TextField
            fullWidth
            label="Write Here"
            id="fullWidth"
            style={{ paddingBottom: "30px" }}
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Post
          </Button>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="root">
      <Heading />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
