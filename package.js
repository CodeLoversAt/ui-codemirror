'use strict';
var packageName = 'codelovers:angular-ui-codemirror-all-modes';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.3.2';
var summary = 'This directive allows you to add CodeMirror to your textarea elements. Includes all modes';
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
  api.addFiles('./bower_components/codemirror/lib/codemirror.css', where); // Files in use
  api.addFiles('./bower_components/codemirror/lib/codemirror.js', where); // Files in use
  api.addFiles('./src/ui-codemirror.js', where); // Files in use

  // add simple mode addon
  api.addFiles([
    './bower_components/codemirror/addon/mode/simple.js'
  ], where);

  // add modes
  api.addFiles([
    './bower_components/codemirror/mode/apl/apl.js',
    './bower_components/codemirror/mode/asciiarmor/asciiarmor.js',
    './bower_components/codemirror/mode/asn.1/asn.1.js',
    './bower_components/codemirror/mode/asterisk/asterisk.js',
    './bower_components/codemirror/mode/brainfuck/brainfuck.js',
    './bower_components/codemirror/mode/clike/clike.js',
    './bower_components/codemirror/mode/clojure/clojure.js',
    './bower_components/codemirror/mode/cmake/cmake.js',
    './bower_components/codemirror/mode/cobol/cobol.js',
    './bower_components/codemirror/mode/coffeescript/coffeescript.js',
    './bower_components/codemirror/mode/commonlisp/commonlisp.js',
    './bower_components/codemirror/mode/css/css.js',
    './bower_components/codemirror/mode/cypher/cypher.js',
    './bower_components/codemirror/mode/d/d.js',
    './bower_components/codemirror/mode/dart/dart.js',
    './bower_components/codemirror/mode/diff/diff.js',
    './bower_components/codemirror/mode/django/django.js',
    './bower_components/codemirror/mode/dockerfile/dockerfile.js',
    './bower_components/codemirror/mode/dtd/dtd.js',
    './bower_components/codemirror/mode/dylan/dylan.js',
    './bower_components/codemirror/mode/ebnf/ebnf.js',
    './bower_components/codemirror/mode/ecl/ecl.js',
    './bower_components/codemirror/mode/eiffel/eiffel.js',
    './bower_components/codemirror/mode/elm/elm.js',
    './bower_components/codemirror/mode/erlang/erlang.js',
    './bower_components/codemirror/mode/factor/factor.js',
    './bower_components/codemirror/mode/forth/forth.js',
    './bower_components/codemirror/mode/fortran/fortran.js',
    './bower_components/codemirror/mode/gas/gas.js',
    './bower_components/codemirror/mode/gfm/gfm.js',
    './bower_components/codemirror/mode/gherkin/gherkin.js',
    './bower_components/codemirror/mode/go/go.js',
    './bower_components/codemirror/mode/groovy/groovy.js',
    './bower_components/codemirror/mode/haml/haml.js',
    './bower_components/codemirror/mode/handlebars/handlebars.js',
    './bower_components/codemirror/mode/haskell/haskell.js',
    './bower_components/codemirror/mode/haxe/haxe.js',
    './bower_components/codemirror/mode/htmlembedded/htmlembedded.js',
    './bower_components/codemirror/mode/htmlmixed/htmlmixed.js',
    './bower_components/codemirror/mode/http/http.js',
    './bower_components/codemirror/mode/idl/idl.js',
    './bower_components/codemirror/mode/jade/jade.js',
    './bower_components/codemirror/mode/javascript/javascript.js',
    './bower_components/codemirror/mode/jinja2/jinja2.js',
    './bower_components/codemirror/mode/julia/julia.js',
    './bower_components/codemirror/mode/livescript/livescript.js',
    './bower_components/codemirror/mode/lua/lua.js',
    './bower_components/codemirror/mode/markdown/markdown.js',
    './bower_components/codemirror/mode/mathematica/mathematica.js',
    './bower_components/codemirror/mode/meta.js',
    './bower_components/codemirror/mode/mirc/mirc.js',
    './bower_components/codemirror/mode/mllike/mllike.js',
    './bower_components/codemirror/mode/modelica/modelica.js',
    './bower_components/codemirror/mode/mscgen/mscgen.js',
    './bower_components/codemirror/mode/mumps/mumps.js',
    './bower_components/codemirror/mode/nginx/nginx.js',
    './bower_components/codemirror/mode/nsis/nsis.js',
    './bower_components/codemirror/mode/ntriples/ntriples.js',
    './bower_components/codemirror/mode/octave/octave.js',
    './bower_components/codemirror/mode/oz/oz.js',
    './bower_components/codemirror/mode/pascal/pascal.js',
    './bower_components/codemirror/mode/pegjs/pegjs.js',
    './bower_components/codemirror/mode/perl/perl.js',
    './bower_components/codemirror/mode/php/php.js',
    './bower_components/codemirror/mode/pig/pig.js',
    './bower_components/codemirror/mode/properties/properties.js',
    './bower_components/codemirror/mode/puppet/puppet.js',
    './bower_components/codemirror/mode/python/python.js',
    './bower_components/codemirror/mode/q/q.js',
    './bower_components/codemirror/mode/r/r.js',
    './bower_components/codemirror/mode/rpm/rpm.js',
    './bower_components/codemirror/mode/rst/rst.js',
    './bower_components/codemirror/mode/ruby/ruby.js',
    './bower_components/codemirror/mode/rust/rust.js',
    './bower_components/codemirror/mode/sass/sass.js',
    './bower_components/codemirror/mode/scheme/scheme.js',
    './bower_components/codemirror/mode/shell/shell.js',
    './bower_components/codemirror/mode/sieve/sieve.js',
    './bower_components/codemirror/mode/slim/slim.js',
    './bower_components/codemirror/mode/smalltalk/smalltalk.js',
    './bower_components/codemirror/mode/smarty/smarty.js',
    './bower_components/codemirror/mode/solr/solr.js',
    './bower_components/codemirror/mode/soy/soy.js',
    './bower_components/codemirror/mode/sparql/sparql.js',
    './bower_components/codemirror/mode/spreadsheet/spreadsheet.js',
    './bower_components/codemirror/mode/sql/sql.js',
    './bower_components/codemirror/mode/stex/stex.js',
    './bower_components/codemirror/mode/stylus/stylus.js',
    './bower_components/codemirror/mode/swift/swift.js',
    './bower_components/codemirror/mode/tcl/tcl.js',
    './bower_components/codemirror/mode/textile/textile.js',
    './bower_components/codemirror/mode/tiddlywiki/tiddlywiki.css',
    './bower_components/codemirror/mode/tiddlywiki/tiddlywiki.js',
    './bower_components/codemirror/mode/tiki/tiki.css',
    './bower_components/codemirror/mode/tiki/tiki.js',
    './bower_components/codemirror/mode/toml/toml.js',
    './bower_components/codemirror/mode/tornado/tornado.js',
    './bower_components/codemirror/mode/troff/troff.js',
    './bower_components/codemirror/mode/ttcn/ttcn.js',
    './bower_components/codemirror/mode/ttcn-cfg/ttcn-cfg.js',
    './bower_components/codemirror/mode/turtle/turtle.js',
    './bower_components/codemirror/mode/twig/twig.js',
    './bower_components/codemirror/mode/vb/vb.js',
    './bower_components/codemirror/mode/vbscript/vbscript.js',
    './bower_components/codemirror/mode/velocity/velocity.js',
    './bower_components/codemirror/mode/verilog/verilog.js',
    './bower_components/codemirror/mode/vhdl/vhdl.js',
    './bower_components/codemirror/mode/vue/vue.js',
    './bower_components/codemirror/mode/xml/xml.js',
    './bower_components/codemirror/mode/xquery/xquery.js',
    './bower_components/codemirror/mode/yaml/yaml.js',
    './bower_components/codemirror/mode/z80/z80.js'
  ], where);
});
