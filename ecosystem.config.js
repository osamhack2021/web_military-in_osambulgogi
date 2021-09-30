module.exports = {
  apps: [
    {
      name: 'proxy',
      script: 'nginx',
      args: '-c ./nginx.conf',
      error_file: '$LOG_PATH/nginx_err.log',
      out_file: '$LOG_PATH/nginx.log'
    },
    {
      name: 'backend',
      script: 'yarn',
      args: '--cwd ./backend dev',
      autorestart: true,
      watch: false,
      instances: 0,
      error_file: '$LOG_PATH/backend_err.log',
      out_file: '$LOG_PATH/backend.log',
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
      args: '--cwd ./frontend start',
      autorestart: true,
      watch: false,
      instances: 0,
      error_file: '$LOG_PATH/frontend_err.log',
      out_file: '$LOG_PATH/frontend.log',
      env_production: {
        NODE_ENV: 'production',
        LOG_PATH: '/data/log'
      },
      env_development: {
        NODE_ENV: 'development',
        LOG_PATH: './log'
      }
    }
  ],
  deploy: {
    production: {
      path: '/app'
    }
  }
}
