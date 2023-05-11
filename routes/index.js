import express from "express";
const router = express.Router();

// app.METHOD(PATH, HANDLER)

router.get("/", (req, res) => {
  // "codigo sql"
  res.send("get all");
});

router.get("/:id", (req, res) => {
  res.send("get by id");
});

router.post("/", (req, res) => {
    
  res.send("post/ create ");
});
router.put("/:id", (req, res) => {
  res.send("put/ update ");
});
router.delete("/:id", (req, res) => {
  res.send("delete ");
});



export default router;
