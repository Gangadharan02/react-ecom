import './App.css';

function Header() {
  return (
    <div className="App">
      <div class="header_section haeder_main">
         <div class="container-fluid">
            <nav class="navbar navbar-light bg-light justify-content-between">
               <div id="mySidenav" class="sidenav">
                  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                  <a href="index.html">Home</a>
                  <a href="computers.html">Computers</a>
                  <a href="mans_clothes.html">Mans Clothes</a>
                  <a href="womans_clothes.html">Womans Clothes</a>
                  <a href="contact.html">Contact</a>
               </div>
               <span  className='menu' onclick="openNav()"><img src="images/toggle-icon.png"/></span>
               <a class="navbar-brand" href="index.html"><img src="images/logo.png" /></a>
               <form class="form-inline ">
                  <div class="login_text">
                     <ul>
                        <li><a href="#"><img src="images/user-icon.png"/></a></li>
                        <li><a href="#"><img src="images/trolly-icon.png"/></a></li>
                        <li><a href="#"><img src="images/search-icon.png"/></a></li>
                     </ul>
                  </div>
               </form>
            </nav>
         </div>
      </div>
      
    </div>
  );
}

export default Header;