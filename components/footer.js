const footer = () => {
  return `<div id="container">
    <p style="text-align: center; margin-top: 5px;">KNOW MORE</p>
    <!-- <i style="margin-top: -20%; margin-left: 50%;" class="fa-solid fa-angles-down fa-1x"></i> -->
    <div id="customer">
        <ul class="alllist">
            <ul id="cust">Customer Service</ul>
            <br>
            <ul>HELP & CONTACT</ul>
            <br>
            <ul>DELIVERY INFORMATION</ul>
            <br>
            <ul>INTERNATIONAL SHIPPING</ul>
            <br>
            <ul>RETURN</ul>
            <br>
            <ul>PAYMENT OPTIONS</ul>
            <br>
            <ul>TRACK ORDER</ul>
            <br>
            </ul>
    </div>
    <div id="leftside"><br> <br>
        <ul id="about">About Peritium LTD</ul>
        <ul>CAREERS</ul>
        <ul>FIND A STORE</ul>
        <ul>BLOG</ul>
    </div>    
    <div id="innerdiv">
        <div id="innerdiv1">
            <i class="fa-brands fa-cc-visa fa-2x" ></i>
            <i style="margin-left: 20%;" class="fa-brands fa-cc-mastercard fa-2x"></i>
            <i style="margin-left: 20%;" class="fa-brands fa-paypal fa-2x"></i>
            <i  style="margin-left: 20%;"class="fa-brands fa-cc-amex fa-2x"></i>
            <img style="margin-left: 20%; width: 30% ; height: 30px; margin-top: 25px;" src="./img/rupay.png" alt="">

        </div>
    </div>
    <div id="input_box"><br><br><br>
        <p>Sign up to receive exclusive offers and news</p>
        <form id="form">
            <input name="subscribe" style="width: 50%; height: 43px; background-color:#B0A16E; border: 1px solid white" type="text" ng-model="subscriptionEmailId" maxlength="{{globalPropertiesList.EMAILADDRESS_MAX_LENGTH}}" ng-pattern="emailRegexp" class="ENTER" placeholder="ENTER YOUR EMAIL ADDRESS">
            <button type="submit" style="width: 30%; height: 47px; margin-left: -5px; border: 1px solid white;" class="btn">Subscribe</button>
        </form>
        <p style="margin-top: 5px;">Follow us on</p>
        <div id="input_box1" >
            <i style="margin-left: 10%;" class="fa-brands fa-facebook-f"></i>
            <i style="margin-left: 10%;" class="fa-brands fa-twitter"></i>
            <i style="margin-left: 10%;" class="fa-brands fa-instagram"></i>
        </div>
        <div id="logo">
            <div id="ptag1">
                <div id="ptag">
                    <h5 style="color: white; font-size: 10px;">TERMS & CONDITIONS</h5>
                  <h5 style="color: white; margin-left: 8%; font-size: 10px;">PRIVACY POLICY</h5>
                </div>
                <h5 style="color: white;font-size: 10px; margin-top: -1%;">© 2025 Peritium Company Limited. All Rights Reserved.</h5>
            </div>
        
        </div>
        
    </div>
</div>`;
};

export { footer };
