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
- Consider starting the commit message with 1 word or 2 words between square brackets "[keyword1(, keyword2)]":
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

## Additional Notes
