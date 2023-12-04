                                    # ENTIRE APP #
        ## VS Code
### Errors
- Squiggly Lines:
Red Squiggles: Indicate errors, such as syntax mistakes or unresolved variables.
Yellow/Orange Squiggles: Show warnings, like unused variables or deprecated functions.
Green Squiggles: Often used for informational purposes, like stylistic issues.

## Hooks
- Where do you call hooks?
Hooks should be called at the top level of your component, not inside nested functions. 
By top-level, I mean in the function for the component itself and not inside any blocks in it like other functions, loops, etc.

# All Forms #
* NEED TO PUT LABLES AS PLACEHOLDERS FOR BETTER UI (remove labels and just use placeholders to lable inputs unless for certain inputs it does not make sense)
* NEED TO MAKE RESPONSIVE (use AirBnb's repsonsive form design to copy)



                                    # PHP (BACKEND) #
        ## General
## CORS Handling
you will need to handle CORS (Cross-Origin Resource Sharing) if your React app is running on a development server (started with npm start, typically running on localhost:3000 or a similar port) and your PHP backend is running on a separate server environment like XAMPP (usually on localhost but on a different port like 80 or 8080).
In such a setup, your React app and PHP backend are considered to be on different origins because they differ in port number. Browsers enforce the same-origin policy, which restricts web pages from making requests to a different domain than the one that served the web page. This policy is in place to prevent malicious scripts on one page from obtaining access to sensitive data on another web page through the browser.
Here’s how you can handle CORS in your PHP backend:
Modify PHP Backend:
Add headers to your PHP scripts to allow requests from your React app's origin. This can be done by adding the following lines at the beginning of your PHP files:
- PHP Code -
// Allow requests from a specific origin
header('Access-Control-Allow-Origin: http://localhost:3000'); // Replace with your React app's URL
// Or, to allow requests from any origin (not recommended for production)
// header('Access-Control-Allow-Origin: *');
// Additional headers for CORS
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
Handling Preflight Requests:
Browsers may send a preflight request (an HTTP OPTIONS request) before the actual request in some cases. Ensure your PHP server handles these correctly:
- PHP Code -
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Return only the headers and not the content
    // Only allow CORS if we're doing a GET, PUT, POST, or DELETE request
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']) &&
            $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] === 'GET, POST, PUT, DELETE, OPTIONS') {
        header('Access-Control-Allow-Origin: http://localhost:3000'); // Replace with your React app's URL
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
    }
    exit(0);
}
Security Considerations:
While the wildcard (*) for Access-Control-Allow-Origin is convenient during development, it's not recommended for production environments due to security concerns.
Always specify only the origins that should be allowed to access your server in production.
By properly configuring CORS, you'll enable your React app running on a different origin (port) to communicate with your PHP backend, ensuring smooth data exchange between the two.

## DRY Principle
This follows the DRY (Don't Repeat Yourself) principle, which is a fundamental part of software development best practices.



                                    # MYSQL DATABASE (BACKEND) #
## Enforcing Constraints
To make data related to eachother in different tables change based on the behavior
of data in a different table, you need to set constraints.





                                    # JSX PAGES #
        ## ContactUsForm.jsx


        ### SignUpForm.jsx
## Line 


        ## SignUpForm.jsx


        ## LoginForm.jsx
### Line 14
In the code, when you use
{ ...credentials, [event.target.id]: event.target.value },
you're saying, "Keep everything in my credentials state as it is, but update just the
username or password with the new value I just typed in."

### Line 15
// the '...' in front of 'credentials' creates a new object that copies
// key-value pairs from the 'credentials' object defined above

### Line 34
- What does 'fetch' do?
'fetch' sends asynchronous HTTP POST request to the endpoint the PHP script is.
So since for this project I am using XXAMPP, the endpoint would be something like
'http://localhost/myapp/login.php'

- What is an endpoint?
An endpoint is essentially a web address (URL) where a specific service is provided. Think of it like a specific place on the internet where your application can ask for data or send data. For example, in a login system like this one, the endpoint is the URL where a users login info is sent to check if they can log in (in this case, with PHP)

Includes headers indicating content type & body w/ 'credentials' in JSON format.
'await fetch(...)' awaits server response

### Line 80
- Do I need an onClick event handler?
You don't need an onClick handler for the button in your form. In a React form, the onSubmit event of the form is typically used to handle form submissions. When you set the button type to "submit" inside a form, clicking this button will automatically trigger the onSubmit event of the form.
In the LoginForm, the handleSubmit function is already linked to the onSubmit event of the form. When the button is clicked, handleSubmit will be executed. This is a standard and recommended way to handle form submissions in React.