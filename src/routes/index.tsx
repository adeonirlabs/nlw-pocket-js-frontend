import { createFileRoute } from '@tanstack/react-router'
import { Plus } from 'lucide-react'

import letsStartIllustration from '~/assets/illustrations/lets-start.svg'
import logo from '~/assets/logo-in.orbit.svg'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="mx-auto flex h-screen max-w-2xl flex-col items-center justify-center gap-8 p-2">
      <img className="h-9" src={logo} alt="in.orbit" />
      <img className="size-80" src={letsStartIllustration} alt="Let's start" />
      <p className="max-w-80 text-center text-zinc-300 leading-relaxed">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <button
        type="button"
        className="flex cursor-pointer items-center gap-2 rounded-lg bg-violet-500 px-4 py-2.5 font-medium text-sm text-violet-50 transition hover:bg-violet-600"
      >
        <Plus className="size-4" /> Cadastrar meta
      </button>
    </div>
  )
}
