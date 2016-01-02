var environment = process.env.NODE_ENV || 'development';
environment = {
  raw: environment,
  isDevelopment: environment === 'development',
  isProduction: environment === 'production'
};

module.exports = {
  environment: environment,
  webpack: require('./webpack.config')(environment)
};
