const router = require("express").Router()
const songs = require("./song")

router.use("/songs", songs)

module.exports = router