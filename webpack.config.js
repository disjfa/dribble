const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('build/')
  .setPublicPath('/dribble/build')
  .setManifestKeyPrefix('build')
  .addEntry('dribble', './js/dribble.js')
  .enableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction())
  .enableSassLoader()
  .autoProvidejQuery()
;

if (Encore.isProduction()) {
  Encore
    .cleanupOutputBeforeBuild()
    .enableVersioning()
  ;
}

module.exports = Encore.getWebpackConfig();
