import { Popular } from "../Components/Popular"
import { Hero } from "../hero/Hero"
import { Offers } from "../Components/offers"
import { NewCollections } from "../Components/NewCollections"
import { NewsLetter } from "../Components/newsLetter"
const Shop = ()=>{
  return <>
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <NewsLetter/>
  </>
}
export default Shop