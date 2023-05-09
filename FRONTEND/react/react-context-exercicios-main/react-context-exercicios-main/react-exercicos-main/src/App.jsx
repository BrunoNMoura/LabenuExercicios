
import GlobalState from "./constants/GlobalState";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  
  return (
    <GlobalState>
    <ChakraProvider>
     <Router/>
     </ChakraProvider>
     </GlobalState>
  )
}

