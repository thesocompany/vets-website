module.exports = {
  appName: 'Burial Eligiliblity',
  entryFile: './app-demo-entry.jsx',
  entryName: 'app-demo',
  receiveContentProps({ path: rootUrl }) {
    this.rootUrl = `/${rootUrl}`;
  },
};

// npm run watch -- --entry app-demo,static-pages
