/**
 * @copyright Copyright 2019-2024 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 * @module dotnet-identifier-case
 */

/** Transforms a string with any case convention to one using {@link
 * https://docs.microsoft.com/dotnet/standard/design-guidelines/capitalization-conventions|Microsoft's
 * .NET Capitalization Conventions.}
 *
 * @param {string} value String value to be transformed.
 * @returns {string} value converted to PascalCase.
 */
export default function dotnetIdentifierCase(value) {
  // Split words with changing capitalization similarly to how change-case does
  // https://github.com/blakeembrey/change-case/blob/38e6b4f9115cf93b18ca9b1b4a620a32751499cb/packages/change-case/src/index.ts#L46-L53
  return String(value)
    // Don't treat apostrophe as a word break (unlike no-case)
    .replaceAll('\'', '')
    // Split camelCase words
    .replaceAll(/(?<=[\p{Ll}\d])(?=\p{Lu})/gu, ' ')
    // Split CAMELCase words
    .replaceAll(/(?<=\p{Lu})(?=\p{Lu}\p{Ll})/gu, ' ')
    // Capitalize words
    .replaceAll(/([\p{L}\p{N}])([\p{L}\p{N}]*)/gu, (word, first, rest) => {
      // "A special case is made for two-letter acronyms in which both letters
      // are capitalized"
      // https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/capitalization-conventions#capitalization-rules-for-identifiers
      if (word.length === 2 && word === word.toUpperCase()) {
        return word;
      }

      // If the word is a roman numeral, leave it capitalized
      // https://stackoverflow.com/a/267405
      if (/^M{0,4}(?:D?C{0,3}|CD|CM)(?:L?X{0,3}|XC|XL)(?:V?I{0,3}|IV|IX)$/.test(
        word,
      )) {
        return word;
      }

      return first.toUpperCase() + rest.toLowerCase();
    })
    // Remove non-alnum characters
    // Note: C# identifiers can have [\p{L}\p{Nl}\p{Nd}\p{Pc}\p{Mn}\p{Mc}\p{Cf}]
    // Stick with [\p{L}\d] for consistency with change-case
    // https://github.com/blakeembrey/change-case/blob/38e6b4f9115cf93b18ca9b1b4a620a32751499cb/packages/change-case/src/index.ts#L9
    .replaceAll(/[^\p{L}\d]+/gu, '');
}
