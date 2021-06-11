/**
 * @fileoverview Rule to disallow importing from the eslint folder
 * @author Lachlan McMillan
 * 
 * rule reference: https://eslint.org/docs/developer-guide/working-with-rules
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = (context) => {
  return {
    ImportDeclaration(node) {
      const value = node.source.value;
      if (value.search(/\.+\/eslint/) !== -1) {
        context.report({
          node,
          message: "cannot import from the eslint directory",
        })
      }
    }
  }
};
