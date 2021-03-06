/**
 * A Drupal paragraph containing a collapsible panel with child items
 *
 */
module.exports = `
  fragment collapsiblePanel on ParagraphCollapsiblePanel {      
      fieldCollapsiblePanelMulti
      fieldCollapsiblePanelExpand
      fieldCollapsiblePanelBordered
      fieldVaParagraphs {
        entity {
          ... on ParagraphCollapsiblePanelItem {
            entityId
            entityBundle
            fieldTitle
            fieldWysiwyg {
              processed
            }
          }
        }
      }
  }
`;
