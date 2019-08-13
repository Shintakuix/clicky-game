import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked: [],
    score: 0,
    highestscore:0,
  };

clicks = id => {
  var clicked = this.state.clicked;

  if (clicked.includes(id)) {
    this.setState ({
      friends: this.state.friends.sort(function(a, b) {
      return 0.5 - Math.random();
      }),
      clicked: [],
      score: 0,
    })
    console.log(clicked);
   
  }
  else {
    clicked.push(id)
    console.log(clicked);
    this.setState ({
      friends: this.state.friends.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      score: this.state.score + 1,
      
    })
    if (this.state.score >= this.state.highestscore) {
     console.log("hi")
    this.setState ({
        highestscore:this.state.score + 1
      })
    }

    if (clicked.length === 12) {
      alert("you won");
      this.setState ({
        friends: this.state.friends.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: 0,
      })
    }
  }
}

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highestscore={this.state.highestscore}>Memory Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clicks={this.clicks}
            id={friend.id}
            key={friend.id}
            image={friend.image} 
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
