import { useState } from 'react';
import Login from '../../components/Login';
import WellCome from '../../components/WellCome';

export default function HomePage() {
  const [logado, setLogado]=useState(false)

  return (<>
  {!logado&&
   <Login setLogado={setLogado}   
   />
  }
  {logado&&

    <WellCome/>
  }   
    
  </>
  );
}