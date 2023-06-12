import { Rule } from "eslint";
import { TSESTree } from "@typescript-eslint/experimental-utils";
import { isValidPropertyValue } from "../validators";

function isJSXAttribute(node: TSESTree.Node): node is TSESTree.JSXAttribute {
  return node.type === "JSXAttribute";
}

function isJSXExpressionContainer(value: TSESTree.Node): value is TSESTree.JSXExpressionContainer {
  return value.type === "JSXExpressionContainer";
}

function isProperty(node: TSESTree.Node): node is TSESTree.Property {
  return node.type === "Property";
}

const noInvalidInlineStyle: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow invalid inline styles",
      category: "Possible Errors",
      recommended: true,
    },
    schema: [],
  },

  create: function (context: Rule.RuleContext): Rule.RuleListener {
    return {
      JSXAttribute(node: any) {
        if (isJSXAttribute(node) && node.name.name === "style") {
          const value = node.value;
          if (value && isJSXExpressionContainer(value)) {
            if (value.expression.type === "ObjectExpression") {
              const properties = value.expression.properties;
              properties.forEach((property: TSESTree.ObjectLiteralElement) => {
                if (isProperty(property) && property.key.type === "Identifier" && property.value.type === "Literal") {
                  const propertyName = property.key.name;

                  // validate style property
                  const isValid = isValidPropertyValue(propertyName, property.value.value);

                  if (!isValid) {
                    context.report({
                      node: property.key,
                      message: `-> Invalid style property: '${propertyName}'.`,
                    });
                  }
                }
              });
            }
          }
        }
      },
    };
  },
};

export default noInvalidInlineStyle;
