import Navbar from './components/Navbar'
import NavbarUser from './components/NavbarUser'
import Home from './components/Home'
import Explore from './components/Explore'
import Posts from './components/Posts'
import Apply from './components/Apply'
import Register from './components/Register'
import Signin from './components/Signin'
import CompanyRegister from './components/CompanyRegister'
import ProfileUser from './components/ProfileUser'
import Education from './components/Education'
import Experience from './components/Experience'
import ChangePasswordUser from './components/ChangePasswordUser'
import AppStatus from './components/AppStatus'
import ProfileCompany from './components/ProfileCompany'
import ChangePasswordCompany from './components/ChangePasswordCompany'
import JobPosts from './components/JobPosts'
import AppList from './components/AppList'
import CreatePost from './components/CreatePost'
import VisitProfile from './components/VisitProfile'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
/* import React, { useState, useEffect } from 'react' */

/* import Axios from 'axios' */

function App() {
 const [authState, setAuthState] = useState(false);
  const isLoggedIn = window.localStorage.getItem("authUser") ? true : false;
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        {/* <Navbar isLoggedIn={isLoggedIn} /> */}
        {isLoggedIn ? <NavbarUser /> : <Navbar />}
        <Route path='/home' component={Home} />
        <Route path='/explore' component={Explore} />
        <Route path='/posts:id' component={Posts} />
        
        <Route path='/posts' component={Posts} />
        <Route path='/apply' component={Apply} />
        <Route path='/register' component={Register} />
        <Route path='/signin' component={Signin} />
        <Route path='/profileuser' component={ProfileUser} />
        <Route path='/education' component={Education} />
        <Route path='/experience' component={Experience} />
        <Route path='/changepassworduser' component={ChangePasswordUser} />
        <Route path='/appstatus' component={AppStatus} />
        <Route path='/companyregister' component={CompanyRegister} />
        <Route path='/profilecompany' component={ProfileCompany} />
        <Route path='/changepasswordcompany' component={ChangePasswordCompany} />
        <Route path='/jobposts' component={JobPosts} />
        <Route path='/applist' component={AppList} />
        <Route path='/createpost' component={CreatePost} />
        <Route path='/visitprofile' component={VisitProfile} />
        <Route path='/' exact render={(props) => (
          <>
            <Home />
          </>
        )} />

      </div>

    </Router>
  );
}

export default App;
