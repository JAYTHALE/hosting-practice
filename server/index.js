const express = require("express")

const app = express()

app.use(express.static("dist"))
app.get("/api/user", (req, res) => {
    res.json({ message: "user fetch success" })
})
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})

app.listen(process.env.PORT || 5000, console.log("server running"))