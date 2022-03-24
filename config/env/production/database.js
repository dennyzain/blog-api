const parse = require('pg-connection-string').parse;
    const config = parse(process.env.DATABASE_URL);
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: false
          },
        },
        debug: false,
      },
    });
    postgres://znwlyclahrfncc:b3986732a26aa206366187edc32eb34ffbfe390e84e8102fa145d7750647b004@ec2-3-225-213-67.compute-1.amazonaws.com:5432/d7vtbgpjohujg1