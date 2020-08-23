import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends=['rakib','shakib khan','ariful islam','korim','rayhan','abul khashem','habibul islam']
  
  const  product=[
    {name:'photoshop', price:'U$$8768', btn:'buy now'},
    {name:'illustrator', price:'U$$6809',btn:'buy now'},
    {name:'adove xd', price:'U$$8886',btn:'buy now'},
    {name:'in design', price:'U$$989',btn:'buy now'},
    {name:'visual code', price:'U$$490',btn:'buy now'}
  ]
 
 return(
    <div className='App'>
 <header className ='App-header'>
   <Counter></Counter>
   <Users></Users>
      <ul>
{ 
  friends.map(fnd =><li>{fnd}</li>)
}
{
  product.map(pd => <li>{pd.name}</li>)
}
   </ul>

{
  product.map(pd =><Product product={pd.name} price={pd.price} btn={pd.btn}></Product>) 
}
</header>
  </div>
  
      
  );
}
function Counter() {
  const [count,setCount] = useState(5);
  const handleIncress =()=>{setCount(count+1);
  
  }
  return(
    <div>
      <h1>count: {count}</h1>
      <button onMouseMove={()=>setCount(count-1)}>Decress</button>
<button onMouseMove={()=>setCount(count+1)}>Incress</button>
    </div>
  )
}
function Users() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Daynamic users name :{users.length} person</h3>
      <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
       <h3>Dynamic users @mail</h3>
      {
        users.map(user=> <li>{user.email}</li>) 
      }
      </ul>
     
    </div>
  )
}
 function Product(props) {
   const productStyle={
     width:'200px',
     height:'200px',
     backgroundColor:'gray',
    borderRadius:'10px',
    margin:'10px'
   }
   const {name,price} = props.product;
   console.log(name,price); 
   return (
      <div style={productStyle}>
           <h2> {props.product} </h2>
            <h3>{props.price}</h3>
        <button> {props.btn}  </button>
        
      </div>

   )

 }

export default App;
