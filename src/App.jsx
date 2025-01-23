import './App.css'; 
import React, { Suspense } from 'react';
const Home = React.lazy(()=> import('./components/Home'));
function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Home />
    </Suspense>
    </>
  );
}
export default App;