# accenture_code_challenge
 A coding Challenge making a one page website about the company Accenture

**Introduction**

This app was created for the Accenture coding challenge. It is an interactive one pager about Accenture built with the frontend framework React using several js plugins. 

**Demo**

[Accenture Challenge](https://accenture.proctor-webworks.com/)

**Plugins used**
* react-typed
* React Awesome Reveal
* React Twitter Embed Component
* React-instagram-embeded
* React Scroll-To
* format.JS
* uuid
* Hover.css

**App Features**
* responsive design for desktop and mobile
* interactive images and text
* embedded social media accounts
* reusable code (avoided hard coding when possible)
* translated text in English and German (depends on browser of the user)

**App Structure**

The app is split into several different components. As usual there is an app component and an index component. The app component also contains all the data in static default props. Ideally, I would have moved all the data into a separate file, however for such a small app this seemed like an okay solution. There are two jsons which contain the text in English version and German version. The translated text depends on your browser settings. If set to preferred language as German then everything besides the banner and the info in the social media component is changed to German language. In the app component several other components are rendered including: the navbar, the banner, three panels, a social media container and a footer. 

   **The Navbar**
   
   The navbar contains the Accenture logo and brand. It is also a link to the current Accenture website. 
   
   **Banner**
   
   The banner contains an h1 which contains a span that uses Typed js to create the effect that someone is typing/editing the banner. Then there is a button component that has a    hover.css effect that uses scroll-To to scroll you to the first panel.
   
   **Panels**
   
   There are three panel components each containing a title component and an image grid component. The images have a click event so that when the user clicks the photo
   disappears and is replaced with corresponding text. The image has a hover effect from hover.css and are styled using React Awesome Reveal (so they appear to be sliding into      their spaces).
   
   **Social Media**
   
   The social media component uses a title component and both the React Twitter Embed Component and React-instagram-embeded component. The Twitter component is the twitter feed      of Accenture while the instagram is one photo from the instagram with links to the instagram feed as well. 
   
   **Footer**
   
   The footer component has icons and links to the other social media accounts. 

**App Improvements**

If I had more time here are the improvements I would make to the app: 
* Create code that would deal with certain privacy setting in the browser (one user could not see the social media components because of privacy settings).
* Make the responsive design work for tablets.
* Add a button in the navbar to change the language settings.
* Improve code by refactoring (especially the app component). 
* Use react hooks instead of react components.
* Add tests.
