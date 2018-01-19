var cmd = require('node-command-line'),
    Promise = require('bluebird');
var CronJob = require('cron').CronJob;
var moment = require('moment-timezone');
moment.tz('Asia/Bangkok').format();
const commandLines = config.get('commandLines')
var job = new CronJob({
    cronTime: '0 0 18 * * *',
    onTick: function () {
        console.log('running');
        commandLines.forEach(commandLine => {
            runSingleCommandWithoutWait(commandLine.cmd)
        });
    },
    start: false,
    timeZone: 'Asia/Bangkok'
});
job.start();

function runSingleCommandWithoutWait(commandLine) {
    cmd.run(commandLine);
    console.log('Executed your command :)');
}