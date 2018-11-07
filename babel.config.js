module.exports = function Index(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
