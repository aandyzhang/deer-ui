const { execSync } = require('child_process');
try {
    execSync(`cd docs; npm run publish:docs;`);
  } catch (err) {
    console.log(err);
  }
