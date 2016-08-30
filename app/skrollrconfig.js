const _skrolConfig = {};

_skrolConfig['aian-hiw'] = {
  "data-0"    : "position:relative;",
  "data-1266" : "position:fixed;top:0px;",
  "data-2000" : "position:relative;"
}

_skrolConfig['aian-features'] = {
  "data-0"    : "position:relative;",
  "data-1266" : "position:fixed;top:100%;",
  "data-2000" : "position: relative"
}

const skrolConfig = (id) => { return {} || _skrolConfig[id] || {}; }
export default skrolConfig;