import React from 'react';

export default class Total extends React.Component {
  constructor(){
    super();

    this.state = {
      total: ''
    };
  }

  totalChange = (event) => {
    this.setState({total: event.target.value});
  }

  render() {
    const {total} = this.state;

    return (
      <div>
          <form>
            <input
              type="text"
              value={total}
              onChange={this.totalChange}/>
            <input
              type="submit"
              value="Total" />
          </form>
      </div>
      );
    }
}
