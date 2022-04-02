import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import UkAd from './components/Contact/UkAd';
import UsAd from './components/Contact/UsAd';
import Country from './components/Country/Country';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='us-ad' element={<UsAd></UsAd>}></Route>
          <Route path='uk-ad' element={<UkAd></UkAd>}></Route>
        </Route>
        <Route path='/country' element={<Country></Country>}></Route>
        <Route path='/country-detail/:ccn3' element={<CountryDetail></CountryDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
