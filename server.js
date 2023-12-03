const { exec } = require('child_process');

module.exports = function(app) {
  const executeUnixCommand = async (data) => {
    const { host, database, schema, newPassword } = data;
    const commandToExecute = `ssh ${host} ${DBA_FS}/DBA/bin/accunlock -d ${database} -S ${schema} -a unlock`;

    return new Promise((resolve, reject) => {
      exec(commandToExecute, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          reject(error.message);
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          reject(stderr);
        }
        console.log(`stdout: ${stdout}`);
        resolve(stdout);
      });
    });
  };

  app.post('/api/executeUnixCommand', async (req, res) => {
    try {
      const result = await executeUnixCommand(req.body);
      res.send(result);
    } catch (error) {
      console.error('An error occurred while executing the Unix command:', error);
      res.status(500).send({ error: 'An error occurred while executing the Unix command.' });
    }
  });
};
