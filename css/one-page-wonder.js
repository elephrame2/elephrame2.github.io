import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 50
    },
    "navbar-brand": {
        "marginTop": -12
    },
    "footer-brand": {
        "marginTop": 10,
        "marginBottom": 10
    },
    "elephant-nav": {
        "backgroundColor": "#f3d661 !important",
        "borderColor": "#f3d661 !important"
    },
    "navbar-inverse navbar-toggle:focus": {
        "backgroundColor": "#f3d661"
    },
    "navbar-inverse navbar-toggle:hover": {
        "backgroundColor": "#f3d661"
    },
    "navbar-inverse navbar-collapse": {
        "borderColor": "#f3d661"
    },
    "navbar-inverse navbar-form": {
        "borderColor": "#f3d661"
    },
    "navbar-inverse navbar-toggle": {
        "borderColor": "#f3d661"
    },
    "header-image": {
        "display": "block",
        "width": "100%",
        "textAlign": "center"
    },
    "footer": {
        "marginTop": 50,
        "marginRight": 0,
        "marginBottom": 50,
        "marginLeft": 0
    },
    "footer-top": {
        "display": "block",
        "width": "100%",
        "height": 50,
        "backgroundColor": "#f3d661",
        "borderTopLeftRadius": "50%",
        "borderTopRightRadius": "50%"
    },
    "footer-content": {
        "display": "block",
        "width": "100%",
        "height": 100,
        "backgroundColor": "#f3d661"
    },
    "pic1-1": {
        "background": "url('../img/1-1.jpg') no-repeat center center scroll",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "height": 535
    },
    "b1-1": {
        "marginTop": -62
    },
    "s1-1": {
        "marginTop": 200,
        "marginLeft": -49 * vw
    },
    "pic1-2": {
        "background": "url('../img/1-2.jpg') no-repeat center center scroll",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "height": 550
    },
    "b1-2": {
        "marginTop": -13,
        "marginLeft": 44 * vw
    },
    "s1-2": {
        "marginTop": 40,
        "marginLeft": 43 * vw,
        "lineHeight": "157%"
    },
    "pic1-3": {
        "background": "url('../img/1-3.jpg') no-repeat center center scroll",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "height": 615
    },
    "b1-3": {
        "marginTop": -13,
        "marginLeft": 44 * vw
    },
    "s1-3": {
        "marginTop": 40,
        "marginLeft": 43 * vw,
        "lineHeight": "157%"
    },
    "pic2-1": {
        "background": "url('../img/2-1.jpg') no-repeat center center scroll",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "height": 535
    },
    "b2-1": {
        "marginLeft": 4 * vw,
        "textAlign": "left"
    },
    "s2-1": {
        "marginTop": 30,
        "marginLeft": 4 * vw,
        "textAlign": "left"
    },
    "pic2-2": {
        "background": "url('../img/2-2.jpg') no-repeat center center scroll",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "height": 535
    },
    "special2-2-1": {
        "textShadow": "0px 2px 4px #ffffff,-3px -5px 5px #ffffff",
        "fontWeight": "500 !important",
        "fontSize": "50px !important",
        "marginTop": -43,
        "marginLeft": 9 * vw,
        "textAlign": "left",
        "color": "brown"
    },
    "special2-2-2": {
        "textShadow": "0px 2px 4px #ffffff,-3px -5px 5px #ffffff",
        "fontWeight": "500 !important",
        "fontSize": "20px !important",
        "marginTop": 90,
        "marginLeft": -39 * vw,
        "textAlign": "center",
        "color": "brown"
    },
    "b2-2": {
        "marginLeft": 4 * vw,
        "textAlign": "left"
    },
    "s2-2": {
        "marginLeft": -39 * vw,
        "textAlign": "center"
    },
    "pic2-3": {
        "background": "url('../img/2-3.jpg') no-repeat center center scroll",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "height": 535
    },
    "s2-3": {
        "marginTop": 30,
        "marginLeft": 4 * vw,
        "textAlign": "left"
    },
    "headline": {
        "paddingTop": 120,
        "paddingRight": 0,
        "paddingBottom": 120,
        "paddingLeft": 0
    },
    "headline h1": {
        "fontSize": 45,
        "fontWeight": 300
    },
    "headline h2": {
        "fontSize": 20,
        "fontWeight": 200
    },
    "featurette-divider": {
        "marginTop": 80,
        "marginRight": 0,
        "marginBottom": 80,
        "marginLeft": 0
    },
    "featurette": {
        "overflow": "hidden"
    },
    "featurette-imagepull-left": {
        "marginRight": 40
    },
    "featurette-imagepull-right": {
        "marginLeft": 40
    },
    "featurette-heading": {
        "fontSize": 50
    }
});