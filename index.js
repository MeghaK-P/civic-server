
const jsonServer = require('json-server')
const civicServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()
const PORT = 4000

civicServer.use(middleware)
civicServer.use(router)

civicServer.listen(PORT, () => {
    console.log(`CivicLens Server started running at PORT:${PORT} successfully`)
})
