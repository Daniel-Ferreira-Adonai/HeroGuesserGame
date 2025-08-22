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
  const [allHeroes, setAllHeroes] = useState([]);   // 👈 lista estável
  const [heroes, setHeroes] = useState([]);         // 👈 pool mutável (dropdown)
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  // Filtro do dropdown
  const getFilteredItems = (q, list) => {
    if (!q) return list;
    const s = q.toLowerCase();
    return list.filter(h => h.name.toLowerCase().startsWith(s));
  };
  const filteredItems = getFilteredItems(query, heroes);

  // 1) Fetch + preparar lista estável (ordenada p/ índice diário ser determinístico)
  useEffect(() => {
    (async () => {
      const fetched = await Hero.getAllHeroes();
      const sorted = [...fetched].sort((a, b) => a.name.localeCompare(b.name));
      setAllHeroes(sorted);   // nunca mutar essa
      setLoading(false);
    })();
  }, []);

  // 2) Hero of the day: compute APENAS de allHeroes (estável)
  const heroOfTheDay = useMemo(() => {
    if (allHeroes.length === 0) return null;
    const helper = new Helper();
    const id = helper.fortalezaDateId();
    const idx = helper.dailyIndex(allHeroes.length, id);
    return allHeroes[idx];
  }, [allHeroes]);

  // 3) Restaurar do storage + aplicar reset diário + montar pool heroes
  useEffect(() => {
    if (allHeroes.length === 0) return;

    const helper = new Helper();
    const todayId = helper.fortalezaDateId();

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.date === todayId) {
        const used = parsed.selectedHeroes || [];
        setSelectedHeroes(used);

        // remove usados do pool (com base na lista estável)
        const filteredPool = allHeroes.filter(h => !used.some(u => u.name === h.name));
        setHeroes(filteredPool);
      } else {
        // novo dia → limpar
        setSelectedHeroes([]);
        setHeroes(allHeroes);
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: todayId, selectedHeroes: [] }));
      }
    } else {
      // primeira vez
      setHeroes(allHeroes);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: todayId, selectedHeroes: [] }));
    }
  }, [allHeroes]);

  // 4) Salvar no storage sempre que selectedHeroes mudar
  useEffect(() => {
    if (allHeroes.length === 0) return;
    const helper = new Helper();
    const todayId = helper.fortalezaDateId();

    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      date: todayId,
      selectedHeroes
    }));
  }, [selectedHeroes, allHeroes]);

  // 5) Game over quando acertar
  useEffect(() => {
    if (!heroOfTheDay) return;
    const won = selectedHeroes.some(h => h.name === heroOfTheDay.name);
    setGameOver(won);
  }, [selectedHeroes, heroOfTheDay]);

  if (loading || !heroOfTheDay) return <></>;

  // Seleção de um herói no dropdown
  const pickHero = (hero) => {
    // remover do pool
    setHeroes(prev => prev.filter(h => h.name !== hero.name));
    // adicionar ao histórico
    setSelectedHeroes(prev => [...prev, hero]);
    // fechar dropdown
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <div className='bg_blur' />

      <div className='wrapper'>
        <h1>Hero Guesser</h1>
        <h3>Guess the hero of the day</h3>

        {/* Esconde a busca quando já ganhou */}
        {!gameOver && (
          <div className='search_bar'>
            <input
              className="textInput"
              value={query}
              type="text"
              onChange={e => { setQuery(e.target.value); setOpen(true); }}
              onFocus={() => { if (filteredItems.length) setOpen(true); }}
              onBlur={() => setTimeout(() => setOpen(false), 150)} // deixa clicar
            />
            <span className="search-icon material-symbols-outlined">Search</span>

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
            🎉 You found {heroOfTheDay.name}! Come back tomorrow.
          </h2>
        )}

        <CardsContainer
          cards={[...selectedHeroes].reverse()}
          heroOfTheDay={heroOfTheDay}
        />

        <h3>Yesterday was #1</h3>
      </div>
    </>
  );
}

export default App
