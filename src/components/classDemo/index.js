import React from "react";

export default class ClassDemo extends React.Component {
  state = {
    counter: 0,
    data: [],
  };

  increment = (e) => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = (e) => {
    this.setState({ counter: this.state.counter - 1 });
  };

  componentDidMount() {
    fetch(
      `https://6386f493e399d2e473f07b68.mockapi.io/api/user?id=${this.state.counter}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }))
      .catch((err) => console.log(err));
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      fetch(
        `https://6386f493e399d2e473f07b68.mockapi.io/api/user?id=${this.state.counter}`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ data: data }))
        .catch((err) => console.log(err));
    }
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  componentDidCatch() {
    console.log("component error");
  }

  eventHanler = (e, msg) => {
    console.log(e, msg);
  };
  render() {
    return (
      <>
        <div>
          {this.state.counter} {this.props.name}
        </div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <div id="cp" onClick={(e) => this.eventHanler(e, "my message")}>
          click me
        </div>
        <div>
          <ul>
            {this.state.data.map((val) => {
              return (
                <>
                  <li>
                    <b>{val.id} </b>
                    <span>{val.name}</span>
                    <img src={val.avatar} alt={val.name} />
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
