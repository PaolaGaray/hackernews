
import '../styles/App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import { gql, useQuery } from '@apollo/client';

import Header from './Header';
import CreateLink from './CreateLink';


// const GET_LINKS = gql `
//     query {
//       feed {
//         _id
//         description
//         url
//       }
//     }
// `

function App() {

  // const getLinksData = useQuery(GET_LINKS);

  // const allLinksHandler = () => (
  //     getLinksData.data ?
  //       getLinksData.data.feed.map((item, i)=>(
  //       <div key={i}>
  //         <h4>{item.url}</h4>
  //         <p>{item.description}</p>
  //       </div>
  //       ))
  //     :null
  // )


  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route
            exact
            path="/create"
            component={CreateLink}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
