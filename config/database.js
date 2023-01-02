const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {

    if (env('NODE_ENV') === 'production') {
        const config = parse(process.env.DATABASE_URL)

        return {
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
        }
    }

    return {
        connection: {
            client: 'postgres',
            connection: {
                host: process.env.DATEBASE_HOST,
                port: process.env.DATEBASE_PORT,
                database: process.env.DATEBASE_NAME,
                user: process.env.DATEBASE_USERNAME,
                password: process.env.DATEBASE_PASSWORD,
            },
            debug: false,
        },
    }
};

