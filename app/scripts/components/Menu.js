/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
 import React from 'react';

 class Menu extends React.Component {
 
     /**
      * Main constructor for the Menu Class
      * @memberof Menu
      */
     constructor() {
         super();
         this.state = {
             showingSearch: false
         };
     }
 
     /**
      * Shows or hides the search container
      * @memberof Menu
      * @param e [Object] - the event from a click handler
      */
     showSearchContainer(e) {
         e.preventDefault();
         this.setState({
             showingSearch: !this.state.showingSearch
         });
     }
 
     /**
      * Calls upon search change
      * @memberof Menu
      * @param e [Object] - the event from a text change handler
      */
     onSearch(e) {
         // Start Here
         // ...
     }
 
     render() {
         return (
             <header className="menu">
                 <div className="top-ad">
                    <div className="top-ad-container">
                        <div className="top-ad-text">Free Shipping & Free Returns—Every Order.</div>
                        <div className="details">See Details</div>
                    </div>
                    <div className="exit">×</div>
                 </div>
                 <div className="menu-container">
                     <div className="menu-holder">
                         <h1>
                             <a href="#" className="site-logo"> </a>
                         </h1>
                         
                         <div className="menu-signin-shop">
                            <div className="user-stuff">
                                <div className="sign-in">sign in</div>
                                <div className="join">Join Estée E-List Loyalty</div>
                            </div>

                            {/* <div className="shop-cart-button"> */}
                            <a href="#" className="shop-cart"></a>
                            {/* </div> */}
                         </div>
                         
                        
                        
                        
                        <input type="checkbox" id="checkbox"></input>
                         <nav>
                            {/* <button type="button" className="nav-button"> */}
                            
                            {/* </button> */}
                            
                            <ul>
                                <li><a href="#" className="nav-item">New
                                    
                                    </a>
                                    <i id="ARROW-ICON" className="material-icons arrow_forward_ios">arrow_forward_ios</i>
                                </li>
                                <li><a href="#" className="nav-item">Best Sellers
                                    
                                    </a>
                                    <i id="ARROW-ICON" className="material-icons arrow_forward_ios">arrow_forward_ios</i>
                                </li>
                                <li><a href="#" className="nav-item">Skincare</a>
                                    <i id="ARROW-ICON" className="material-icons arrow_forward_ios">arrow_forward_ios</i>
                                </li>
                                <li><a href="#" className="nav-item">Makeup
                                    
                                </a>
                                <i id="ARROW-ICON" className="material-icons arrow_forward_ios">arrow_forward_ios</i></li>
                                <li><a href="#" className="nav-item">Fragrance
                                    
                                </a>
                                <i id="ARROW-ICON" className="material-icons arrow_forward_ios">arrow_forward_ios</i></li>
                                <li><a href="#" className="nav-item">Sets & Gifts
                                    
                                </a>
                                <i id="ARROW-ICON" className="material-icons arrow_forward_ios">arrow_forward_ios</i></li>
                                <li><a href="#" className="nav-item">Re-Nutriv
                                    
                                </a>
                                <i id="ARROW-ICON" className="material-icons arrow_forward_ios">arrow_forward_ios</i></li>
                                <li><a href="#" className="nav-item">Aerin
                                    
                                </a>
                                <i id="ARROW-ICON" className="material-icons arrow_forward_ios">arrow_forward_ios</i></li>
                                <li><a href="#" className="nav-item">Discover
                                    
                                </a>
                                <i id="ARROW-ICON" className="material-icons arrow_forward_ios">arrow_forward_ios</i></li>
                                <li><a href="#" className="nav-item">Services
                                    
                                </a>
                                <i id="ARROW-ICON" className="material-icons arrow_forward_ios">arrow_forward_ios</i></li>
                                <li><a href="#" id="nav-item-mobile" className="nav-item">Special Offers</a></li>
                                <li><a href="#" id="nav-item-mobile" className="nav-item">Estée E-List Loyalty Program</a></li>
                                <li><a href="#" id="nav-item-mobile" className="nav-item">Sign In</a></li>

                            </ul>

                            
                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i id="SEARCH" className="material-icons search">search</i>
                            </a>
                            
                            
                             
                         </nav>
                        <label for="checkbox">
                            <i id="MENU-ICON" className="material-icons menu">menu</i>
                        </label>
                        
                     </div>
                 </div>
                 <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                     <input type="text" onChange={(e) => this.onSearch(e)} />
                     <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                         <i className="material-icons close">close</i>
                     </a>
                 </div>
             </header>
         );
     }
 
 
 }
 
 // Export out the React Component
 export default Menu;
// /**
//  * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
//  * 
//  */
// import React from 'react';

// class Menu extends React.Component {

//     /**
//      * Main constructor for the Menu Class
//      * @memberof Menu
//      */
//     constructor() {
//         super();
//         this.state = {
//             showingSearch: false
//         };
//     }

//     /**
//      * Shows or hides the search container
//      * @memberof Menu
//      * @param e [Object] - the event from a click handler
//      */
//     showSearchContainer(e) {
//         e.preventDefault();
//         this.setState({
//             showingSearch: !this.state.showingSearch
//         });
//     }

//     /**
//      * Calls upon search change
//      * @memberof Menu
//      * @param e [Object] - the event from a text change handler
//      */
//     onSearch(e) {
//         // Start Here
//         // ...
//     }

//     render() {
//         return (
//             <header className="menu">
//                 <div className="menu-container">
//                     <div className="menu-holder">
//                         <h1>
//                             <a href="#" className="site-logo"> </a>
//                         </h1>
//                         <nav>
//                             <a href="#" className="nav-item">New</a>
//                             <a href="#" className="nav-item">Best Sellers</a>
//                             <a href="#" className="nav-item">Skincare</a>
//                             <a href="#" className="nav-item">Makeup</a>
//                             <a href="#" className="nav-item">Fragrance</a>
//                             <a href="#" className="nav-item">Sets & Gifts</a>
//                             <a href="#" className="nav-item">Re-Nutriv</a>
//                             <a href="#" className="nav-item">Aerin</a>
//                             <a href="#" className="nav-item">Discover</a>
//                             <a href="#" className="nav-item">Services</a>

//                             <a href="#" onClick={(e) => this.showSearchContainer(e)}>
//                                 <i className="material-icons search">search</i>
//                             </a>
//                         </nav>
//                     </div>
//                 </div>
//                 <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
//                     <input type="text" onChange={(e) => this.onSearch(e)} />
//                     <a href="#" onClick={(e) => this.showSearchContainer(e)}>
//                         <i className="material-icons close">close</i>
//                     </a>
//                 </div>
//             </header>
//         );
//     }


// }

// // Export out the React Component
// export default Menu;