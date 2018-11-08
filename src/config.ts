import * as envVar from 'env-var';

const config = {
    node_env: envVar.get('NODE_ENV', 'development'),
    hello: 'world'
};

export default config;