/* eslint-disable */
exports.popup = {
    "description": "",
    "props": {
        "active": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": ""
        },
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        },
        "endAnimation": {
            "type": {
                "name": "shape",
                "value": {
                    "duration": {
                        "name": "number",
                        "required": false
                    },
                    "easing": {
                        "name": "string",
                        "required": false
                    },
                    "from": {
                        "name": "object",
                        "required": false
                    },
                    "to": {
                        "name": "object",
                        "required": false
                    }
                }
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "{\r\n    duration: 200,\r\n    easing: 'ease in',\r\n    from: {\r\n        opacity: 1,\r\n        transform: 'scale(1,1)',\r\n        WebkitTransform: 'scale(1,1)'\r\n    },\r\n    to: {\r\n        opacity: 0,\r\n        transform: 'scale(0,0)',\r\n        WebkitTransform: 'scale(0,0)'\r\n    }\r\n}",
                "computed": false
            }
        },
        "position": {
            "type": {
                "name": "string"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "'top left'",
                "computed": false
            }
        },
        "startAnimation": {
            "type": {
                "name": "shape",
                "value": {
                    "duration": {
                        "name": "number",
                        "required": false
                    },
                    "easing": {
                        "name": "string",
                        "required": false
                    },
                    "from": {
                        "name": "object",
                        "required": false
                    },
                    "to": {
                        "name": "object",
                        "required": false
                    }
                }
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "{\r\n    duration: 200,\r\n    easing: 'ease in',\r\n    from: {\r\n        opacity: 0,\r\n        transform: 'scale(0,0)',\r\n        WebkitTransform: 'scale(0,0)'\r\n    },\r\n    to: {\r\n        opacity: 1,\r\n        transform: 'scale(1,1)',\r\n        WebkitTransform: 'scale(1,1)'\r\n    }\r\n}",
                "computed": false
            }
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.popupelement = {
    "description": "",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        },
        "className": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        },
        "classes": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": ""
        },
        "component": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "func"
                    },
                    {
                        "name": "string"
                    }
                ]
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "'div'",
                "computed": false
            }
        },
        "pStyle": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": ""
        },
        "style": {
            "type": {
                "name": "object"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.popupplacer = {
    "description": "",
    "props": {
        "active": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        },
        "className": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        },
        "component": {
            "type": {
                "name": "union",
                "value": [
                    {
                        "name": "func"
                    },
                    {
                        "name": "string"
                    }
                ]
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "'div'",
                "computed": false
            }
        },
        "defaultClasses": {
            "type": {
                "name": "bool"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "true",
                "computed": false
            }
        },
        "distanceAway": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "0",
                "computed": false
            }
        },
        "jitter": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "2",
                "computed": false
            }
        },
        "offset": {
            "type": {
                "name": "number"
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "0",
                "computed": false
            }
        },
        "onPositioned": {
            "type": {
                "name": "func"
            },
            "required": false,
            "description": ""
        },
        "position": {
            "type": {
                "name": "enum",
                "value": [
                    {
                        "value": "'top left'",
                        "computed": false
                    },
                    {
                        "value": "'top center'",
                        "computed": false
                    },
                    {
                        "value": "'top right'",
                        "computed": false
                    },
                    {
                        "value": "'right center'",
                        "computed": false
                    },
                    {
                        "value": "'bottom right'",
                        "computed": false
                    },
                    {
                        "value": "'bottom center'",
                        "computed": false
                    },
                    {
                        "value": "'bottom left'",
                        "computed": false
                    },
                    {
                        "value": "'left center'",
                        "computed": false
                    }
                ]
            },
            "required": false,
            "description": "",
            "defaultValue": {
                "value": "'top left'",
                "computed": false
            }
        },
        "target": {
            "type": {
                "name": "array"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */
/* eslint-disable */
exports.portal = {
    "description": "",
    "props": {
        "children": {
            "type": {
                "name": "node"
            },
            "required": false,
            "description": ""
        }
    }
}
/* eslint-enable */