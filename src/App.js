import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 150,
      heightInches: 6,
      heightFeet: 5,
    }
    let storedState = window.localStorage.getItem('AppState');
    if (storedState) {
      this.state = JSON.parse(storedState);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    window.localStorage.setItem('AppState', JSON.stringify(this.state));
  }

  bmi() {
    let w = parseFloat(this.state.weight);
    let h = parseFloat(this.state.heightFeet) * 12 + parseFloat(this.state.heightInches);
    return Math.round((w / Math.pow(h, 2)) * 7030) / 10;
  }

  render() {
    return (
      <div className="App">
        <div className="Row">
          <div className="Span1">
            <div className="FormControls">
              <label>Weight: Pounds</label>
              <input type="tel" min="0" step=".1" value={this.state.weight} onChange={(e) => this.setState({weight: e.target.value})} className="Control" />
            </div>
          </div>
        </div>

        <div className="Row">
          <div className="Span1">
            <div className="FormControls">
              <label>Height: Feet</label>
              <input type="tel" min="0" max="8" value={this.state.heightFeet} onChange={(e) => this.setState({heightFeet: e.target.value})} className="Control" />
            </div>
          </div>

          <div className="Span1">
            <div className="FormControls">
              <label>Height: Inches</label>
              <input type="tel" min="0" max="12" value={this.state.heightInches} onChange={(e) => this.setState({heightInches: e.target.value})} className="Control"/>
            </div>
          </div>
        </div>

        <div className="Row">
          <div className="Span1">
            <div className="FormControls">
              <label>BMI</label>
              <input type="number" value={this.bmi()} readOnly className="Control" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
