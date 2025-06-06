import {HashRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'

const App = () => {
  return (
    
    <HashRouter>
      <Routes>
        <Route index path='/' element={<Blogs/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/publish' element={<Publish/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
