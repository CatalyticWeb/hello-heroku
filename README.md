#hello-heroku

## User Story (Story Points = med👕) 

**As a** user of your hello-node app

**I want** to use this app online, _on the web_

**So That** I don't have to (a) go to your REPO, (b) download code (c) unzip (d) vsCode project (e) install `node.js` & `express.js` (f) etc. 

## Comments/Discussion
- pretty much same as before...new node app => localhost => github => heroku => persistent URL. 
- use Grammarly 
- Level up your cmd line: `$:` `PS1='shorter-prompt'` (where `'shorter prompt'` is an alias for your cmd prompt)

## Resources
- [zoom class from hurricane day](https://una.zoom.us/rec/share/hdLvEpmjxIi5Ffv4VOp7pMumW8c473fVKLWxyJW_mGz4X83P8M7Gf00kM3cOXCQ.RtMy181jXMG1RScW?startTime=1630431327000) 
- [ghyt repo](https://github.com/barrycumbie/hello-heroku)

## Test/Acceptance Criteria/Rubric (how do you know when you are done) 

- [ ] navigate to a URL: _______ (heroku): 0 | 5 | 10
- [ ] link back to ghyt repo w/target: 0 | 5 | 10
- [ ] file directory and naming, ghty link to herok: 0 | 5 | 10 
- [ ] clear instructions (w/shortcuts), in m/d, on readme to <del>spin up</del> tell about the project, how to build on: 0 | 5 | 10 
- [ ] code quality: logical, readable, functional: 0 | 5 | 10  

___________________________________________________________________________________________________________________________________________


## Using the App

- Bring up the app by going to [this link](https://hello-heroku-harrison.herokuapp.com/).
  - You can then see the app working.
- The code for updating the information available on this web app, can be found [here](https://github.com/CatalyticWeb/hello-heroku).
  - Code can also be found in the web app page.
- In order to expand upon this, you as a user could update the code in this repository (which would then also update the code on the live heroku URL) and add more lines of HTML, or link to a different file all together an that would be displayed instead of the HTML of the Sample page.
  - The section of code that would chaneg what gets displayed on the web page is found in this line: `res.send('<h1>YOUR CODE HERE UPDATES THE PAGE</h1><p>by Harrison</p><p1><a href=https://github.com/CatalyticWeb/hello-heroku>Code available here<a/></p1>');`
