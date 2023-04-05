import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Topbar from './scenes/global/Topbar';
import Sidebar1 from './scenes/global/Sidebar';



function App() {
  const [ theme, colorMode ] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       
        <div className="app">
          <main className='content'>
          <Topbar />
            <Sidebar1 />
            
          </main>
        </div>
       
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
