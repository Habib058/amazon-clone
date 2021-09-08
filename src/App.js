import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './components/StateProvider';
import { auth } from './firebase';
import Payment from './components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51JS6H8EYPmLgrhcdSwPcTkpIPO2UMmGO922zhxA0T3iH76QeqeNOhCgvKqLk1Gr40TqX7Dd58RsXfiFh6umCVI1l00C8nVgk0N')


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        dispatch({
          type: "SET_USER",
          user: user
        })
        // ...
      } else {
        // User is signed out
        // ...
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
