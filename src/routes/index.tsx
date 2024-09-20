import { createFileRoute } from '@tanstack/react-router'
import { Plus, X } from 'lucide-react'

import letsStartIllustration from '~/assets/illustrations/lets-start.svg'
import logo from '~/assets/logo-in.orbit.svg'
import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { RadioGroup } from '~/components/ui/radio-group'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Dialog>
      <div className="mx-auto flex h-screen max-w-2xl flex-col items-center justify-center gap-8 p-2">
        <img className="h-9" src={logo} alt="in.orbit" />
        <img
          className="size-80"
          src={letsStartIllustration}
          alt="Let's start"
        />
        <p className="max-w-80 text-center text-zinc-300 leading-relaxed">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>
        <Dialog.Trigger asChild>
          <Button>
            <Plus className="size-4" /> Cadastrar meta
          </Button>
        </Dialog.Trigger>
      </div>

      <Dialog.Content>
        <div className="flex h-full flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Dialog.Title>Cadastrar meta</Dialog.Title>
              <Dialog.Close asChild>
                <Button size="icon" variant="secondary">
                  <X className="size-4 text-zinc-500" />
                </Button>
              </Dialog.Close>
            </div>
            <Dialog.Description>
              Adicione atividades que te fazem bem e que você quer continuar
              praticando toda semana.
            </Dialog.Description>
          </div>

          <form className="flex flex-1 flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Qual a atividade?</Label>
                <Input
                  id="title"
                  placeholder="Descreva a atividade"
                  autoFocus
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Quantas vezes na semana?</Label>
                <RadioGroup>
                  {Array.from({ length: 6 }, (_, index) => (
                    <RadioGroup.Item
                      key={index.toString()}
                      value={(index + 1).toString()}
                    >
                      <RadioGroup.Indicator />
                      <span className="font-medium text-sm text-zinc-300 leading-none">
                        {index + 1}x na semana
                      </span>
                    </RadioGroup.Item>
                  ))}
                  <RadioGroup.Item value="all">
                    <RadioGroup.Indicator />
                    <span className="font-medium text-sm text-zinc-300 leading-none">
                      Todos os dias da semana
                    </span>
                  </RadioGroup.Item>
                </RadioGroup>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Dialog.Close asChild>
                <Button className="w-full" variant="secondary" type="button">
                  Fechar
                </Button>
              </Dialog.Close>
              <Button className="w-full" type="button">
                Cadastrar
              </Button>
            </div>
          </form>
        </div>
      </Dialog.Content>
    </Dialog>
  )
}
