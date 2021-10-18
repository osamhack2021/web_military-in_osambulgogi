module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'yarn',
      cwd: '/app/WEB(BE)',
      args: 'start',
      autorestart: true,
      watch: false,
      error_file: '/data/log/backend_err.log',
      out_file: '/data/log/backend.log',
      interpreter: '/bin/sh',
      env_production: {
        NODE_ENV: 'production'
      },
      env_development: {
        NODE_ENV: 'development'
      }
    },
    {
      name: 'frontend',
      script: 'yarn',
      cwd: '/app/WEB(FE)',
      args: 'start',
      autorestart: true,
      watch: false,
      error_file: '/data/log/frontend_err.log',
      out_file: '/data/log/frontend.log',
      interpreter: '/bin/sh',
      env_production: {
        NODE_ENV: 'production'
      },
      env_development: {
        NODE_ENV: 'development'
      }
    }
  ],
  deploy: {
    production: {
      path: '/app'
    }
  }
}
