module.exports = {
  appName: 'Veteran Wizard',
  entryFile: './veteran-wizard.jsx',
  entryName: 'veteran-wizard',
  receiveContentProps({ path: rootUrl }) {
    this.rootUrl = `/${rootUrl}`;
  },
};

// npm run watch -- --entry app-demo,static-pages
