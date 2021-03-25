require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const userRoutes = require('./server/routes/users')
const mushroomRoutes = require('./server/routes/mushrooms')

const port = process.env.PORT || 4000

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/home', (req, res ) => {res.send("Backend says Welcome Home!")})

// use the /api prefix to divert requests for data from request for pages
app.use('/api', userRoutes)
app.use('/api', mushroomRoutes)

// ! You MUST create a .env file
// ! You MUST create an app.yaml file to host on GoogleCloud App Engine

app.listen(port, () => console.log(`Server is listening on port: ${port}`))

// ******************************************************
// **************** Optional Steps Below ****************
// ******************************************************

// ? If you wish to serve STATIC React files see the code and references below.

//  !You MUST install the following packages:
  // ? `npm i babel-cli babel-core @babel/core babel-loader babel-polyfill babel-preset-env  babel-preset-react babel-preset-stage-0 npm-run-all react react-dom react-router react-router-dom webpack webpack-cli  webpack-node-externals`

  // ? `npm install --save-dev @babel/preset-env`

// !You MUST Build A Router Component and import it.
  // ? <Switch> <Route path="/" Component={Home} /> etc.. </Switch>

// !THEN import dependencies:
  // ? import 'babel-polyfill', import React from 'react', import ReactDOMServer from 'react-dom/server' import { StaticRouter } from 'react-router'

// !Then tell the app to use the build bundle after use(bodyParser)
  //  ? app.use(express.static('build/public'))

// !Add this code just before app.listen()

// app.get('/*', (req, res) => {
//   const context = {}

//   const content = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url} context={context}>
//       <Router />
//     </StaticRouter>
//   )
  
//   const html = `
//     <html>
//       <head></head>
//       <body>
//         <div id="root">
//           ${content}
//         </div>
//         <script src="./client_bundle.js"></script>
//       </body>
//     </html>
//     `

//     res.send(html)
// })

//  !You MUST run the webpack scripts to build this! (SEE webpack.client & webpack.server.js files.)
  // ? "dev": "npm-run-all --parallel webpack:*",
  // ? npm run dev

// ? Check out: SSR of React with Express App[YouTube](https://www.youtube.com/watch?v=LfA2XDmgVbo) for a deeper dive into this.

