
// Function to validate login credentials
function validateLogin(email, password) {
    return userStack.some(user => user.email === email && user.pass === password);
}

// Function to show the export button
function showExportButton() {
    const exportContainer = document.getElementById("exportContainer");
    if (exportContainer) {
        exportContainer.style.display = "block";
    } else {
        console.error("Export container element not found.");
    }
}

// Event listener for the login form
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
    }

    if (validateLogin(email, password)) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true"); // Store login status
        showExportButton(); // Show the export button
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Check login status and show the export button if logged in
window.onload = function () {
    if (localStorage.getItem("isLoggedIn") === "true") {
        showExportButton();
    }
};

// Function to export user data to Excel
function exportToExcel() {
    if (userStack.length === 0) {
        alert("No user data available to export.");
        return;
    }

    try {
        const worksheet = XLSX.utils.json_to_sheet(userStack);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
        XLSX.writeFile(workbook, "UserData.xlsx");
        alert("User data exported successfully!");
    } catch (error) {
        console.error("Error exporting data to Excel:", error);
        alert("An error occurred while exporting data. Please try again.");
    }
}

// Add event listener to the export button
document.getElementById("exportButton").addEventListener("click", exportToExcel);
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="img\yistf.png">
    <title>Sign Up</title>
    <link rel="stylesheet" href="styles\login.css">
    <style>
        /* Add your styles here */
        #container{
            font-family: "Playfair Display",sans-serif;
        }
        .main{
            box-sizing: border-box;
        }
        .inputt{
            width: 95%;
            height: 30px;
            text-align: center;
            margin-top: 15px;
        }
    
        fieldset{
            height: 600px;
            width:40%;
        }
        .flag{
            width: 5%;
        }
        .phon{
            display: flex;
            width: 100%;
            height: 30px;
            padding: 10px;
            justify-content: center;
            align-items: center;
            margin: 20px 0px 0px 0px;
            font-size: 16px;
        }
        .phon > input{
            width: 60%;
            margin:0px 0px 0px 5px;
        }
        img{
            width: 20%;
        }
    
        .otp_div{
            margin-top: 40px;
        }
        .box{
            display: flex;
            align-items: center;
            height: 30px;
            font-size: 12px;
            margin-top: 10px;
        }
        button{
            width: 100%;
            height: 60px;
        }
        .login-link {
            text-align: center;
            margin-top: 20px;
        }
    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQ1W5Dk8tBx5pX5jf9xK8e0eF4Pkx42XfQmZz4p1F5JpF+e2fgI8jAj7L" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-pPRwFJwqBz+f2FNlDBGe4nC+7s2U4F9kqE+UO2p5F3x59oNXpFjIlZKGj9rKf7xa" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
</head>
<body>
    <div id="container">
        <div class="logo">
            <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishq/4417c959-3482-4f71-942a-a12e015997b6/tanishq.svg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-4417c959-3482-4f71-942a-a12e015997b6-nv8w2CB" alt="">
        </div>

        <div class="main">
            <fieldset class="sgin_div">
                <legend>SIGN UP</legend>

                <form id="login" class="form">
                    <input class="inputt F_name" type="text" placeholder="FIRST NAME" name="FIRST NAME" required>
                    <input class="inputt L_name" type="text" placeholder="LAST NAME" name="LAST NAME" required>
                
                    <div class="phon">
                        <img class="flag" src="img/ghana (1).svg">
                        <h4>+233</h4>
                        <input class="inputt mbl" type="number" placeholder="PHONE NUMBER" name="PHONE NUMBER" required>
                    </div>

                    <input class="inputt email" type="email" placeholder="E-MAIL" name="E-MAIL">
                    <input class="inputt pass" type="password" placeholder="PASSWORD" required>
                    
                    <div class="box">
                        <input type="checkbox" name="Receive Newsletters" value="Receive our newsletters and special offers">
                        <p>Receive our newsletters and special offers.</p>
                    </div>

                    <div class="box">
                        <input type="checkbox" name="WhatsApp Updates" value="Get updates on WhatsApp">
                        <p>Get updates on WhatsApp</p>
                    </div>

                    <div class="box">
                        <input type="checkbox" name="Terms & Conditions" required value="I agree to the Terms & Conditions and Privacy Policy">
                        <p>I agree to the Terms & Conditions and Privacy Policy.</p>
                    </div>
                
                    <button type="submit" class="otp_div">REGISTER</button>
                </form>
    
                <!-- Link to Login page -->
                <div class="login-link">
                    <p>Already have an account? <a href="login.html">Login here</a></p>
                </div>
            </fieldset>
        </div>
    </div>

    <script>
        document.getElementById("login").addEventListener("submit", formSubmit);
        var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];

        function formSubmit(event) {
            event.preventDefault();

            var F_name = document.querySelector(".F_name").value;
            var L_name = document.querySelector(".L_name").value;
            var mbl = document.querySelector(".mbl").value;
            var email = document.querySelector(".email").value;
            var pass = document.querySelector(".pass").value;

            var flag = true;
            if (F_name === "") {
                alert("Please fill firstname");
                flag = false;
            } else if (L_name === "") {
                alert("Please fill lastname");
                flag = false;
            } else if (mbl === "" || mbl.length > 10 || mbl.length < 10) {
                alert("Invalid mobile number");
                flag = false;
            } else if (email === "") {
                alert("Please enter your email");
                flag = false;
            } else if (pass === "") {
                alert("Please enter your password");
                flag = false;
            }

            if (flag) {
                var userData = {
                    F_name,
                    L_name,
                    mbl,
                    email,
                    pass,
                };

                console.log(userData);
                userStack.push(userData);
                localStorage.setItem("userDataBase", JSON.stringify(userStack));

                // Redirect to login page after successful sign-up
                window.location.href = "login.html";
                alert("Sign-up successful!");
            }
        }
    </script>
</body>
</html>

