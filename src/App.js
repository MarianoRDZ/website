import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Resumee from './pages/Resumee'

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resumee" component={Resumee} />
      </Switch>
    </Router>
  )
}

export default App;
