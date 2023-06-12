import { TSESTree } from "@typescript-eslint/experimental-utils";
import { styleProperties } from "./style-properties";

function isObject(input: any) {
  return (
    input !== null &&
    typeof input === "object" &&
    !(input instanceof Number) &&
    !(input instanceof String) &&
    !(input instanceof Boolean) &&
    !(input instanceof Array) &&
    !(input instanceof Function) &&
    !(input instanceof Date)
  );
}

function isString(value: any) {
  return typeof value === "string";
}

function isArray(value: any) {
  return Array.isArray(value);
}

function isBoolean(value: any) {
  return typeof value === "boolean";
}

function isFunction(value: any) {
  return typeof value === "function";
}

function isDate(value: any) {
  return value instanceof Date;
}

function isNumeric(value: any) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function isColor(value: any) {
  // [TODO]: check for all valid color variations
  return isString(value);
}
export function isValidPropertyValue(propertyName: string, value: any, context?: string[]): boolean {
  try {
    const propertyDefinition = styleProperties[propertyName];

    if (!propertyDefinition) {
      return false;
    }

    // Handle case: Check for undefined or null values
    if (value === undefined || value === null) {
      return false;
    }

    const { type, values, properties, items } = propertyDefinition;

    const typeCheckers: { [key: string]: (value: any) => boolean } = {
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
      if (!t) continue; // Add this check to ensure t is defined before using it as an index

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
          return value.every((item: any) => isValidPropertyValue(propertyName, item, context));
        }
        return true;
      }
    }

    return false;
  } catch (error) {
    return false;
  }
}

export function isJSXAttribute(node: TSESTree.Node): node is TSESTree.JSXAttribute {
  return node.type === "JSXAttribute";
}

export function isJSXExpressionContainer(value: TSESTree.Node): value is TSESTree.JSXExpressionContainer {
  return value.type === "JSXExpressionContainer";
}

export function isProperty(node: TSESTree.Node): node is TSESTree.Property {
  return node.type === "Property";
}
