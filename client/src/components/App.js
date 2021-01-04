
import '../styles/App.css';
import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';


const GET_LINKS = gql `
    query {
      feed {
        _id
        description
        url
      }
    }
`

function App() {

  const getLinksData = useQuery(GET_LINKS);

  const allLinksHandler = () => (
      getLinksData.data ?
        getLinksData.data.feed.map((item, i)=>(
        <div key={i}>
          <h4>{item.url}</h4>
          <p>{item.description}</p>
        </div>
        ))
      :null
  )


  return (
    <div>
      <h3>All Links</h3>
        {allLinksHandler()}
    </div>
  );
}

export default App;
