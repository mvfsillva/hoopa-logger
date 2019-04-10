const winston = require('winston')
const Emoji = require('node-emoji')

const { config } = winston

const formatNumber = num => num.toString().padStart(2, '0')

const datetime = () => {
  const d = new Date()
  const day = formatNumber(d.getDate())
  const month = formatNumber(d.getMonth() + 1)
  const year = formatNumber(d.getFullYear())
  const hour = formatNumber(d.getHours())
  const minute = formatNumber(d.getMinutes())
  const second = formatNumber(d.getSeconds())

  const date = [year, month, day].join('-')
  const time = [hour, minute, second].join(':')

  return `${date} ${time}`
}

const messageTemplate = options => {
  const level = `${config.addColors(options.level)}`
  const { message = '', emoji } = options
  const emojiIcon = emoji ? Emoji.get(emoji) : ''

  return `${emojiIcon} [${level} ${datetime()}]: ${message}`
}

const logger = winston.createLogger({
  format: winston.format.combine(winston.format.colorize(), winston.format.printf(options => messageTemplate(options))),
  transports: [
    new winston.transports.Console({
      level: 'error',
      level: 'warn',
      level: 'info',
      level: 'verbose',
      level: 'debug',
    }),
  ],
})

module.exports = logger
