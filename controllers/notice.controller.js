const { createNotice, getNotice, createHightlightNotice } = require("../services/notice.service");

exports.postSingleNotice = async (req, res, next) => {
    try {
        const noticeResult = await createNotice(req.body);
        res.status(200).json({
            status: "success",
            message: "Successfully Added Student",
            data: noticeResult,
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Couldn't create student",
            error: error.message,

        });
    }

}
exports.postHighlightNotice = async (req, res, next) => {
    console.log(req.body);
    try {
        const noticeResult = await createHightlightNotice(req.body);
        console.log(noticeResult);

        res.status(200).json({
            status: "success",
            message: "Successfully Added Student",
            data: noticeResult,
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Couldn't create student",
            error: error.message,
        });
    }

}

exports.getAllNotice = async (req, res, next) => {
    try {
        let filters = { ...req.query }
        const excludeFields = ["limit", "sort", "page", "fields"]
        excludeFields.forEach(field => delete filters[field])


        const queries = {};
        // separate sort and make fit for data query 
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy;
        }

        // load specific property and value ( fields)
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;

        }
        // pagination 
        if (req.query.page) {
            const { page = 1, limit = 3 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = limit;
        }


        const allNotice = await getNotice(filters, queries);

        res.status(200).json({
            status: "success",
            count: allNotice.length,
            data: allNotice
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the Notices",
        });
    }

}