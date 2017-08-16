const files = require.context('.', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  if (key === './index.js') {
    return (modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default);
  }
  return 0;
});

export default modules;
