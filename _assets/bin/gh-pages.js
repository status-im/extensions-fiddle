#!/usr/bin/env node

var ghpages = require('gh-pages')

if (!process.env.GH_REPO) { throw "Env variable GH_REPO needs to be set!" }
if (!process.env.GH_USER) { throw "Env variable GH_USER needs to be set!" }
if (!process.env.GH_PASS) { throw "Env variable GH_PASS needs to be set!" }
 
console.log('Deploying...')

ghpages.publish('resources/public', {
  repo: ( 
    'https://'
    + process.env.GH_USER + ':'
    + process.env.GH_PASS
    + `@github.com/${process.env.GH_REPO}.git`
  ),
  message: 'Deploying latest version',
  branch: 'gh-pages',
  dotfiles: true,
  silent: false,
}, function(err) {
  if (err !== undefined) {
    console.error(err)
    process.exit(1)
  } else {
    console.log(`Successfully deployed to ${process.env.GH_REPO}!`)
  }
})
