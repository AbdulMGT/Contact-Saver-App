import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Content from './components/Content';
import Contacts from './Routes-pages/Contacts';
import New from './Routes-pages/New';
import NoPage from './Routes-pages/NoPage';

function App() {

  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Content />}>
                  <Route index element={<Contacts />} />
                  <Route path="New" element={<New />} />
                  <Route path="Contacts" element={<Contacts />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
