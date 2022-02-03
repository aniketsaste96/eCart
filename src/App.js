
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CartPage from './components/Cart';
import { Route, Switch } from "react-router-dom";
import Box from '@mui/material/Box';
function App() {

  return (
    <Box >
      {/* {setting routers} */}
      <Header />
      <Switch >
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </Box>
  );
}

export default App;
