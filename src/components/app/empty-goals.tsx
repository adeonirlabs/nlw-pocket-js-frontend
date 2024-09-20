import { Plus } from 'lucide-react'

import letsStartIllustration from '~/assets/illustrations/lets-start.svg'
import logo from '~/assets/logo-in.orbit.svg'

import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'

export function EmptyGoals() {
  return (
    <div className="mx-auto flex h-screen max-w-2xl flex-col items-center justify-center gap-8 p-2">
      <img className="h-9" src={logo} alt="in.orbit" />
      <img className="size-80" src={letsStartIllustration} alt="Let's start" />
      <p className="max-w-80 text-center text-zinc-300 leading-relaxed">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <Dialog.Trigger asChild>
        <Button>
          <Plus className="size-4" /> Cadastrar meta
        </Button>
      </Dialog.Trigger>
    </div>
  )
}
