
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './routes/navigation-bar/navigation-bar.component'
import Directory from "./routes/directory/directory.component";
import SignIn from "./components/sign-in/sign-in.component"
import SignUp from "/routes/sign-up/sign-up.component"


const Shop = () => {
  return <h1>I am the shop page</h1>
}
const App = () => {

  return (

    <div className='categories-container'>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <Routes>
            <Route path='/' element={<NavigationBar/> }>
              <Route index element={<Directory />} />\
              <Route path='sign-in' element={<SignIn/>} />
              <Route path='sign-up' element={<SignUp/>} />
              <Route path='shop' element={<Shop/>} />
            </Route>
          </Routes>

        </div>
      </div>

    </div>

  );
};

export default App;
