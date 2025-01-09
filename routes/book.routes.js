const router = require("express").Router();

const Book = require("../models/Book.model")

router.get("./books", (req, res, next))
    Book.find()
        .then(booksFromDB => {
            res.json(booksFromDB)
        })
        .catch(err => {
            next(error)
        })
module.exports = router;