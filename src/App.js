import React from 'react';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';
import { Route, Switch } from 'react-router';
import Footer from './Footer'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>

  );
}

export default App;



{/* below code is commented for memory purpose */ }
{/* <div className="container">
        <h1 className="text-center">Ashish</h1>
        <div className="text-center">
          <div class="card" style={{ width: '25rem' }}>
            <img src="https://images.unsplash.com/photo-1531279550271-23c2a77a765c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJwdW5rJTIwY2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="CyberPunk Car" />
            <div class="card-body">
              <h5 class="card-title">CyberPunk Car</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://unsplash.com/" class="btn btn-outline-success">Go somewhere</a>
            </div>
          </div>
        </div>
      </div> */}