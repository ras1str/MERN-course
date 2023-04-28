
import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes,

} from "react-router-dom";
import { AuthPage } from "./pages/AuthPage"
import { CreatPage } from "./pages/CreatePage"
import { LinksPage } from "./pages/LinksPage"
import { Navbar } from './Components/Navbar';
import { Search } from "./Components/Search";
//import { Obyavleniya } from "./Components/Obyyavleniya";


export const useRoutes = isAuthenticated => {

    if (isAuthenticated) {
        return (
           
            <Router>
                 {isAuthenticated && <Navbar />}
                 
                 
                 
                    <Routes>
                        <Route exact path="/links" element={<LinksPage/>} />
                        
                        <Route exact path="/create" element={<CreatPage/>} />
                        <Route exact path="/" element={<CreatPage/>} />
                        
                       
                    </Routes>
 
            </Router>
        )
    }
    return (
        <Router>
            <Routes>
            <Route path="/" element={<AuthPage/>}/>
            <Route path="*" element={<AuthPage/>}/>
            </Routes>
        </Router>
    )
}