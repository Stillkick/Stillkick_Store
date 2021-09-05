import './App.css';
import Smart from './pages/Smart';
import Computers from './pages/Computers';
import Appliances from './pages/Appliances';
import Main from './pages/Main';
import DeviceDetails from './pages/DeviceDetails';
import Header from './Header and Footer/Header';
import Footer from './Header and Footer/Footer';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import { UserProvider } from './components/User';
import Catalog from './pages/Catalog';
import Korzina from './pages/Korzina';
import {useState} from 'react'

function App() {
  const [night, setNight] = useState(false);
  return (
    <UserProvider>
    <BrowserRouter>
    <Header night = {night} setNight = {setNight} />
    <main className={night ? "dark-mode" : "day-mode"}>
      <Switch>
        <Route exact path ="/">
          <Main />
        </Route>
        <Route path ="/Smartphone">
        <Smart />
        </Route>
        <Route path="/Computers">
        <Computers />
        </Route>
        <Route path="/Appliances">
        <Appliances />
        </Route>
        <Route path="/catalog">
        <Catalog />
        </Route> 
        <Route path="/korzina">
        <Korzina />
        </Route> 
        <Route path="/device/:id">
          <DeviceDetails />
        </Route>
      </Switch>
      </main>
      <Footer night = {night} setNight = {setNight}  />
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
