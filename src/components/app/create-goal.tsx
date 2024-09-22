import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateGoalMutation } from '~/api/goals'
import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'
import { FormErrorMessage } from '~/components/ui/form-error-message'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { RadioGroup } from '~/components/ui/radio-group'

const createGoalSchema = z.object({
  title: z.string().min(1, 'O título da atividade é obrigatório'),
  desiredFrequency: z.coerce
    .number({ message: 'Escolha a frequência de prática da atividade' })
    .min(1)
    .max(7),
})

type CreateGoalFormData = z.infer<typeof createGoalSchema>

export function CreateGoal() {
  const { mutateAsync: createGoal } = useCreateGoalMutation()

  const {
    register,
    control,
    reset,
    formState: { errors },
    ...form
  } = useForm<CreateGoalFormData>({
    resolver: zodResolver(createGoalSchema),
  })

  const handleSubmit = form.handleSubmit(async (data) => {
    await createGoal(data)
    reset()
  })

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

        <form
          className="flex flex-1 flex-col justify-between"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade?</Label>
              <Input
                id="title"
                placeholder="Descreva a atividade"
                autoFocus
                {...register('title')}
              />
              {errors.title && (
                <FormErrorMessage>{errors.title.message}</FormErrorMessage>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Quantas vezes na semana?</Label>
              <Controller
                control={control}
                name="desiredFrequency"
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={String(field.value)}
                  >
                    {Array.from({ length: 6 }, (_, index) => (
                      <RadioGroup.Item
                        key={index.toString()}
                        value={(index + 1).toString()}
                      >
                        <RadioGroup.Indicator />
                        <span className="font-medium text-sm text-zinc-300 leading-none">
                          {index + 1} vez{index + 1 > 1 ? 'es' : ''} na semana
                        </span>
                      </RadioGroup.Item>
                    ))}
                    <RadioGroup.Item value="7">
                      <RadioGroup.Indicator />
                      <span className="font-medium text-sm text-zinc-300 leading-none">
                        Todos os dias da semana
                      </span>
                    </RadioGroup.Item>
                  </RadioGroup>
                )}
              />
              {errors.desiredFrequency && (
                <FormErrorMessage>
                  {errors.desiredFrequency.message}
                </FormErrorMessage>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Dialog.Close asChild>
              <Button className="w-full" variant="secondary" type="button">
                Fechar
              </Button>
            </Dialog.Close>
            <Button className="w-full" type="submit">
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </Dialog.Content>
  )
}
