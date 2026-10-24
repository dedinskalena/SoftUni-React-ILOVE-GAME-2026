import { describe, expect, it } from "vitest"
import App from './App'
import {render,screen,fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import { BrowserRouter } from "react-router";

it('should render the App component correctly',()=>{
    render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>

)
    expect(screen.getByText('ALL new games are')).toBeInTheDocument();
})

describe('Navigation tests',()=>{
    it('should navigate to login page',()=>{
    render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    )
    
    fireEvent.click(screen.getByText('Login'))
    expect(screen.getByRole('heading',{name:'Login',level:1})).toBeInTheDocument()

    })

})