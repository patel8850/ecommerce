import Navbar from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"
import { ShopCategory } from "./pages/ShopCategory"
import LoginSign from "./pages/LoginSignUp"
import Shop from "./pages/Shop"
import { Product } from "./pages/Product"
import { Cart } from "./pages/Cart"
import { Footer } from "./Components/Footer"
import menBanner from './assets/Images/MenBanner.webp'
import womenposter from './assets/Images/womenposter.jpg'
import kidBanner from './assets/Images/kidposter.jpg'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={menBanner} category="mens" />} />
        <Route path="/women" element={<ShopCategory banner={womenposter} category="women" />} />
        <Route path="/kid" element={<ShopCategory banner={kidBanner} category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSign />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App