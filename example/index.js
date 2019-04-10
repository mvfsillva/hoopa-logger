const logger = require('../.')

console.log(`With emoji\n`)
// With Emoji
logger.info('This is information!', { emoji: 'information_source' })
logger.warn('This is a warning!', { emoji: 'interrobang' })
logger.error('This is a problem!', { emoji: 'collision' })
logger.debug('This is a debug! ', { emoji: 'face_with_monocle' })
logger.verbose('This is a verbose!', { emoji: 'hash' })

console.log(`\n\n Without emoji\n`)
// Without Emoji
logger.info('This is information!')
logger.warn('This is a warning!')
logger.error('This is a problem!')
logger.debug('This is a debug! ')
logger.verbose('This is a verbose!')
