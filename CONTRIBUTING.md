# Contributing to Logisticae project

First off, thanks for taking the time to contribute!

The following is a set of guideline for contributing to Logisticae project.
These are mostly a guidelines, not rules.
You are free to change the content of this document in a pull request if you would add some other detail about contributing.

TOC HERE!!!!

## Code of Conduct

## How Can I Contribute?

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Update algorithm ..." not "Updates algorithms ...")
- Try to limit the number of character on the first line of the commit
- Reference issues and pull request liberally after the first line
- Consider starting the commit message with 1 word or 2 words between square brackets "[keyword1(, keyword2)]" :
  - [Feat] when adding new feature
  - [Fix] when you fix a bug.
  - [Test] when you're adding new tests
  - [Refacto] when you refactoring some part of the code.
  - [Config] when improving configuration file like package.json, rules in linter, adding dependencies, ...
  - [Doc] when you writing some documentation as typescript doc, Readme, changelog, ...

### JavaScript / Typescript Styleguide

All JavaScript using the default configuration offer by EsLint.
A new style of linter can be used instead if it is not suitable.
It is therefore possible to discuss it in an issue or through a pull request.

About style:

- Inline `export` with expressions whenever possible

```typescript
// Use this:
export default class ClassName {

}

// Instead of:
class ClassName {

}
export default ClassName
```

- Place class properties properties in the following order:
  - Class methods and properties (methods starting with `static`)
  - Instance methods and properties
- Avoid plat-form dependent code

### Unit Tests & Specs Styleguides

The unit test using [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai) libraries.
The unit tests respect the following formatting :

```typescript
describe('ClasssName', () => {

    describe('First method', () => {
        it('A sentence who explain the result of the test expected', () => {
            // Code of the test here ...
        });
        it('Another sentence to test another result expected', () => {
            // Code of the test here ...
        });
    });

    describe('Second method', () => {
        it('A sentence who explain the result of the test expected', () => {
            // Code of the test here ...
        });
        it('Another sentence to test another result expected', () => {
            // Code of the test here ...
        });
    });

    // Same syntax for each method you test.
```

Like the linter, the test syntax can evolved after discussion.
So don't hesitate to propose your own test syntax using [Mocha](https://github.com/mochajs/mocha)
and [Chai](https://github.com/chaijs/chai) into a pull request or an issue.

### Documentation Styleguide

- Use the command `npm run docs` to generate the documentation of the project
- Using a merge between [JsDoc](https://devdocs.io/jsdoc/) and [TsDoc](https://typedoc.org/) :
  - In header of the class :
    - `@author` - The author(s) of the class or people who work on it
    - `@since` - The first release of the class in project
    - `@version` - Version of the class, it will be update after each modification
    - `@license` - The license of the project (MIT).
    - For example :
  
  ```typescript
   /**
    * Description of the class.
    * 
    * @author Nicolas GILLE <nic.gille@gmail.com>
    * @since 0.1.0
    * @version 1.0
    * @license MIT
    */
    export default class Mathematics {
        // Code here ...
    }
  ```

  - In class properties
    - `@since` - The first release of the property
    - `@version` - Update when the name of the property is update
    - `@static` - Indicate the property is a static property
    - `@ignore` - Using for private property for avoiding to show it on documentation
    - `@see` - Use to redirect user in a method, class or parameter using in the body of the method. Useful for the documentation
    - For example :
  
  ```typescript
    /**
     * Description of the property.
     *
     * @since 0.4.0
     * @version 1.0
     */
    x: number;

    /**
     * Description of the property.
     *
     * @ignore
     * @static
     * @private
     */
    private static AllValues: {[name: string]: DistanceUnit} = {};
  ```

  - In class constructors
    - `@constructor` - For the documentation
    - `@param $name {$type}` - $name represent the name of the parameter and $type represent his type.
    - `@private` - For private constructor
    - `@ignore` - For private constructor
    - `@see` - Use to redirect user in a method, class or parameter using in the body of the method. Useful for the documentation
    - `@since` - First release of the constructor
    - `@version` - Current version of the constructor
    - For example :

    ```typescript
    /**
     * Description of the constructor.
     *
     * @constructor
     * @ignore
     * @private
     *
     * @param symbol {string}
     *  Description of the parameter.
     * @param value {number}
     *  Description of the parameter.
     *
     * @since 0.2.0
     * @version 1.0
     */
    private constructor(public readonly symbol?: string, public readonly value?: number) {
        // Source code
    }
    ```

  - In class methods
    - `@static` - Indicate the method is static
    - `@ignore` -  Indicate the method must be ignore by TsDoc, using only for private method
    - `@private` - Indicate the method is private. In that case, the method must prefix by an underscore "_"
    - `@param $name {$type}` - $name represent the name of the parameter and $type represent his type
    - `@returns {$type}` - $type represent the type returns by the method
    - `@see` - Use to redirect user in a method, class or parameter using in the body of the method. Useful for the documentation
    - `@since` - First release of the method
    - `@version` - Version of the method
    - For example :

    ```typescript
    /**
     * Description of the method.
     *
     * @ignore
     * @private
     *
     * @param {number} a
     *  Short description of the parameter.
     * @param {number} b
     *  Short description of the parameter.
     * @param {number} c
     *  Short description of the parameter.
     * @returns {number}
     *  Short description of the object returns.
     *
     * @see anotherMethod
     * @since 0.1.0
     * @version 1.0
     */
    private _crossMultiplication(a: number, b: number, c: number): number {
        return (a * b) / c;
    }
    ```

## Additional Notes
