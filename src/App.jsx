import './App.css'; 
import React, { Suspense } from 'react';
import { Spinner } from '@heroui/react';
const Home = React.lazy(()=> import('./components/Home'));
function App() {
  return (
    <>
    <Suspense fallback={<div className="flex h-[100vh] items-center justifiy-center"><Spinner color='primary'/><p className='font-mono font-bold'>Please Wait</p></div>}>
    <Home />
    </Suspense>
    </>
  );
}
export default App;