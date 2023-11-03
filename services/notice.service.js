const Notice = require("../models/Notice");

exports.createNotice = async (noticeInfo) => {
    const result = await Notice.create(noticeInfo);
    return result;
}
exports.getNotice = async (filters, queries) => {
    const result = await Notice
        .find()
        .skip(queries.skip)
        .limit(queries.limit)
        .sort({ createdAt: 'desc' })

    const totalNotice = await Notice.countDocuments(filters);
    const pageCount = Math.ceil(totalNotice / queries.limit)
    return { result, totalNotice, pageCount };

}