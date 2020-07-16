const _ = require('lodash');
const moment = require('moment-timezone');

const getISTFormat2 = utcTimeStamp =>  (!_.isNil(utcTimeStamp) ? (moment(new Date(utcTimeStamp * 1000)).tz('Asia/Kolkata').format('Do MMM YYYY | hh:mm a')) : undefined);

module.exports = {
    getISTFormat2,
};
