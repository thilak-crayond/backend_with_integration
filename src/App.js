import { Box } from '@mui/material';
import './App.css';
import SignIn from './pages/signIn';
import Home from './pages/home';

function App() {
  return (
    <Box sx={{
      maxWidth: {
        sm: 425,
      },
      mx: {
        sm: 'auto',
      },
    }}>
      {/* <SignIn /> */}
      <Home />
    </Box>
  );
}

export default App;
