

class JobOrderRepository {

    constructor() {
        this.db = require('../index');
 
    }
 
    async getJobOrder() {
        
        try {
            const JobOrder = await this.db.JobOrder.findAll();
            // console.log('JobOrder:::', JobOrder);
            return JobOrder;
        } catch (err) {
            // console.log(err);
            return [];
        }
    }

    async createJobOrder(task) {
        let data = {};
        try {
            task.createdate = new Date().toISOString();
            data = await this.db.JobOrder.create(task);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateJobOrder(task) {
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

    async deleteJobOrder(taskId) {
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

module.exports = new JobOrderRepository();