import './App.css'
import { CommentsContextProvider } from './context/Comments/CommentsContext'
import { ModalsContextProvider } from './context/Modals/ModalsContext'
import { Comments } from './components/Comments'
import { Input } from './components/Input'
import { NavBar } from './components/NavBar'
import { InactiveLayer } from './components/InactiveLayer'
import { AddUserModal } from './components/AddUserModal'
import { DeleteUserModal } from './components/DeleteUserModal'

function App() {

  return (
    <div className='flex flex-col gap-5 md:w-3/4'>
      <CommentsContextProvider>
      <ModalsContextProvider>
        <NavBar />
        <Comments />
        <Input />
        <InactiveLayer />
        <AddUserModal />
        <DeleteUserModal />
      </ModalsContextProvider>
      </CommentsContextProvider>
    </div>
  )
}

export default App
