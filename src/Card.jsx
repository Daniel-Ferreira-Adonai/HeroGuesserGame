import Hero from "./models/Hero.js"
import { useState, useEffect } from 'react'

function Card({hero, heroOfTheDay}) {
  
  return (
    <div className="custom_card">
      <img className="card-image" src={hero.image} alt={hero.name || "Hero"} />

      <div className="background-answers pop-in" style={{background: decideColorString(hero.name, heroOfTheDay.name)}}>
        <h3>{hero.name ?? "not found"}</h3>
      </div>

      <div className="background-answers pop-in" style={{background: decideColorString(hero.gender, heroOfTheDay.gender)}}>
        <h3>{hero.gender ?? "not found"}</h3>
      </div>

      <div className="background-answers pop-in" style={{background: decideColorArray(hero.powers, heroOfTheDay.powers)}}>
        <h3>{hero.powers ? hero.powers.map((x,i) => i === hero.powers.length - 1 ? x : x + ", ") : "not found"}</h3>
      </div>

      <div className="background-answers pop-in" style={{background: decideColorString(hero.species, heroOfTheDay.species)}}>
        
        <h3>{hero.species ?? "not found"}</h3>
      </div>

      <div className="background-answers pop-in" style={{background: decideColor(hero.publisher, heroOfTheDay.publisher)}}>
        <h3 style={{zIndex: 3}}>{hero.publisher ?? "not found"}</h3>
      </div>

      <div className="background-answers pop-in" style={{background: decideColor(hero.date, heroOfTheDay.date)}}>
                <span style={{zIndex: 1, position: "absolute", color: "rgba(0,0,0,0.3)", fontSize: "80px"}} class="material-symbols-outlined">{decideArrow(hero.date,heroOfTheDay.date)}</span>

        <h3>{hero.date ?? "not found"}</h3>
      </div>

      <div className="background-answers pop-in" style={{background: decideColor(hero.height, heroOfTheDay.height)}}>
                <span style={{zIndex: 1, position: "absolute", color: "rgba(0,0,0,0.3)", fontSize: "80px"}} class="material-symbols-outlined">{decideArrow(hero.height,heroOfTheDay.height)}</span>
        <h3>{hero.height ?? "not found"}</h3>
      </div>
    </div>
  );
}
function decideColorString(guess, target) {


  if (guess === target) return "#4caf50"; 
 
  return "#f44336"; 
}
function decideColor(guess, target) {


  if (guess === target) return "#4caf50"; 
  for (let char of guess) {
    if (target.includes(char)) {
      return "#ffc107"; 
    }
  }
  return "#f44336"; 
}
function decideArrow(hero, heroOfTheDay) {
  return hero === heroOfTheDay 
  ? null 
  : heroOfTheDay > hero 
    ? "arrow_upward"
    : "arrow_downward"
}
function decideColorArray(guess, target) {


  if (JSON.stringify(guess) === JSON.stringify(target)) return "#4caf50"; // 
  for (let char of guess) {
    if (guess.some(item => target.includes(item))) {
      return "#ffc107"; 
    }
  }
  return "#f44336"; 
}

export default Card;   