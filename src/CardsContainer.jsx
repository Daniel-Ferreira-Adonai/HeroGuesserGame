import Card from "./Card";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Hero from "././models/Hero"
function CardsContainer({ cards = [], heroOfTheDay }) {
       console.log("CardsContainer cards:", cards);
 const [won, setWon] = useState(false);

  useEffect(() => {
    if (won) return;                
    if (!heroOfTheDay || !cards?.length) return;

    const hasWinner = cards.some(h => Hero.heroesEqual(h, heroOfTheDay));
    if (hasWinner) {
      setWon(true);
      const burst = () =>
        confetti({ particleCount: 120, spread: 100, ticks: 200, origin: { y: 0.6 } });
      setTimeout(() => {
      burst();
      setTimeout(burst, 300);
      setTimeout(burst, 600);
      },3000)
     
    }
  }, [cards, heroOfTheDay, won]);
  return (
    <>
      <div className="card_titles">
        <div /> {/* image column spacer */}
        <div>Name</div>
        <div>Gender</div>
        <div>Powers</div>
        <div>Species</div>
        <div>Publisher</div>
        <div>Debut</div>
        <div>Height</div>
      </div>

     <div className="cards_grid">
      {cards.map(h => (
        <Card
          key={h.id || h.name}           
          hero={h}
          heroOfTheDay={heroOfTheDay}
        />
      ))}
    </div>
    </>
  );
}

export default CardsContainer;
