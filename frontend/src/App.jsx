import React from 'react';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path = '/signup'element={<Registration/>}/>
      </Routes>
    </>
  );
}
export default App;