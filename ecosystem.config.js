module.exports = {
    apps: [
      {
        name: 'todoapp',
        script: 'index.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production',
          DB_HOST: 'demo-rds-instance.crc2acgegiy8.us-east-1.rds.amazonaws.com',
          DB_USER: 'todouser',
          DB_PASSWORD: 'todoPass@123',
          DB_DATABASE: 'todoslist',
        },
      },
    ],
  };