import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amountReceived: '',
      amountDue: '',
      changeDue: '',
      twentys: 0,
      tens: 0,
      fives: 0,
      dollars: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    }
    this.updateEvent = this.updateEvent.bind(this);
    this.calculate = this.calculate.bind(this);
  }


  updateEvent(event) {
    this.setState({ [event.target.name]: event.target.value });
  }




  calculate() {
    let { amountReceived, amountDue } = this.state;

    let changeDue = (amountReceived - amountDue) * 100;
    let returnChangeDue = (amountReceived - amountDue) ;

    var twentys = Math.floor(changeDue / 2000);
    changeDue %= 2000

    var tens = Math.floor(changeDue / 1000);
    changeDue %= 1000

    var fives = Math.floor(changeDue / 500);
    changeDue %= 500

    var dollars = Math.floor(changeDue / 100);
    changeDue %= 100;

    var quarters = Math.floor(changeDue / 25);
    changeDue %= 25;

    var dimes = Math.floor(changeDue / 10);
    changeDue %= 10;

    var nickels = Math.floor(changeDue / 5);
    changeDue %= 5;

    var pennies = Math.round(changeDue);
console.log(changeDue.toFixed(2),
twentys,
tens,
fives,
dollars,
quarters,
dimes,
nickels,
pennies);
    this.setState({
      
      changeDue: returnChangeDue.toFixed(2),
      twentys,
      tens,
      fives,
      dollars,
      quarters,
      dimes,
      nickels,
      pennies
    });

  };



  render() {
    return (<div>
      <h1>React Change Calculator</h1>

      <input id='received' name='amountReceived' type='number' value={this.state.amountReceived} onChange={this.updateEvent} />
      <input id='due' name='amountDue' type='number' value={this.state.amountDue} onChange={this.updateEvent} />

      <button className='btn btn-primary' onClick={this.calculate}> Calculate </button>


      <div id='output'>
        <div className='alert alert-success'>
        The total change due is ${this.state.changeDue}
        </div>

        <p className='change' id='twentys-output'>{this.state.twentys}</p>
        <p className='change' id='tens-output'>{this.state.tens}</p>
        <p className='change' id='fives-output'>{this.state.fives}</p>
        <p className='change' id='dollars-output'>{this.state.dollars}</p>
        <p className='change' id='quarters-output'>{this.state.quarters}</p>
        <p className='change' id='dimes-output'>{this.state.dimes}</p>
        <p className='change' id='nickels-output'>{this.state.nickels}</p>
        <p className='change' id='pennies-output'>{this.state.pennies}</p>

      </div>



    </div>);

  }









}


export default App;
