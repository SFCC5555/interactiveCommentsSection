import './App.css'
import { CommentsContextProvider } from './context/Comments/CommentsContext'
import { Comments } from './components/Comments'
import { Input } from './components/Input'

function App() {

  return (
    <div className='flex flex-col gap-5 sm:w-2/3'>
      <CommentsContextProvider>
        <Comments />
        <Input />
      </CommentsContextProvider>
    </div>
  )
}

export default App
