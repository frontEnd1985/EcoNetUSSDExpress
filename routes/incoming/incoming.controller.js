module.exports = {
  notifyUSSD: (req, res) => {
    console.log(req);
    res.status(200).json({ result: 1, message: "SUCCESS" });
  },
};
