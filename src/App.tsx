import React from 'react';
import ShowDetails from "./components/ShowDetails";

function App() {


  return (
      <Router>
          <div>
              <SearchBar />
              <Autocomplete />
              <Switch>
                  <Route path="/shows/:id" component={ShowDetails} />
              </Switch>
          </div>
      </Router>
  )
}

export default App;
