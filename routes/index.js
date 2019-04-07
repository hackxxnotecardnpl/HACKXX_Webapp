const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const name = req.cookies.username;
    name
        ?
        res.render("index", { name })
        :
        res.redirect("/hello")
        ;
});

router.get("/hello", (req, res) => {
    const name = req.cookies.username;
    name
        ?
        res.redirect("/")
        :
        res.render("hello");
    ;
})

router.post("/hello", (req, res) => {
    res.cookie("username", req.body.username);
    res.redirect("/");
})

router.post("/goodbye", (req, res) => {
    res.clearCookie("username");
    res.redirect("/hello");
});

module.exports = router;