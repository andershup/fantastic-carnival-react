
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './routes/navigation-bar/navigation-bar.component'
import Directory from "./routes/directory/directory.component";
import SignInSignUp from './routes/sign-up-sign-in/sign-in-sign-up.component';
import Shop from './routes/shop/shop.component';



const App = () => {

  return (

    <div className='categories-container'>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <Routes>
            <Route path='/' element={<NavigationBar/> }>
              <Route index element={<Directory />} />\
              <Route path='sign-in' element={<SignInSignUp/>}/>
              <Route path='shop/*' element={<Shop/>} />
            </Route>
          </Routes>

        </div>
      </div>

    </div>

  );
};

export default App;
