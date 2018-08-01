var cmd = require('node-command-line'),
  Promise = require('bluebird')
var CronJob = require('cron').CronJob
var config = require('config')
var moment = require('moment-timezone')
moment.tz('Asia/Bangkok').format()
const commandLines = config.get('commandLines')
var job = new CronJob({
  cronTime: '0 45 12 * * *',
  onTick: function() {
    console.log('running')
    commandLines.forEach(commandLine => {
      runSingleCommandWithoutWait(commandLine.cmd)
      runCopyFileCommandWithoutWait(commandLine.copy)
    })
  },
  start: false,
  timeZone: 'Asia/Bangkok',
})
job.start()

function runSingleCommandWithoutWait(commandLine) {
  cmd.run(commandLine + `${moment().format('YYYYMMDD')}`)
  console.log('Executed your command :)')
}

function runCopyFileCommandWithoutWait(commandLine) {
  cmd.run(commandLine + `${moment().format('YYYYMMDD')} /backup/mongodb/`)
  console.log('Executed your command :)')
}
