const stockDbService = require("../dbService/stocksDbService")
// const stockAPI = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=5&page=1&sparkline=false";

class StockService {

    async insertData (payload) {
        try {
            let dataPayload = {"_id": payload.id, "companyName": payload.name, "symbol":payload.symbol, "marketCap": payload.market_cap, "currentPrice": payload.current_price,"isDataSave":payload.isDataSave}
            let insertResp = await stockDbService.insertdata(dataPayload);
            return insertResp;
        } catch (error) {
            return error
        }
    }

    async getStockData () {
        try {
            let dataresp = await stockDbService.getStocksData();
            return dataresp;
        } catch (error) {
            return error
        }
    }

    async getStockDataById (id) {
        try {
            let dataresp = await stockDbService.getStocksDatabyId(id);
            return dataresp;
        } catch (error) {
            return error
        }
    }

    async deleteData (id) {
        try {
            let dataresp = await stockDbService.deleteStockdata(id);
            return dataresp;
        } catch (error) {
            return error
        }
    }
}

module.exports = new StockService ();