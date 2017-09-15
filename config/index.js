const { NODE_ENV } = process.env;


export const APP_CONFIG = () => {
  switch (NODE_ENV) {
    case 'production':
      return {};
    case 'development':
      return {
        api: {
          host: 'http://localhost:8000',
        },
      };
    default:
      return {
        api: {
          host: 'http://localhost:8000',
        },
      };
  }
};

