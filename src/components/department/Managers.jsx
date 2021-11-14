import React from "react";
// import componentDidMount
class Managers extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: props,
    };
  }
  componentDidMount() {
    this.setState();
  }

  render() {
    return <div>{}</div>;
  }
}

export default Managers;
