import { useLocalStorage } from 'hooks/useLocalStorage';
import { GlobalStyle } from 'GlobalStyle';
import Routes from './routes/routes';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage("isAuthenticated", false);

  return (
    <>
      <GlobalStyle />
      <Routes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </>
  );
}

export default App;
