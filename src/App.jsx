import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material';
import { router } from './Routes.jsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1',
    },
    secondary: {
      main: '#8b5cf6',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App
