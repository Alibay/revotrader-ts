const e = process.env;

module.exports = {
  port: e.REVOTRADER_PORT || 3000,

  cron: {
    product: {
      parseYml: e.REVOTRADER_PRODUCT_PARSE_YML || '0 * * * * *',
    }
  },

  database: {
    type: 'postgres',
    host: e.REVOTRADER_DATABASE_HOST || 'localhost',
    port: e.REVOTRADER_DATABASE_PORT || 5432,
    username: e.REVOTRADER_DATABASE_USERNAME || 'username',
    password: e.REVOTRADER_DATABASE_PASSWORD || 'password',
    database: e.REVOTRADER_DATABASE_DATABASE || 'database',
  },

  auth: {
    saltRounds: e.REVOTRADER_AUTH_SALT_ROUNDS || 10,
  },
};