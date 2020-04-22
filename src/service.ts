import Seneca from 'seneca'

const service = Seneca({
  quiet: true
})

service.use('mesh', {
  base: true
})
