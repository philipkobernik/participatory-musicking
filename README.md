# Participatory Musicking

This repo is a NextJS app that is hardcoded with a list of links that map to single slider interfaces-- one for each student.

Even without the hardcoded links, the app features dynamic routing to support access to any page `/players/{name}`

Upon visiting this page, the app will connect to my firebase db (specified in `firebaseApp.js`) and bind an interactive slider control to a new or existing `{name}:value` pair at the root of the firebase db.

## Install / Dev
`npm install`

`npm run dev`

## Future Work
* support more complex interfaces in the browser
  * multiple types of UI control
  * multiple controls per interface
* support user-authentication
* support connecting midi interfaces
