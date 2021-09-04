# MonacoAngularTest

Integrates the Monaco Editor (editor used in Visual Studio Code) successfully inside Angular. This is also a proof of concept, for loading a custom 'javascript library' for auto completion.

<img src="https://raw.githubusercontent.com/Thisura98/monaco-angular-test/master/res/Screenshot1.png">

## The custom library loaded

```js
/**
 * The System
 */
 const System = {
    /**
     * The Main Game
     */
    Game: {
        /**
         * Move to another level
         * @param {string} level 
         */
        moveToLevel: function(level){

        }
    }
}
```

## Guide

The `ngx-monaco-editor` library was used to to integrate the editor into an Angular Component.

- [Monaco Editor](https://github.com/materiahq/ngx-monaco-editor)

Some of the main references used to load a custom library was the an official example from Microsoft.

- [Example](https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-configure-javascript-defaults)
