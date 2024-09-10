const songsController = require("../controllers/song")
const router = require("express").Router()

router.get("/", (req, res) => {
    songsController.list(req, res)
})

router.get("/:id", (req, res) => {
    songsController.find(req, res)
})

router.post("/", (req, res) => {
    songsController.create(req, res)
})

router.put("/:id", (req, res) => {
    songsController.update(req, res)
})

router.delete("/:id", (req, res) => {
    songsController.delete(req, res)
})

module.exports = router