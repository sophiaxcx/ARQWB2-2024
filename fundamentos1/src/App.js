
import './App.css';
import Eventos from './components/Eventos';
import MeuComponente from './components/MeuComponente';
import PrimeiroComponente from './components/PrimeiroComponente';
import Soma from './components/Soma';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
   <div className='app'>
    <h1>Fundamentos do react 1</h1>
    <PrimeiroComponente />
    {/* Usando TemplateExpressions */}
    <TemplateExpressions />
    <MeuComponente />
    {/* Reaproveitamento */}
    <Eventos />
    {/* ativar eventos */}
    <Soma />

   </div>
  );
}

export default App;
