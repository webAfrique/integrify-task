import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Card = ({brewery, id}) => {
    
    return(
        <div className='card'>
        <ul>
            <li>{brewery.name}</li>
            <li>{brewery.state}</li>
            <li>{brewery.city}</li>
        </ul>
        <Link className='btn' to={`/details/${id}`}>View Detail</Link>
    </div>
    )
}

const Button = (props) => {
    return(
        <button>{props.children}</button>
    )
}

const Search = ({breweries, setList}) => {
    function findBrewery(event){
        let str = event.target.value.toLowerCase();
    if(/[a-zA-Z]/.test(str) === false) return;
    let strRegex = new RegExp(str, 'gi')
    let result = [];
    breweries.forEach(brewery => {
      if(brewery.city.match(strRegex) !== null){
        result.push(brewery)
      }
    })
      if(result.length !== 0 ) {
          setList(result);
        }
      else { alert('NO MATCH FOUND!')}
    }

    return(
        <input type="text" onInput={findBrewery} placeholder='search city...'></input>
    )
}

const Details = ({breweries}) => {
    const { id } = useParams()
    const brewery = breweries[id]
    //console.log(brewery)
    return(
        <div className='container'>
            <h1>Brewery </h1>
            <h2>finder</h2>
            <div className='details-card'>
                <h3>Details</h3>
                <ul>
                    <li>Name: {brewery.name}</li>
                    <li>Type: {brewery.brewery_type}</li>
                    <li>Street: {brewery.street}</li>
                    <li>Address: {brewery.address}</li>
                    <li>City: {brewery.city}</li>
                    <li>State: {brewery.state}</li>
                    <li>Country province: {brewery.country_province}</li>
                    <li>Postal code: {brewery.postal_code}</li>
                    <Link to="/">Back</Link>
                </ul>
            </div>
        </div>
    )
}

const Home = ({breweries, setList}) => {
  
    return (
      <div className='container'>
        <div className='banner'>
          <h1>Brewery </h1>
          <h2>finder</h2>
          <Search breweries={breweries} setList={setList}/>
        </div>
        <div className='cardsArea'>
          {breweries.length != 0 && breweries.map((item, index)=> {
            //display a maximum of six cards
            if(index > 5) return;
            return <Card key={index} brewery={item} id={index}></Card>
          })}
        </div>
      </div>
    )
  }

export {Card, Button, Search, Details, Home}