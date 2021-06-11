/**
 * @fileoverview Rule to disallow scary words in comments
 * @author Lachlan McMillan
 * 
 * rule reference: https://eslint.org/docs/developer-guide/working-with-rules
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  // metadata about rule
  meta: {
    type: "suggestion",
    fixable: "code",
    schema: [], // no options
  },

  create: (context) => {
    const sourceCode = context.getSourceCode();

    const checkComment = (node) => {
      const commentText = node.value;

      if (commentText.search(/danger/) !== -1) {
        // call context.report to report a violation of the rule
        context.report({
          node,
          message: "scary word 'danger' not allowed",
      });
      }

    }

    // return callbacks which eslint calls to visit nodes while traversing
    // the AST
    return {
      // Program is the highest level of the AST
      Program: () => {
        const commentNodes = sourceCode.getAllComments();
        commentNodes.forEach(checkComment);
      }
    };
  },
};
