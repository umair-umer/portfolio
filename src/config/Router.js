

import {
    BrowserRouter as Router,Switch,Route   } from "react-router-dom";

import { Home ,Skill,Project} from "../container2";


    

function AppRouter(){
    return(
        <Router>
            <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/skill" component={Skill}/>
                 <Route exact path="/project" component={Project}/>

            
                 </Switch>

            
            
     
                  
           


        </Router>
    );
    

}


export default AppRouter;