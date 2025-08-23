import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../firebaseConfig.js";
import Hero from "./models/Hero.js"
import { useState, useEffect, useMemo } from 'react'
import Card from "./Card.jsx"
import CardsContainer from "./CardsContainer.jsx"
import Helper from "./helper.js"

const STORAGE_KEY = "heroGameData";

function App() {
  const [allHeroes, setAllHeroes] = useState([]);   
  const [heroes, setHeroes] = useState([]);        
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const getFilteredItems = (q, list) => {
    if (!q) return list;
    const s = q.toLowerCase();
    return list.filter(h => h.name.toLowerCase().startsWith(s));
  };
  const filteredItems = getFilteredItems(query, heroes);

  useEffect(() => {
    (async () => {
      const fetched = await Hero.getAllHeroes();
      const sorted = [...fetched].sort((a, b) => a.name.localeCompare(b.name));
      setAllHeroes(sorted);   
      setLoading(false);
    })();
  }, []);

  const heroOfTheDay = useMemo(() => {
    if (allHeroes.length === 0) return null;
    const helper = new Helper();
    const id = helper.fortalezaDateId();
    const idx = helper.dailyIndex(allHeroes.length, id);
    return allHeroes[idx];
  }, [allHeroes]);

  useEffect(() => {
    if (allHeroes.length === 0) return;

    const helper = new Helper();
    const todayId = helper.fortalezaDateId();

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.date === todayId) {
        const used = parsed.selectedHeroes || [];
        used.map(x => x.popIn = "")
        setSelectedHeroes(used);

        const filteredPool = allHeroes.filter(h => !used.some(u => u.name === h.name));
        setHeroes(filteredPool);
      } else {
        setSelectedHeroes([]);
        setHeroes(allHeroes);
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: todayId, selectedHeroes: [] }));
      }
    } else {
      setHeroes(allHeroes);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: todayId, selectedHeroes: [] }));
    }
  }, [allHeroes]);

  useEffect(() => {
    if (allHeroes.length === 0) return;
    const helper = new Helper();
    const todayId = helper.fortalezaDateId();

    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      date: todayId,
      selectedHeroes
    }));
  }, [selectedHeroes, allHeroes]);

  useEffect(() => {
    if (!heroOfTheDay) return;
    const won = selectedHeroes.some(h => h.name === heroOfTheDay.name);
    setGameOver(won);
  }, [selectedHeroes, heroOfTheDay]);

  if (loading || !heroOfTheDay) return <></>;

  const pickHero = (hero) => {
    setHeroes(prev => prev.filter(h => h.name !== hero.name));
    setSelectedHeroes(prev => [...prev, hero]);
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <div className='bg_blur' />

      <div className='wrapper'>
        <h1>Hero Guesser</h1>
        <h3>Guess the hero of the day</h3>

        {!gameOver && (
          <div className='search_bar'>
            <input
              className="textInput"
              value={query}
              placeholder='Type a hero name'
              type="text"
              onChange={e => { setQuery(e.target.value); setOpen(true); }}
              onFocus={() => { if (filteredItems.length) setOpen(true); }}
              onBlur={() => setTimeout(() => setOpen(false), 150)} 
            />
            <span  style={{color:"rgba(255, 255, 255, 0.87)" }}className="search-icon material-symbols-outlined">Search</span>

            {open && filteredItems.length > 0 && (
              <div className="dropdown-select-menu">
                {filteredItems.map((hero, idx) => (
                  <p
                    key={hero.name || idx}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => pickHero(hero)}
                  >
                    {hero.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {gameOver && (
          <h2 style={{ color: "gold", textAlign: "center" }}>
           You found {heroOfTheDay.name}! Come back tomorrow.
          </h2>
        )}

        <CardsContainer
          cards={[...selectedHeroes].reverse()}
          heroOfTheDay={heroOfTheDay}
        />
        <h3 >Enjoy the game!</h3>

      </div>
    </>
  );
}

export default App
