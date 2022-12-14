import React from 'react';
import AuthContextProvider from './hooks/useContext/AuthContext';
import ComponentA from './hooks/useReducer/ComponentA';
import ComponentB from './hooks/useReducer/ComponentB';
import ComponentC from './hooks/useReducer/ComponentC';
// import Login from './hooks/useContext/Login';
// import Register from './hooks/useContext/Register';
// import UseReducer from './hooks/useReducer/useReducer';
// import UseReducer1 from './hooks/useReducer/useReducer1';
// import UseReducer2 from './hooks/useReducer/useReducer2';
// import UseReducer3 from './hooks/useReducer/useReducer3';
import './index.css';
// import UseEffect from './hooks/useHooks/UseEffect';
// import UseEffect2 from './hooks/UseEffect2';
// import UseState from './hooks/UseState';
// import UseMemo from './hooks/UseMemo/UseMemo';
// import UseRef from './hooks/UseRef/UseRef';
// import UseRef1 from './hooks/useRef/UseRef1';
// import UseContext from './hooks/useContext/UseContext';
// import User1 from './hooks/useContext/User1';

// function App() {
//   return (
//     <AuthContextProvider>
//       <div className="App">
//         <ComponentA/>
//         <ComponentB/>
//         <ComponentC/>
//       </div>
//     </AuthContextProvider>
//   );
// }


function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </div>
    </AuthContextProvider>
  );
}

export default App;
