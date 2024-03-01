Prism.languages['wlanguage'] = {
    "string": {
        pattern: /["\[](.*?)["\]]/,
        greedy: false
    },
    "comment": {
        pattern: /\/\/.*/,
        greedy: true
    },
    "function": {
        pattern: /([a-zA-Z_]\w*)\s*(?=\s*\()/g,
    },
    "function-definition": {
        pattern: /((?:^|\s)procédure[ \t]+).*?([a-zA-Z_]\w*)(?=\s*\()/g,
        lookbehind: true,
        alias: "function"
    },
    "property": {
        pattern: /(?<=[.])(\w+)/g,
        lookforward: true,
        greedy: true
    },
    // TODO: Modify the `number` RegEx to match the WLanguage syntax
    "number": /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    "operator": /[+-]{1,2}|[-%=]=?|!=|:=|\*\*?=?|<[<=>]?|>[=>]?|[&|^~]|Modulo|\//,
    "boolean": /\b(?:Vrai|Faux|Null)\b/,
    "punctuation": /[{}[\];(),.:]/,
    "keyword": /\b(?:_(?=\s*:)|procédure|globale|locale|est|un|une)\b/,
    "builtin": /\b(?:booléen|entier|chaîne|Email|emailSessionSMTP|emailOptionDéfaut)\b/,
}

Prism.languages.wlang = Prism.languages.wlanguage
Prism.languages.webmanifest = Prism.languages.json
