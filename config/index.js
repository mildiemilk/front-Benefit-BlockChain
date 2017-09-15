// const { NODE_ENV } = process.env;


const APP_CONFIG = function () {
  switch (process.env.ENV) {
    case 'production':
      return {};
    case 'development':
      return {
        api: {
          host: process.env.API_SERVER_PROTOCOL + '://' + process.env.API_SERVER_HOST + ':' + process.env.API_SERVER_PORT,
        },
      };
    default:
      return {
        api: {
          host: process.env.API_SERVER_PROTOCOL + '://' + process.env.API_SERVER_HOST + ':' + process.env.API_SERVER_PORT,
        },
      };
  }
};


export default APP_CONFIG;
