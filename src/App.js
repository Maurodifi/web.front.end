import './App.css';
import Home from './components/home/home';
import Header from './components/header/header';
import Content from './components/Content/content';
import {ChakraProvider} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Home/>
      <Content/>

     </ChakraProvider> 
  );
}

export default App;
