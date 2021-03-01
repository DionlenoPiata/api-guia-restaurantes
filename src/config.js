global.SALT_KEY = "umastringaleatoria";

module.exports = {
  titleApplication: "API guia de restaurantes",
  versionApplication: "1.0.0",
  port: "3333",
  conectionString: "mongodb://localhost:27017/guia-restaurantes",
  tokenExpiresIn: "1d",
  headersNameToken: "authorization",
  limit: "100",
};
