

Site description and defense

I decided to create a Gatsby/React web app in order to optimize SEO with Gatsby and retain the speed of React in client rendering. 
Also, I wanted as simple, fast and easily updatable web app as I could create. 

Sign in/register is achieved by either clicking the sign in button in the header or clicking on the private page-2 link.
 This sets off the Auth0 function in the header.js file that uses a destructerd variable (useAuth0()) that assigns various 
Auth0 methods from its imported library that in turn connects with the Auth0 site which creates a log of every register and log in. 

On page scroll the header links background turns into a dark scroll block (partially translucent). This is the result of a stateful 
class component that uses props and is connected to the header. 

The app has four pages, with a private authorized area. Once in this private area you can 'do' something by sending a detailed 
message to my email. The text boxes clear once the message is sent and ready to receive another message. Under the hood is Axios 
running the GetForm HTTP request for the email message.