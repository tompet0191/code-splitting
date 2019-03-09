import React, { Component, Suspense} from 'react';
import './App.css';

import Page1 from './components/Page1';
const Page2 = React.lazy(() => import('./components/Page2'));
const Page3 = React.lazy(() => import('./components/Page3'));

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: "page1",
      component: null
    }
  }

  onRouteChange = (route) =>{
    this.setState({route: route})
  }

  render() {
    const {route} = this.state;

    if(route === "page1")
      return <Page1 onRouteChange={this.onRouteChange}/>
    else if (route === "page2"){
      return (
          <Suspense fallback={<div>Loading...</div>}>
            <Page2 onRouteChange={this.onRouteChange}/>
          </Suspense>
      )
    }
    else if (route === "page3"){
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3 onRouteChange={this.onRouteChange}/>
        </Suspense>
      )
    }
  }
}

export default App;
