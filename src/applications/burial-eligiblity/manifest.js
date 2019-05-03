module.exports = {
  appName: 'Burial Eligiliblity',
  entryFile: './app-demo.jsx',
  entryName: 'app-demo',
  receiveContentProps({ path: rootUrl }) {
    this.rootUrl = `/${rootUrl}`;
  },
};

// npm run watch -- --entry app-demo,static-pages
