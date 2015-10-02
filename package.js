var packageName = 'hhravn:angular-ui-codemirror';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.3.0';
var summary = 'This directive allows you to add CodeMirror to your textarea elements.';
var gitLink = 'https://github.com/hhravn/ui-codemirror';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions
  api.addFiles('./src/ui-codemirror.js', where); // Files in use
});  