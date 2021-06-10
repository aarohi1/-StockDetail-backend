const express = require("express");
const router = express.Router();
const stockService = require("../services/stockService");

router.post ("/saveData", async (req, res) => {
    try {
        let insertionPayload = req.body;
        let insertionResp = await stockService.insertData(insertionPayload);
        res.status(200)
        res.send(insertionResp); 
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

router.get ("/getData", async (req, res) => {
    try {
        let stockDataResp = await stockService.getStockData();
        res.status(200)
        res.send(stockDataResp);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

router.get ("/getDataById/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let stockDataResp = await stockService.getStockDataById(id);
        res.status(200)
        res.send(stockDataResp);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

router.get ("/deleteData/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let stockDataResp = await stockService.deleteData(id);
        res.status(200)
        res.send(stockDataResp);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});
module.exports = router;