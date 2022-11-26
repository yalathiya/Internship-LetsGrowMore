import React from "react";
// import "./App.css";
class API extends React.Component {
  Constructor;
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="Api">
        <h1> Fetch data from an api in react </h1>{" "}
        {items.map((item) => (
          <ol key={item.id}>
            First_Name: {item.first_name}, Last_Name: {item.last_name},
            User_Email:{item.email}
          </ol>
        ))}
      </div>
    );
  }
}

export default API;
