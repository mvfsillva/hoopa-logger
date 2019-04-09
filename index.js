const winston = require('winston')

const { config } = winston

const formatNumber = num => ('0' + num).slice(-2)

const date = new Date()
const dd = formatNumber(date.getDate())
const mm = formatNumber(date.getMonth() + 1)
const yyyy = formatNumber(date.getFullYear())

const h = formatNumber(date.getHours())
const m = formatNumber(date.getMinutes())
const s = formatNumber(date.getSeconds())

const today = `${dd}/${mm}/${yyyy} ${h}:${m}:${s}`

const messageTemplate = options => {
  const level = config.addColors(options.level)
  const { message = '' } = options

  return `[${level} ${today}]: ${message}`
}

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.printf(options => messageTemplate(options))
  ),
  transports: [new winston.transports.Console({
    level: 'error',
    level: 'warn',
    level: 'info',
    level: 'verbose',
    level: 'debug',
  })],
})

module.exports = logger