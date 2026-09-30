import { GameList } from './components/GameList'
import { Header } from './components/Header'
import { sampleGames } from './data/sampleGames'

function App() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="font-display text-lg font-semibold">Biblioteca</h2>
          <p className="text-sm text-muted">{sampleGames.length} jogos na estante</p>
        </div>

        <GameList games={sampleGames} />
      </main>
    </>
  )
}

export default App
