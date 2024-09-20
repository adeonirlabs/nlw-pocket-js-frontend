import { X } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { RadioGroup } from '~/components/ui/radio-group'

export function CreateGoal() {
  return (
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
              <Input id="title" placeholder="Descreva a atividade" autoFocus />
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
  )
}
