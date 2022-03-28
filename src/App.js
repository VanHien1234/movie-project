
import { Suspense } from 'react'
import './App.css';
import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home'
import Detail from 'pages/Detail/Detail';
import Loading from 'components/Loading/Loading';


export const history = createBrowserHistory();

function App() {
  return (

    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
