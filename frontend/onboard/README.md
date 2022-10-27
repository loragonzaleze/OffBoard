## How to
1. Install node.js if you don't have it installed already.
2. Pull repo into local computer. 
3. Open up VSCode and open only frontend/onboard. This will show you all of the code here.
4. If you are using VSCode, simply just use the terminal there and run ```npm install```. Otherwise, open your local terminal and navigate to frontend/onboard and run npm install.
5. To run server locally, run ```npm start```
6. You should now be able to see the website locally!


## Key Things about the frontend
### Me(Bruce) wants to keep the format of the code pretty clean so its easier to understand, so follow these rules when you create things

1. When you make a new page, write a comment at the top to define what the page is for. ~1-2 lines is fine
2. When you add a new page, add it to `App.js` route page w/ a relevant path name or else it won't link properly
3. When you need CSS stuff specific to your page, create a new css file in the stylesheet folder. ```global.css``` can be used for some basic stuff. 
3a. Follow the same convention I use in the stylesheets. Ex. if im working on login page, the css files should have .login-something.\
3b. Make all pages `user-select: none`. This makes it so title text can't be clicked on
4. Add TODOs if you are working on a page and don't know how to do something / leave it for later. This includes future future stuff - when this links to backend, anything that user inputs like email / first /last name needs to be saved, create a state hook or something to accomadate this.
5. DONT use only divs, use common objects when it makes sense. I.e. just writing title text? use a ```<text></text>``` not a div. Making a button? use a ```<button>```.
Using an text input box? ```<input>``` etc. etc..
5. Use view hieght / view width in css when it makes sense, try not to hardcode sizes unless you need it to / think its better
6. Try to consolidate components if you can, I didn't really do this but its nice to do. Ex. if there is a common thing (i.e the HRnext logo) that is used everywhere, try to make it a component and pass that in instead of rewriting it every time
7. Use classes if you have lots of states, if there isn't a ton to store just keep as functions. Classes are easier to use than functions in general.

## Pages that have been done
When you run locally your url is 
```localhost:3000```
Pages that are done / being implemented currently:\
localhost:3000/\
localhost:3000/login\
localhost:3000/contact\
localhost:3000/choose-interests\
localhots:3000/endorsed\
