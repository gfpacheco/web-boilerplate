var environment = process.env.NODE_ENV || 'development'; // eslint-disable-line
environment = {
  raw: environment,
  isDevelopment: environment === 'development',
  isProduction: environment === 'production',
};

module.exports = {
  environment,
  webpack: require('./webpack.config')(environment),
};
