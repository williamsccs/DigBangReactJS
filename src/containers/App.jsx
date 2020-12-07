import logo from '../logo.svg';
import Titulo from '../components/Titulo'
import '../assets/styles/components/App.css';

import Calculadora from '../components/Calculadora';

function App() {
  return (
    <div className="App">
      <div className="ContainerApp">
        <Titulo />
        <Calculadora/>        
      </div>       
    </div>
  );
}

export default App;