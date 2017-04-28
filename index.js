var pythonShell = require('python-shell');

var options = {
  mode: 'text',
  pythonPath: '/usr/bin/python3',
  pythonOptions: ['-u'],
  scriptPath: '/root/Litecoin.Network/python/',
  args: ['']
};

pythonShell.run('counter.py', options, function (err, results) {
  if (err) throw err;

  o = {
    satoshi : JSON.parse(results)
  }

  console.log(JSON.stringify(o));
});
