import { Popular } from "../Components/Popular"
import { Hero } from "../hero/Hero"
import { Offers } from "../Components/offers"
import { NewCollections } from "../Components/NewCollections"
import { NewsLetter } from "../Components/newsLetter"
const Shop = ()=>{
  return <div>

    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <NewsLetter/>
  </div>
}
export default Shop