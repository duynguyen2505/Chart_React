import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProducList from "./pages/productList/ProducList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
    <Router>
        <Topbar/>
        <div className="container">
          <Sidebar />
          <Switch>
            
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/user/:userId" >
              <User/>
            </Route>
            <Route path="/user" >
              <UserList/>
            </Route>
            <Route path="/newUser" >
              <NewUser/>
            </Route> 
            <Route path="/products/:productId" >
              <Product/>
            </Route>
            <Route path="/products" >
              <ProducList />
            </Route>
            <Route path="/newProduct" >
              <NewProduct/>
            </Route>          
          </Switch>
         
        </div>
    </Router>
  );
}

export default App;
