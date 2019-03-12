// Ideally, this would be a compile-time function or even rendered on the server.
/**
 * @typedef {Object} Config
 * @property {Array<Page>} pages - An array of the possible screens the wizard may show
 * ---
 * @typedef {Object} Page
 * @property {string} name - A unique identifier for the page
 * @property {string|React.Component} description - The text or component to display before the options
 * @property {Array<Choice>} choices - An array of the possible choices a user can select from
 * @property {Array<Action>} actions - An array of the possible calls to action on the page
 * ---
 * @typedef {Object} Choice
 * @property {string} type - The type of component to render
 * @property {string} nextPage - The name of the next page when this option is selected
 * There may be other configuration properties such as description, depending on the type.
 * ---
 * @typedef {Object} Action
 * @property {string} type - The type of component to render
 * Each type of action will require its own configuration properties, such as description, classList, and href.
 * ---
 * Takes a configuration and returns a wizard.
 * @param {Config} config
 * @return {React.Component}
 */
export default function createWizard(config) {
  // This might be better off as a react component, I'm not sure yet.
  // The general idea is basically this:
  // The main container keeps track of the page stack in local state
  // It would also need to keep track of the state each page leaves (which choice was selected,
  //  what was entered into a text field, etc.)
  // It would render the last page in the stack
  // The page would be passed
  //   - A callback tha accepts the name of the next page to render
  //   - The configuration for the current page
  //   - Maybe the whole configuration
  // If there are no actions for a page, assume there are special { type: 'back' } and
  //  { type: 'next' }, which do what they say on the tin.
  // Treating those buttons as regular actions allows us to tap into them if we want to use custom
  //  actions with or without them.
  // Choices don't need to be radio buttons, but will probably just be that for a while.
  // That said, page state shouldn't be limited to just which radio was selected.

  // Satisfy the linter
  return config;
}
