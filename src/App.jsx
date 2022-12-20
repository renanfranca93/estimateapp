import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {

  return (
    <BrowserRouter basename='/estimateapp'>
      <Routes />
    </BrowserRouter>
    
  )
}

export default App
