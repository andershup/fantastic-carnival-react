import Products from "./components/products.component";
import productsList from './products.json'


const App = () => {
  
  return (
    
    <div className='categories-container'>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          
          <h2>Hats</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <Products products={productsList}/>
    </div>
      
  );
};

export default App;
