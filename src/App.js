import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Chiamaka Nwosu",
        bio: "I'm a student of Full stack web development.",
        imgSrc: "myPic.jpeg",
        profession: "Fashion Designer",
      },
      show: false,
      mountTime: new Date(),
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div className="App">
        <h1>React State Checkpoint</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>
          Time since mount: {Math.floor((new Date() - mountTime) / 1000)}{" "}
          seconds
        </p>
      </div>
    );
  }
}

export default App;
