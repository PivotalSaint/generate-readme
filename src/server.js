require('http')
  .createServer(function (req, res) {
    var fs = require('fs'),
      // Use the following version if you installed the package with npm:
      tmpl = require("blueimp-tmpl")
      // Sample data:
      data = {
        title: 'JavaScript Templates',
        url: 'https://github.com/blueimp/JavaScript-Templates',
        features: ['lightweight & fast', 'powerful', 'zero dependencies']
      }
    // Override the template loading method:
    tmpl.load = function (id) {
      var filename = id + '.html'
      console.log('Loading ' + filename)
      return fs.readFileSync(filename, 'utf8')
    }
    res.writeHead(200, { 'Content-Type': 'text/x-tmpl' })
    // Render the content:
    res.end(tmpl('template', data))
  })
  .listen(8080, 'localhost')
console.log('Server running at http://localhost:8080/')