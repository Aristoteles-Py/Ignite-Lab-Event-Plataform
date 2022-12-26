import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom";
import { client } from './lib/apollo'
import Rotas from "./Rotas";


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Rotas/>
        </BrowserRouter>
      </ApolloProvider>
    </>
  )
}

export default App
