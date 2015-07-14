#!/usr/bin/env node
'use strict';
var meow = require('meow');
var getHostsCli = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ get-hosts [--pretty]',
    '',
    'Examples',
    '  $ get-hosts',
    "  [ [ '127.0.0.1', 'localhost' ],",
    "  [ '::1', 'ip6-localhost ip6-loopback' ],",
    "  [ 'fe00::0', 'ip6-localnet' ],",
    "  [ 'ff00::0', 'ip6-mcastprefix' ],",
    "  [ 'ff02::1', 'ip6-allnodes' ],",
    "  [ 'ff02::2', 'ip6-allrouters' ] ]",
    '',
    'Options',
    '  -p, --pretty  Show as a table. Default: false',
    ''
  ]
}, {alias: {p: 'pretty'}});

getHostsCli(cli.flags);
