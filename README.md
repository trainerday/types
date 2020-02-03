

start verdaccio
increase version
npm run build
npm publish --registry http://localhost:4873/

on other project
env NPM_CONFIG_REGISTRY=http://localhost:4873 npm i ergdb-types
