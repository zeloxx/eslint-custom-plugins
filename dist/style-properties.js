"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleProperties = void 0;
exports.styleProperties = {
    display: {
        type: "string",
        values: {
            none: { type: "string", value: "none" },
            flex: { type: "string", value: "flex" },
        },
    },
    flexDirection: {
        type: "string",
        values: {
            row: { type: "string", value: "row" },
            column: { type: "string", value: "column" },
            "row-reverse": { type: "string", value: "row-reverse" },
            "column-reverse": { type: "string", value: "column-reverse" },
        },
    },
    justifyContent: {
        type: "string",
        values: {
            "flex-start": { type: "string", value: "flex-start" },
            "flex-end": { type: "string", value: "flex-end" },
            center: { type: "string", value: "center" },
            "space-between": { type: "string", value: "space-between" },
            "space-around": { type: "string", value: "space-around" },
            "space-evenly": { type: "string", value: "space-evenly" },
        },
    },
    alignItems: {
        type: "string",
        values: {
            "flex-start": { type: "string", value: "flex-start" },
            "flex-end": { type: "string", value: "flex-end" },
            center: { type: "string", value: "center" },
            stretch: { type: "string", value: "stretch" },
            baseline: { type: "string", value: "baseline" },
        },
    },
    alignSelf: {
        type: "string",
        values: {
            auto: { type: "string", value: "auto" },
            "flex-start": { type: "string", value: "flex-start" },
            "flex-end": { type: "string", value: "flex-end" },
            center: { type: "string", value: "center" },
            stretch: { type: "string", value: "stretch" },
            baseline: { type: "string", value: "baseline" },
        },
    },
    alignContent: {
        type: "string",
        values: {
            "flex-start": { type: "string", value: "flex-start" },
            "flex-end": { type: "string", value: "flex-end" },
            center: { type: "string", value: "center" },
            stretch: { type: "string", value: "stretch" },
            "space-between": { type: "string", value: "space-between" },
            "space-around": { type: "string", value: "space-around" },
        },
    },
    flexWrap: {
        type: "string",
        values: {
            wrap: { type: "string", value: "wrap" },
            nowrap: { type: "string", value: "nowrap" },
            "wrap-reverse": { type: "string", value: "wrap-reverse" },
        },
    },
    overflow: {
        type: "string",
        values: {
            visible: { type: "string", value: "visible" },
            hidden: { type: "string", value: "hidden" },
            scroll: { type: "string", value: "scroll", context: ["ScrollViewStyle"] }, // not valid in ViewStyle but is valid in ScrollViewStyle (need to check context)
        },
    },
    position: {
        type: "string",
        values: {
            absolute: { type: "string", value: "absolute" },
            relative: { type: "string", value: "relative" },
        },
    },
    textAlign: {
        type: "string",
        values: {
            auto: { type: "string", value: "auto" },
            left: { type: "string", value: "left" },
            right: { type: "string", value: "right" },
            center: { type: "string", value: "center" },
            justify: { type: "string", value: "justify" },
        },
    },
    textDecorationLine: {
        type: "string",
        values: {
            none: { type: "string", value: "none" },
            underline: { type: "string", value: "underline" },
            "line-through": { type: "string", value: "line-through" },
            "underline line-through": { type: "string", value: "underline line-through" },
        },
    },
    textTransform: {
        type: "string",
        values: {
            none: { type: "string", value: "none" },
            capitalize: { type: "string", value: "capitalize" },
            uppercase: { type: "string", value: "uppercase" },
            lowercase: { type: "string", value: "lowercase" },
        },
    },
    fontWeight: {
        type: "string",
        values: {
            normal: { type: "string", value: "normal" },
            bold: { type: "string", value: "bold" },
            "100": { type: "string", value: "100" },
            "200": { type: "string", value: "200" },
            "300": { type: "string", value: "300" },
            "400": { type: "string", value: "400" },
            "500": { type: "string", value: "500" },
            "600": { type: "string", value: "600" },
            "700": { type: "string", value: "700" },
            "800": { type: "string", value: "800" },
            "900": { type: "string", value: "900" },
        },
    },
    textShadowOffset: {
        type: "object",
        properties: {
            width: { type: "numeric" },
            height: { type: "numeric" },
        },
    },
    verticalAlign: {
        type: "string",
        values: {
            auto: { type: "string", value: "auto" },
            top: { type: "string", value: "top" },
            bottom: { type: "string", value: "bottom" },
            middle: { type: "string", value: "middle" },
        },
    },
    textAlignVertical: {
        type: "string",
        values: {
            auto: { type: "string", value: "auto" },
            top: { type: "string", value: "top" },
            bottom: { type: "string", value: "bottom" },
            center: { type: "string", value: "center" },
        },
    },
    writingDirection: {
        type: "string",
        values: {
            auto: { type: "string", value: "auto" },
            ltr: { type: "string", value: "ltr" },
            rtl: { type: "string", value: "rtl" },
        },
    },
    resizeMode: {
        type: "string",
        values: {
            cover: { type: "string", value: "cover" },
            contain: { type: "string", value: "contain" },
            stretch: { type: "string", value: "stretch" },
            repeat: { type: "string", value: "repeat" },
            center: { type: "string", value: "center" },
        },
    },
    includeFontPadding: {
        type: "boolean",
    },
    fontStyle: {
        type: "string",
        values: {
            normal: { type: "string", value: "normal" },
            italic: { type: "string", value: "italic" },
        },
    },
    backfaceVisibility: {
        type: "string",
        values: {
            visible: { type: "string", value: "visible" },
            hidden: { type: "string", value: "hidden" },
        },
    },
    borderStyle: {
        type: "string",
        values: {
            solid: { type: "string", value: "solid" },
            dotted: { type: "string", value: "dotted" },
            dashed: { type: "string", value: "dashed" },
        },
    },
    textDecorationStyle: {
        type: "string",
        values: {
            solid: { type: "string", value: "solid" },
            double: { type: "string", value: "double" },
            dotted: { type: "string", value: "dotted" },
            dashed: { type: "string", value: "dashed" },
        },
    },
    direction: {
        type: "string",
        values: {
            inherit: { type: "string", value: "inherit" },
            ltr: { type: "string", value: "ltr" },
            rtl: { type: "string", value: "rtl" },
        },
    },
    flex: {
        type: "numeric",
    },
    flexGrow: {
        type: "numeric",
    },
    flexShrink: {
        type: "numeric",
    },
    fontFamily: {
        type: "string",
    },
    flexBasis: {
        type: ["numeric", "string"],
    },
    top: {
        type: ["numeric", "string"],
    },
    bottom: {
        type: ["numeric", "string"],
    },
    left: {
        type: ["numeric", "string"],
    },
    right: {
        type: ["numeric", "string"],
    },
    zIndex: {
        type: "numeric",
    },
    width: {
        type: ["numeric", "string"],
    },
    height: {
        type: ["numeric", "string"],
    },
    margin: {
        type: ["numeric", "string"],
    },
    marginStart: {
        type: ["numeric", "string"],
    },
    marginTop: {
        type: ["numeric", "string"],
    },
    marginBottom: {
        type: ["numeric", "string"],
    },
    marginLeft: {
        type: ["numeric", "string"],
    },
    marginRight: {
        type: ["numeric", "string"],
    },
    marginHorizontal: {
        type: ["numeric", "string"],
    },
    marginVertical: {
        type: ["numeric", "string"],
    },
    padding: {
        type: ["numeric", "string"],
    },
    paddingTop: {
        type: ["numeric", "string"],
    },
    paddingBottom: {
        type: ["numeric", "string"],
    },
    paddingLeft: {
        type: ["numeric", "string"],
    },
    paddingRight: {
        type: ["numeric", "string"],
    },
    paddingHorizontal: {
        type: ["numeric", "string"],
    },
    paddingVertical: {
        type: ["numeric", "string"],
    },
    paddingStart: {
        type: ["numeric", "string"],
    },
    paddingEnd: {
        type: ["numeric", "string"],
    },
    backgroundColor: {
        type: "color",
    },
    borderColor: {
        type: "color",
    },
    color: {
        type: "color",
    },
    fontSize: {
        type: "numeric",
    },
    lineHeight: {
        type: "numeric",
    },
    letterSpacing: {
        type: "numeric",
    },
    borderWidth: {
        type: "numeric",
    },
    borderTopWidth: {
        type: "numeric",
    },
    borderBottomWidth: {
        type: "numeric",
    },
    borderLeftWidth: {
        type: "numeric",
    },
    borderRightWidth: {
        type: "numeric",
    },
    borderRadius: {
        type: "numeric",
    },
    borderTopLeftRadius: {
        type: "numeric",
    },
    borderTopRightRadius: {
        type: "numeric",
    },
    borderBottomLeftRadius: {
        type: "numeric",
    },
    borderBottomRightRadius: {
        type: "numeric",
    },
    opacity: {
        type: "numeric",
    },
    elevation: {
        type: "numeric",
    },
    textShadowRadius: {
        type: "numeric",
    },
    aspectRatio: {
        type: ["numeric", "string"],
    },
    borderBottomEndRadius: {
        type: "numeric",
    },
    borderBottomStartRadius: {
        type: "numeric",
    },
    borderTopEndRadius: {
        type: "numeric",
    },
    borderTopStartRadius: {
        type: "numeric",
    },
    columnGap: {
        type: "numeric",
    },
    gap: {
        type: "numeric",
    },
    rowGap: {
        type: "numeric",
    },
    maxHeight: {
        type: ["numeric", "string"],
    },
    maxWidth: {
        type: ["numeric", "string"],
    },
    minHeight: {
        type: ["numeric", "string"],
    },
    minWidth: {
        type: ["numeric", "string"],
    },
    shadowOpacity: {
        type: "numeric",
    },
    shadowRadius: {
        type: "numeric",
    },
    textDecorationColor: {
        type: "color",
    },
    textShadowColor: {
        type: "color",
    },
    borderBottomColor: {
        type: "color",
    },
    borderEndColor: {
        type: "color",
    },
    borderLeftColor: {
        type: "color",
    },
    borderRightColor: {
        type: "color",
    },
    borderStartColor: {
        type: "color",
    },
    borderTopColor: {
        type: "color",
    },
    overlayColor: {
        type: "color",
    },
    shadowColor: {
        type: "color",
    },
    tintColor: {
        type: "color",
    },
    shadowOffset: {
        type: "object",
        properties: {
            width: {
                type: "numeric",
            },
            height: {
                type: "numeric",
            },
        },
    },
    transform: {
        type: "array",
        items: {
            type: "object",
            properties: {
                perspective: {
                    type: "numeric",
                },
                rotate: {
                    type: "string",
                },
                rotateX: {
                    type: "string",
                },
                rotateY: {
                    type: "string",
                },
                rotateZ: {
                    type: "string",
                },
                scale: {
                    type: "numeric",
                },
                scaleX: {
                    type: "numeric",
                },
                scaleY: {
                    type: "numeric",
                },
                translateX: {
                    type: "numeric",
                },
                translateY: {
                    type: "numeric",
                },
                skewX: {
                    type: "string",
                },
                skewY: {
                    type: "string",
                },
            },
        },
    },
    transformOrigin: {
        type: "object",
        properties: {
            x: {
                type: "numeric",
            },
            y: {
                type: "numeric",
            },
        },
    },
    transformStyle: {
        type: "string",
        values: {
            flat: {
                type: "string",
                value: "flat",
            },
            preserve3d: {
                type: "string",
                value: "preserve-3d",
            },
        },
    },
    perspective: {
        type: "numeric",
    },
    perspectiveOrigin: {
        type: "object",
        properties: {
            x: {
                type: "numeric",
            },
            y: {
                type: "numeric",
            },
        },
    },
    end: {
        type: ["numeric", "string"],
    },
    start: {
        type: ["numeric", "string"],
    },
};
