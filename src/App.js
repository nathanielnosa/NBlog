import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Detail from './Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './PageNotFound';

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}
export default App;


