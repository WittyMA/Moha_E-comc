let navbar = () => {
  return `<div id="page_layout">
  
        <div id="navv">
            <div id="brand_curr">
                <p id="gold_rate"><a href="products.html">PRODUCTS</a></p>
            </div>
            <div>
            <a href="login.html" id="user_l">LOGIN</a>
            </div>
                <div><a  href="../excel.html">Admin</a></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
                <a id = "cart1" href="cart.html"><img src='../img/cart.svg'></a>
            </div>
            <style>
            #cart1 {
            width: 3vw;
            height: 3vh;
            background-color: #ffff;
            border-radius: 90%;
            display: flex;
            justify-content: center;
            align-items: right;
            cursor: pointer;
            }
            
            #cart1 img {
            width: 8vw;
            }
            #cart1:hover {
            background-color: #999;
            }
            #navv {
            display: flex;
            justify-content: space-between;
            align-items: center;
            }
            #brand_curr {
            margin-right: 20px;
            }
            #user_l {
            margin-right: 20px;
            }
            #logo {
            width: 120px;
            height: 40px;
            align-self: center;
            }
            #topnav2 {
            display: flex;
            justify-content: space-around;
            align-items: center;
            }
            #topnav2.top ulnav {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
            }
            }
            </style>
        </div>

        <div id="div2">
            <a href="index.html"><center>Home</center><img id="logo"
                    src="https://www.tanishq.co.in/wps/wcm/connect/tanishq/cb53f671-01d0-449e-b18d-a4e61e6ffa0b/TanishqLogo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-cb53f671-01d0-449e-b18d-a4e61e6ffa0b-mC036IT"
                    alt="" /></a>

            <ul id="topnav2" class="top ulnav">
                <div class="navbar">
                    <div class="dropdown">
                        <button class="dropbtn">ALL WATER BOTTLES</button>
                        <div class="dropdown-content">
                            <div class="header"></div>
                            <div class="row">
                                <div class="column">
                                    <h3>CATEGORY</h3>
                                    <a href="products.html">ALL WATER BOTTLES</a>
                                    <a href="products.html" id="earrings">EARRINGS</a>
                                    <a href="products.html" id="pendants">PENDANTS</a>
                                    <a href="products.html">FINGER RINGS</a>
                                    <a href="products.html" id="mangalsutra">MANGALSUTRA</a>
                                    <a href="products.html">CHAIN</a>
                                    <a href="products.html" id="necklace">NECKLACE</a>
                                    <a href="products.html">NOSE PIN</a>
                                    <a href="products.html">COUPLE RINGS</a>
                                </div>
                                <div class="column">
                                    <a href="products.html">NECKLACE SET</a>
                                    <a href="products.html" id="earrings">BANGLE</a>
                                    <a href="products.html" id="pendants">BRACELETS</a>
                                    <a href="products.html">PENDANT AND EARRING SET</a>
                                    <a href="products.html" id="mangalsutra">GOLD COINS</a>
                                </div>

                                <div class="column">
                                    <h3>GENDER</h3>
                                    <a href="products.html">MEN</a>
                                    <a href="products.html">WOMEN</a>
                                    <a href="products.html">KIDS</a>
                                    <a href="products.html">UNISEX</a>
                                </div>
                                <div class="column">
                                    <h3>PRICE BRAND</h3>
                                    <a href="products.html">
                                        <5000 </a>
                                            <a href="products.html">5K - 10K</a>
                                            <a href="products.html">10K - 20K</a>
                                            <a href="products.html">20K - 30K</a>
                                            <a href="products.html">30K - 40K</a>
                                            <a href="products.html">40K - 50K</a>
                                            <a href="products.html">50K</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="navbar">
                    <div class="dropdown">
                        <button class="dropbtn">GOLD</button>
                        <div class="dropdown-content">
                            <div class="header"></div>
                            <div class="row">
                                <div class="column">
                                    <h3>EARINGS</h3>
                                    <a href="products.html">JHUMKA</a>
                                    <a href="products.html">STUD</a>
                                    <a href="products.html">HOOP</a>
                                    <a href="products.html">DROP</a>
                                </div>
                                <div class="column">
                                    <h3>PENDANTS</h3>
                                    <a href="products.html">DAILY</a>
                                    <a href="products.html">PARTY</a>
                                    <a href="products.html">WORK WEAR</a>
                                    <a href="products.html">TRADITIONAL</a>
                                </div>
                                <div class="column">
                                    <h3>FINGER RING</h3>
                                    <a href="products.html">ENGAEMENT RINGS</a>
                                    <a href="products.html">PARTY</a>
                                    <a href="products.html">WORKWEAR</a>
                                    <a href="products.html">DAILY WEAR</a>
                                </div>
                                <div class="column">
                                    <h3>OTHER CATEGORIES</h3>
                                    <a href="products.html">CHAIN</a>
                                    <a href="products.html">MANGALSUTRA</a>
                                    <a href="products.html">NECKWEAR</a>
                                    <a href="products.html">NOSE PIN</a>
                                    <a href="products.html">NECKWEAR SET</a>
                                    <a href="products.html">BANGLE</a>
                                    <a href="products.html">BRACELET</a>
                                </div>
                                <div class="column">
                                    <h3>GOLD COIN</h3>
                                    <a href="products.html">1 GRAMS</a>
                                    <a href="products.html">2 GRAMS</a>
                                    <a href="products.html">4 GRAMS</a>
                                    <a href="products.html">5 GRAMS</a>
                                    <a href="products.html">8 GRAMS</a>
                                    <a href="products.html">10 GRAMS</a>
                                    <a href="products.html">25 GRAMS</a>
                                    <a href="products.html">50 GRAMS</a>
                                    <a href="products.html">100 GRAMS</a>
                                    <a href="products.html">500 GRAMS</a>
                                    <a href="products.html">1000 GRAMS</a>
                                </div>
                                <div class="column">
                                    <h3>METAL COLOUR</h3>
                                    <a href="products.html">YELLOW</a>
                                    <a href="products.html">ROSE</a>
                                    <a href="products.html">WHITE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <i class="material-icons" id="room">room</i>
                <i class="material-icons" id="search">search</i>
            </ul>
        </div>
    </div>`;
};
export { navbar };
