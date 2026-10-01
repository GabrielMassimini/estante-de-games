import { Button } from './ui/Button'

export function Header() {
  return (
    <header className="border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" className="size-10" />
          <div>
            <h1 className="font-display text-xl font-bold tracking-wide sm:text-2xl">
              Minha Estante de <span className="text-accent-2">Games</span>
            </h1>
            <p className="text-sm text-muted">Sua coleção, do backlog ao zerado.</p>
          </div>
        </div>

        {/* Fica desabilitado até a Etapa 2, quando o formulário for criado */}
        <Button disabled title="Disponível na próxima etapa">
          <span aria-hidden="true">+</span> Adicionar jogo
        </Button>
      </div>
    </header>
  )
}
