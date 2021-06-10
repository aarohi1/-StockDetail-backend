const stocksModel = require("../models/stockModel");

class StockDbService {

    insertdata (payload) {
        return new Promise ((resolve, reject) => {
            let insertResp = new stocksModel (payload);
            insertResp.save().
            then (resp => {
                resolve();
            })
            .catch (error => {
                reject(error);
            })
        })
    }

    getStocksDatabyId (id) {
        return new Promise ( async (resolve, reject) => {
            try {
                let dataResp = await stocksModel.findById(id);
                resolve(dataResp);
            } catch (error) {
                reject(error);
            }
        })
    }

    getStocksData () {
        return new Promise ( async (resolve, reject) => {
            try {
                let dataResp = await stocksModel.find({});
                resolve(dataResp);
            } catch (error) {
                reject(error);
            }
        })
    }

    async deleteStockdata (id) {
        try {
            let dataResp = await stocksModel.findByIdAndRemove(id);
            return dataResp;
        } catch (error) {
            return error;
        }
    }
}

module.exports = new StockDbService ();