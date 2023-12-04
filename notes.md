# General #
### VS Code
## Errors
- Squiggly Lines:
Red Squiggles: Indicate errors, such as syntax mistakes or unresolved variables.
Yellow/Orange Squiggles: Show warnings, like unused variables or deprecated functions.
Green Squiggles: Often used for informational purposes, like stylistic issues.

### Hooks
- Where do you call hooks?
Hooks should be called at the top level of your component, not inside nested functions. 
By top-level, I mean in the function for the component itself and not inside any blocks in it like other functions, loops, etc.

# LoginForm.jsx #
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

# All Forms #
* NEED TO PUT LABLES AS PLACEHOLDERS FOR BETTER UI (remove labels and just use placeholders to lable inputs unless for certain inputs it does not make sense)

# ContactUsForm.jsx #

# SignUpForm.jsx #

# SignUpForm.jsx #
