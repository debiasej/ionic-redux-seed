import sharedEnvironment from './base'

export const environment = {
  ...sharedEnvironment,
  production: false,
  environment: 'dev',
  e2eUrl: 'http://localhost:49152',
  googleTagManagerKey: 'GTM-XXXXXXX'
}
