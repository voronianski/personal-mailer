module.exports = {
  port: process.env.NODE_PORT || process.env.PORT || 3030,
  mongodb: {
    host: process.env.MONGODB_HOST || 'localhost',
    port: process.env.MONGODB_PORT || 27017,
    name: process.env.MONGODB_NAME || 'personalmailerdb',
    connection: 'mongodb://$(mongodb.host):$(mongodb.port)/$(mongodb.name)',
    options: {}
  },
  gmail: {
    user: process.env.GMAIL_USER,
    password: process.env.GMAIL_PASS
  }
};
