// Serve apps using pm2 eg. `pm2 start app.config.cjs'

module.exports = {
    apps: [
      {
        exec_mode: 'cluster',
        script: 'serve',
        watch: false,
        env: {
          PM2_SERVE_PATH: './dist',
          PM2_SERVE_PORT: 5174,
          PM2_SERVE_SPA: 'true',
        },
        instances: '1',
        name: 'itsencrypted',
      },
    ],
  }