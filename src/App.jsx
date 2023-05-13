import './App.css'
import { CommentsContextProvider } from './context/Comments/CommentsContext'
import { ModalsContextProvider } from './context/Modals/ModalsContext'
import { Comments } from './components/Comments'
import { Input } from './components/Input'
import { NavBar } from './components/NavBar'
import { Reset } from './components/Reset'
import { InactiveLayer } from './components/InactiveLayer'
import { AddUserModal } from './components/AddUserModal'
import { DeleteUserModal } from './components/DeleteUserModal'
import { DeleteCommentModal } from './components/DeleteCommentModal'
import { ResetModal } from './components/ResetModal'




function App() {

  return (
    <div className='flex flex-col gap-5 md:w-3/4'>
      <CommentsContextProvider>
      <ModalsContextProvider>
        <NavBar />
        <Comments />
        <Input />
        <Reset />
        <InactiveLayer />
        <AddUserModal />
        <DeleteCommentModal />
        <DeleteUserModal />
        <ResetModal />
      </ModalsContextProvider>
      </CommentsContextProvider>
    </div>
  )
}

export default App
