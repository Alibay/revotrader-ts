const {
  REVOTRADER_DELETE_DISABLED_USERS
} = process.env;

module.exports = {
  cron: {
    deleteDisabledUsers: REVOTRADER_DELETE_DISABLED_USERS || '* * * * * *'
  }
};