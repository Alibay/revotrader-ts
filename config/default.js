const {
  REVOTRADER_PRODUCT_PARSE_YML,
  REVOTRADER_PORT,
} = process.env;

module.exports = {
  port: REVOTRADER_PORT || 3000,

  cron: {
    product: {
      parseYml: REVOTRADER_PRODUCT_PARSE_YML || '0 * * * * *',
    }
  }
};