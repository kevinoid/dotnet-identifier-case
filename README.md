.NET Identifier Case
====================

[![Build Status](https://img.shields.io/github/actions/workflow/status/kevinoid/dotnet-identifier-case/node.js.yml?branch=main&style=flat&label=build)](https://github.com/kevinoid/dotnet-identifier-case/actions?query=branch%3Amain)
[![Coverage](https://img.shields.io/codecov/c/github/kevinoid/dotnet-identifier-case/main.svg?style=flat)](https://app.codecov.io/gh/kevinoid/dotnet-identifier-case/branch/main)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@kevinoid/dotnet-identifier-case.svg?style=flat)](https://libraries.io/npm/@kevinoid%2Fdotnet-identifier-case)
[![Supported Node Version](https://img.shields.io/node/v/@kevinoid/dotnet-identifier-case.svg?style=flat)](https://www.npmjs.com/package/@kevinoid/dotnet-identifier-case)
[![Version on NPM](https://img.shields.io/npm/v/@kevinoid/dotnet-identifier-case.svg?style=flat)](https://www.npmjs.com/package/@kevinoid/dotnet-identifier-case)

Transform a string to PascalCase according to [Microsoft's .NET Capitalization
Conventions](https://docs.microsoft.com/dotnet/standard/design-guidelines/capitalization-conventions) similarly to [`change-case`](https://www.npmjs.com/package/change-case).

## Introductory Example

```js
import dotnetCase from '@kevinoid/dotnet-identifier-case';

dotnetCase('TEST_VALUE'); //=> "TestValue"
```

## Installation

[This package](https://www.npmjs.com/package/@kevinoid/dotnet-identifier-case) can be
installed using [npm](https://www.npmjs.com/), either globally or locally, by
running:

```sh
npm install @kevinoid/dotnet-identifier-case
```

## Recipes

More examples can be found in the [test
specifications](https://kevinoid.github.io/dotnet-identifier-case/spec).

## API Docs

To use this module as a library, see the [API
Documentation](https://kevinoid.github.io/dotnet-identifier-case/api).

## Contributing

Contributions are appreciated.  Contributors agree to abide by the [Contributor
Covenant Code of
Conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html).
If this is your first time contributing to a Free and Open Source Software
project, consider reading [How to Contribute to Open
Source](https://opensource.guide/how-to-contribute/)
in the Open Source Guides.

If the desired change is large, complex, backwards-incompatible, can have
significantly differing implementations, or may not be in scope for this
project, opening an issue before writing the code can avoid frustration and
save a lot of time and effort.

## License

This project is available under the terms of the [MIT License](LICENSE.txt).
See the [summary at TLDRLegal](https://tldrlegal.com/license/mit-license).
