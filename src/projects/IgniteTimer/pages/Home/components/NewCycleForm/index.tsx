import {
  FormContainer,
  InputContaier,
  MinutesAmountInput,
  TaskInput,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <InputContaier>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          list="task-suggestions"
          placeholder="Nome do projeto"
          disabled={!!activeCycle}
          {...register('task')}
        />
      </InputContaier>

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
      </datalist>
      <InputContaier>
        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <span>minutos.</span>
      </InputContaier>
    </FormContainer>
  )
}
