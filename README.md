# Angular Flash Cards - Day 1

Remember, of course, to `npm install`.

For this first day, we have provided you with a very small server which statically serves the following resources:

Request | Response
----|----
`GET /` | `browser/index.html`
`GET /:ANY_FILEPATH` | `browser/:ANY_FILEPATH` or `node_modules/:ANY_FILEPATH` (whichever matches first, if either)

For example, if the client requests `GET /css/style.css`, Express will serve up the file at `/browser/css/style.css`. Likewise, a request `GET /angular.min.js` causes Express to send back the file at `/node_modules/angular/angular.min.js`.
