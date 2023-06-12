"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("../validators");
function isJSXAttribute(node) {
    return node.type === "JSXAttribute";
}
function isJSXExpressionContainer(value) {
    return value.type === "JSXExpressionContainer";
}
function isProperty(node) {
    return node.type === "Property";
}
const noInvalidInlineStyle = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow invalid inline styles",
            category: "Possible Errors",
            recommended: true,
        },
        schema: [],
    },
    create: function (context) {
        return {
            JSXAttribute(node) {
                if (isJSXAttribute(node) && node.name.name === "style") {
                    const value = node.value;
                    if (value && isJSXExpressionContainer(value)) {
                        if (value.expression.type === "ObjectExpression") {
                            const properties = value.expression.properties;
                            properties.forEach((property) => {
                                if (isProperty(property) && property.key.type === "Identifier" && property.value.type === "Literal") {
                                    const propertyName = property.key.name;
                                    // validate style property
                                    const isValid = (0, validators_1.isValidPropertyValue)(propertyName, property.value.value);
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
exports.default = noInvalidInlineStyle;
