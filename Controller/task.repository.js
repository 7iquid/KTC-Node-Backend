

class DataParser {

    constructor() {
        this.db = require('../index');
 
    }
 
    async getParser() {
        
        try {
            const JobOrder = await this.db.JobOrder.findAll();
            // console.log('JobOrder:::', JobOrder);
            return JobOrder;
        } catch (err) {
            // console.log(err);
            return [];
        }
    }

    async createParser(task) {
        let data = {};
        try {
            task.createdate = new Date().toISOString();
            data = await this.db.JobOrder.create(task);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateParser(task) {
        let data = {};
        try {
            task.updateddate = new Date().toISOString();
            data = await this.db.JobOrder.update({...task}, {
                where: {
                    id: task.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteParser(taskId) {
        let data = {};
        try {
            data = await this.db.JobOrder.destroy({
                where: {
                    id: taskId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new DataParser();