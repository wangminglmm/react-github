module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "commonjs": true,
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "React": true
    },
    "parserOptions": {
        // "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "globalReturn": true,
            "generators": true,
            "objectLiteralDuplicateProperties": true,
            // lambda表达式  
            "arrowFunctions": true,  
            // 解构赋值  
            "destructuring": true, 
        },
        "parser": 'babel-eslint'
    },
    // "parser": 'babel-eslint',
    "rules": {
        "semi": ["error", "never"],
        'indent': 2,
        "react/jsx-no-bind": 0,
        "prefer-arrow-callback": 0, //比较喜欢箭头回调
        "arrow-parens": 0, //箭头函数用小括号括起来
        "arrow-spacing": 0, //=>的前/后括号
        "react/prop-types": 0,
        "no-shadow": 0,
        "no-console": 0,
        "camelcase": 0,
        "no-danger": 0
    }
}
