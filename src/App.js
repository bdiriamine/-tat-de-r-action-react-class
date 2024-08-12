import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Mohamed Amine bdiri',
        bio: 'Software Developer ',
        imgSrc: 'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-1/244994698_4608360265892239_1138612411120240375_n.jpg?stp=c0.5.40.40a_cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=o0o8QDgeWYIQ7kNvgF3AM9N&_nc_ht=scontent.ftun16-1.fna&oh=00_AYAJDCoVn3c-6aYYw5GbtMf2er4lCPjCk1lT17c8DdgjUg&oe=66BFFA65',
        work: 'Developer'
      },
      showProfile: false,
      timeSinceMount: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: Math.floor((Date.now() - this.mountTime) / 1000)
      }));
    }, 1000);
    this.mountTime = Date.now();
  }
  componentWillUnmount() {
    clearInterval(this.interval); 
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      showProfile: !prevState.showProfile
    }));
  };
  render() {
    const { person, showProfile, timeSinceMount } = this.state;
    return (
      <div className="App">
        <h1>Profile Display</h1>
        <button onClick={this.toggleProfile}>
          {showProfile ? 'Hide Profile' : 'Show Profile'}
        </button>
        {showProfile && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>work: {person.work}</p>
          </div>
        )}
        <div className="timer">
          <p>component mounted: {timeSinceMount} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;