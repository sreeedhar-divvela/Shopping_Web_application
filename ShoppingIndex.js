import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './ShoppingIndex.css';
import { HomeComponent } from "./HomeComponent";
import { CategoriesComponent } from "./CategoriesComponent";
import { ProductsComponent } from "./ProductsComponent";
import { DetailsComponent } from "./DetailsComponent";
import { RegisterComponent } from "./RegisterComponent";
import { LoginComponent } from "./LoginComponent";
import { LoginErrorComponent } from "./LoginErrorComponent";

export function ShoppingIndex(){
    return(
        <div className="container-fluid">
           <BrowserRouter>
             <header className="d-flex justify-content-between bg-dark text-white p-2">
                <div className="brand">Shopper.</div>
                <div>
                    <span><Link to="/home">Home</Link></span>
                    <span><Link to="/categories">Categories</Link></span>
                    <span><Link to="/register">Register</Link></span>
                    <span><Link to="/login">Login</Link></span>
                </div>
                <div className="nav-icons">
                    <span className="bi bi-search"></span>
                    <Link to="/login"> <span className="bi bi-person"></span></Link>
                    <span className="bi bi-heart"></span>
                    <span className="bi bi-cart4"></span>
                </div>
             </header>
             <section>
                <Routes>
                    <Route path="/home" element={<HomeComponent/>} />
                    <Route path="/categories" element={<CategoriesComponent/>} />
                    <Route path="/products/:category" element={<ProductsComponent />} />
                    <Route path="/details/:id/" element={<DetailsComponent />} />
                    <Route path="/register" element={<RegisterComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/error" element={<LoginErrorComponent />} />
                    <Route path="/" element={<HomeComponent/>} />
                    <Route path="*" element={<h3><code>Page You Requested Not Found</code></h3>} />
                </Routes>
             </section>
             <footer className="row m-1 bg-dark p-2 text-white">
                <div className="col">
                   <h3>Support</h3>
                   <ul className="list-unstyled">
                    <li> Contact Us</li>
                    <li>FAQs</li>
                    <li>Size Guide</li>
                    <li>Shipping & Returns</li>
                   </ul>
                </div>
                <div className="col">
                <h3>Head office</h3>
                   <ul className="list-unstyled">
                    <li>Madhapur</li>
                    <li>Street no 3</li>
                    <li>Hyderabad</li>
                    <li>India</li>
                   </ul>
                </div>
                <div className="col">
                <h3>online shopping</h3>
                   <ul className="list-unstyled">
                    <li> men</li>
                    <li>Women's clothing</li>
                    <li>Men's clothing</li>
                    <li>Kid's clothing</li>
                   </ul>
                </div>
                <div className="col">
                <h3>USefull links</h3>
                   <ul className="list-unstyled">
                    <li> blog</li>
                    <li>Careers</li>
                    <li>Site map</li>
                    <li>corporate information</li>
                   </ul>
                </div>
             </footer>
           </BrowserRouter>
        </div>
    )
}