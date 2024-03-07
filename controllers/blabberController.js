// const { ObjectId } = require('mongoose').Types;
const { Blabber } = require('../models');

const headCount = async () => {
    const blabberNumber = await Blabber.aggregate()
    .count('blabberCount');
    return blabberNumber;
}
    