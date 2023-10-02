import './GlobalTodo.css'
import { Header } from './components/Header'
import style from './App.module.css'
import { Tasks } from './components/Tasks'

export function TodoList() {
  return (
    <div>
      <Header />
      <div className={style.main}>
        <Tasks />
      </div>
    </div>
  )
}
