
import './App.css';
import Form from './pages/form';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route} from 'react-router-dom'
import USerlist from './pages/userslist/userlist';  
function App() {

  return (
    <div className="App">
     <ToastContainer theme='dark'/>
     <Routes>
     <Route exact path='/' element= {<Form/>}/>
     <Route exact path='/userlist' element= {<USerlist/>}/>
     </Routes> 
    </div>
  );
} 

export default App;
