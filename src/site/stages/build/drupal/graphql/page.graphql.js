const entityElementsFromPages = require('./entityElementsForPages.graphql');
const { FIELD_ALERT } = require('./block-fragments/alert.block.graphql');
const {
  FIELD_RELATED_LINKS,
} = require('./paragraph-fragments/listOfLinkTeasers.paragraph.graphql');
/**
 * A standard content page, that is ordinarily two-levels deep (a child page of a landingPage)
 * For example, /health-care/apply.
 */

const WYSIWYG = '... wysiwyg';
const COLLAPSIBLE_PANEL = '... collapsiblePanel';
const PROCESS = '... process';
const QA_SECTION = '... qaSection';
const QA = '... qa';
const LIST_OF_LINK_TEASERS = '... listOfLinkTeasers';
const REACT_WIDGET = '... reactWidget';
const SPANISH_SUMMARY = '... spanishSummary';

module.exports = `

  fragment page on NodePage {
    ${entityElementsFromPages}
    fieldIntroText
    fieldDescription
    fieldFeaturedContent {
      entity {
        entityType
        entityBundle
        ${WYSIWYG}      
        ${QA}        
      }
    }
    fieldContentBlock {
      entity {
        entityType
        entityBundle
        ${WYSIWYG}
        ${COLLAPSIBLE_PANEL}
        ${PROCESS}
        ${QA_SECTION}
        ${LIST_OF_LINK_TEASERS}
        ${REACT_WIDGET} 
        ${SPANISH_SUMMARY}
      }
    }
    ${FIELD_ALERT} 
    ${FIELD_RELATED_LINKS}
    fieldPageLastBuilt {
      date
    }    
    changed    
  }
`;
