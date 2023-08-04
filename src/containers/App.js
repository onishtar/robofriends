import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";
import ErrorBountry from "../components/ErrorBoundry";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name
      .toLocaleLowerCase()
      .includes(searchfield.toLocaleLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBountry>
          <CardList robots={filteredRobots} />
        </ErrorBountry>
      </Scroll>
    </div>
  );
};

export default App;
