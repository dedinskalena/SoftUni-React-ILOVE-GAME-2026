import { expect, it } from "vitest"
import Footer from "./Footer"
//import { createRoot } from "react-dom/client"
 
//import {act} from "react"
import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

it.skip('should render the Footer component correctly old',()=>{
//    const contaner=document.createElement("div")
//    document.body.append(contaner)

//    const root=createRoot(contaner);

//    act(()=>{
//       root.render(<Footer/>)
//    })
   
      
//    const resultElement=document.querySelector('footer>p')
//    expect(resultElement.textContent).to.include("SoftUni")
 })

it.skip('should render the Footer component correctly',()=>{
    

   render(<Footer/>)
    const resultElement=screen.getAllByRole('paragraph')
    expect(resultElement.textContent).to.include("SoftUni")
})

it('should render the Footer component correctly using jest-dom',()=>{
   render(<Footer/>)

     
    expect(screen.getByText(/SoftUni/i)).toBeInTheDocument()
})