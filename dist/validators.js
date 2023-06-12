"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProperty = exports.isJSXExpressionContainer = exports.isJSXAttribute = exports.isValidPropertyValue = void 0;
const style_properties_1 = require("./style-properties");
function isObject(input) {
    return (input !== null &&
        typeof input === "object" &&
        !(input instanceof Number) &&
        !(input instanceof String) &&
        !(input instanceof Boolean) &&
        !(input instanceof Array) &&
        !(input instanceof Function) &&
        !(input instanceof Date));
}
function isString(value) {
    return typeof value === "string";
}
function isArray(value) {
    return Array.isArray(value);
}
function isBoolean(value) {
    return typeof value === "boolean";
}
function isFunction(value) {
    return typeof value === "function";
}
function isDate(value) {
    return value instanceof Date;
}
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
function isColor(value) {
    // [TODO]: check for all valid color variations
    return isString(value);
}
function isValidPropertyValue(propertyName, value, context) {
    try {
        const propertyDefinition = style_properties_1.styleProperties[propertyName];
        if (!propertyDefinition) {
            return false;
        }
        // Handle case: Check for undefined or null values
        if (value === undefined || value === null) {
            return false;
        }
        const { type, values, properties, items } = propertyDefinition;
        const typeCheckers = {
            string: isString,
            numeric: isNumeric,
            object: isObject,
            array: isArray,
            boolean: isBoolean,
            function: isFunction,
            date: isDate,
            color: isColor,
        };
        const types = Array.isArray(type) ? type : [type];
        for (const t of types) {
            if (!t)
                continue; // Add this check to ensure t is defined before using it as an index
            const typeChecker = typeCheckers[t];
            if (typeChecker && typeChecker(value)) {
                if (t === "string" && values) {
                    const validValue = values[value];
                    if (validValue) {
                        if (validValue.context && context) {
                            return validValue.context.some((ctx) => context.includes(ctx));
                        }
                        return true;
                    }
                    return false;
                }
                // Handle case: Check for nested properties
                if (t === "object" && properties) {
                    return Object.keys(value).every((key) => isValidPropertyValue(key, value[key], context));
                }
                if (t === "array" && items) {
                    return value.every((item) => isValidPropertyValue(propertyName, item, context));
                }
                return true;
            }
        }
        return false;
    }
    catch (error) {
        return false;
    }
}
exports.isValidPropertyValue = isValidPropertyValue;
function isJSXAttribute(node) {
    return node.type === "JSXAttribute";
}
exports.isJSXAttribute = isJSXAttribute;
function isJSXExpressionContainer(value) {
    return value.type === "JSXExpressionContainer";
}
exports.isJSXExpressionContainer = isJSXExpressionContainer;
function isProperty(node) {
    return node.type === "Property";
}
exports.isProperty = isProperty;
