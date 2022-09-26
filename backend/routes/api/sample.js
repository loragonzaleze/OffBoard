const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
    res.send({"message" : "Hello from the backend!"})
})


module.exports = router;