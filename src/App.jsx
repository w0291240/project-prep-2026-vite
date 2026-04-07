
import './App.scss'
import CategoryPage from './components/Pages/CategoryPage';
import ItemPage from './components/Pages/ItemPage';
import StorefrontPage from './components/Pages/StorefrontPage';
import { Routes, Route } from 'react-router-dom';

const App = props => {

  return(
    <div className='App'>
     <Routes>
      <Route path='/' element={<StorefrontPage />} />
      <Route path='itempage' element={<ItemPage />}/>
      <Route path='categorypage' element={<CategoryPage />}/>
     </Routes>
    </div>
  )

}

export default App;
