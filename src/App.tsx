import React from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import {
  GraphQLResult,
} from '@aws-amplify/api-graphql';
import logo from './logo.svg';
import './App.css';
import awsconfig from './aws-exports';
import { createHello, deleteHello } from "./graphql/mutations";
import { getHello } from './graphql/queries';
import { CreateHelloMutation, GetHelloQuery } from './API';

Amplify.configure(awsconfig);

async function init() {
  const helloModel = { name: "My first hello", description: "Hello world!" };

  /* create a hello */
  // via https://qiita.com/makishy/items/675e0b3efb4624681df1
  const result = await API.graphql(graphqlOperation(createHello, { input: helloModel })) as GraphQLResult;
  const query = result.data as CreateHelloMutation;
  const helloId = query.createHello?.id
  console.log('helloId:', helloId);

  const hello = await API.graphql(graphqlOperation(getHello, { id: helloId })) as GetHelloQuery;
  console.log('hello:', hello);

  /* delete a todo */
  await API.graphql(graphqlOperation(deleteHello, { input: { id: helloId }}));
}
init()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
