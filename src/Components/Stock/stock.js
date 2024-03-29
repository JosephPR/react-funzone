import React, { Component } from 'react'

import './stock-list.css'
import StockList from './stockList'
// import SearchBox from '../Robot/SearchBox/search-box.js'
import '../Robot/SearchBox/search-box.css'

export default class Stock extends Component {
  constructor() {
    super()
    this.state = {
      favData: [],
      techData: [],
      dailyData: [],
      shortData: [],
      searchField: "",
    }
  }
  // intervalID;
  // intervalID1;
  // intervalID2;
  // intervalID3;

  favoriteStocks = () => {
    let favUrl = `https://api.worldtradingdata.com/api/v1/stock?symbol=BABA,FB,WW,TWLO,AAPL&api_token=acCz10cbIPNeDpHtlNLT5jsG3J0ivtvcBeQmoOp1GoCFCNkkl9GfsXsT0Nds`

    fetch(favUrl)
      .then(response => response.json())
      .then(response => this.setState({
        favData: response.data

      })
    )
  }

  techStocks = () => {

      let techUrl = `https://api.worldtradingdata.com/api/v1/stock?symbol=AMRN,AMD,NVDA,UBER,LYFT&api_token=acCz10cbIPNeDpHtlNLT5jsG3J0ivtvcBeQmoOp1GoCFCNkkl9GfsXsT0Nds`

      fetch(techUrl)
        .then(response => response.json())
        .then(response => this.setState({
          techData: response.data

        })
      )
  }
  dailyStocks = () => {
    let dailyUrl = `https://api.worldtradingdata.com/api/v1/stock?symbol=NFLX,CTRP,MYL,BMRN,MNST&api_token=acCz10cbIPNeDpHtlNLT5jsG3J0ivtvcBeQmoOp1GoCFCNkkl9GfsXsT0Nds`

    fetch(dailyUrl)
      .then(response => response.json())
      .then(response => this.setState({
        dailyData: response.data

      })
    )
  }
  shortStocks = () => {
      let shortUrl = `https://api.worldtradingdata.com/api/v1/stock?symbol=AAL,EA,CI,MMM,DVA&api_token=acCz10cbIPNeDpHtlNLT5jsG3J0ivtvcBeQmoOp1GoCFCNkkl9GfsXsT0Nds`

      fetch(shortUrl)
        .then(response => response.json())
        .then(response => this.setState({
          shortData: response.data

        })
      )
  }


componentDidMount(){
this.favoriteStocks();
this.techStocks();
this.dailyStocks();
this.shortStocks();
// this.intervalID = setInterval(this.favoriteStocks.bind(this), 1000);
// this.intervalID1 = setInterval(this.techStocks.bind(this), 1000);
// this.intervalID2 = setInterval(this.dailyStocks.bind(this), 1000);
// this.intervalID3 = setInterval(this.shortStocks.bind(this), 1000);
}

componentWillUnmount() {
    /*
      stop getData() from continuing to run even
      after unmounting this component
    */
    // clearInterval(this.intervalID);
    // clearInterval(this.intervalID1);
    // clearInterval(this.intervalID2);
    // clearInterval(this.intervalID3);
  }


handleChange = (e) => {
  this.setState({ searchField: e.target.value })
}

   render(){
     const { favData, searchField } = this.state;
     const filteredStocks = favData.filter(stock =>
       stock.symbol.toLowerCase().includes(searchField.toLowerCase())
     )
  return (
    <React.Fragment>

       <h1 className="stock-heading">Stock Market Data</h1>
       <StockList favData={filteredStocks} >
      {
        this.state.favData.map(stock => {
          return (
            <React.Fragment>
              <div>
                <div className="stock-card-container">
                  <h1 className="stocks">  { stock.symbol }</h1>
                  <h2> Price: { stock.price }</h2>
                  <h2> Daily High: { stock.day_high }</h2>
                  <h2> Daily Low: { stock.day_low }</h2>
                  <h2> Previous Close: { stock.close_yesterday}</h2>
                  <h2> 52 Week High:   { stock['52_week_high'] }</h2>
                  <h2> 52 Week Low:  { stock['52_week_low'] }</h2>
                  <hr />
                </div>
              </div>
            </React.Fragment>
          )
        })
      }

      {
        this.state.techData.map(stock => {
          return (
            <React.Fragment>
              <div>
                <div className="stock-card-container">

                  <h1 className="stocks">  { stock.symbol }</h1>
                  <h2> Price: { stock.price }</h2>
                  <h2> Daily High: { stock.day_high }</h2>
                  <h2> Daily Low: { stock.day_low }</h2>
                    <h2> Previous Close: { stock.close_yesterday}</h2>
                  <h2> 52 Week High:   { stock['52_week_high'] }</h2>
                  <h2> 52 Week Low:  { stock['52_week_low'] }</h2>
                  <hr />
                </div>
              </div>
            </React.Fragment>
          )
        })
      }

      {
        this.state.dailyData.map(stock => {
          return (
            <React.Fragment>
              <div>
                <div className="stock-card-container">

                  <h1 className="stocks">  { stock.symbol }</h1>
                  <h2> Price: { stock.price }</h2>
                  <h2> Daily High: { stock.day_high }</h2>
                  <h2> Daily Low: { stock.day_low }</h2>
                    <h2> Previous Close: { stock.close_yesterday}</h2>
                  <h2> 52 Week High:   { stock['52_week_high'] }</h2>
                  <h2> 52 Week Low:  { stock['52_week_low'] }</h2>
                  <hr />
                </div>
              </div>
            </React.Fragment>
          )
        })
      }

      {
        this.state.shortData.map(stock => {
          return (
            <React.Fragment>
              <div>
                <div className="stock-card-container">
                  <h1 className="stocks">  { stock.symbol }</h1>
                  <h2> Price: { stock.price }</h2>
                  <h2> Daily High: { stock.day_high }</h2>
                  <h2> Daily Low: { stock.day_low }</h2>
                    <h2> Previous Close: { stock.close_yesterday}</h2>
                  <h2> 52 Week High:   { stock['52_week_high'] }</h2>
                  <h2> 52 Week Low:  { stock['52_week_low'] }</h2>
                  <hr />
                </div>
              </div>
            </React.Fragment>
          )
        })
      }
      </StockList>
    </React.Fragment>
          )}
}
