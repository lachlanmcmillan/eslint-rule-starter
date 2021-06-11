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
  create: (context) => {
    const sourceCode = context.getSourceCode();

    const checkComment = (node) => {
      const commentText = node.value;

      if (commentText.search(/danger/) !== -1) {
        context.report({
          node,
          message: "scary word 'danger' not allowed",
        });
      }
    };

    return {
      // Program is the highest level node of the AST
      Program: () => {
        const commentNodes = sourceCode.getAllComments();
        commentNodes.forEach(checkComment);
      },
    };
  },
};
