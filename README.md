# jest-serializer-react-helmet

[![Build Status](https://travis-ci.org/keplersj/jest-serializer-react-helmet.svg?branch=master)](https://travis-ci.org/keplersj/jest-preset-gatsby)
[![npm version](https://badge.fury.io/js/jest-serializer-react-helmet.svg)](https://badge.fury.io/js/jest-preset-gatsby)

Jest Snapshot serializer to ensure React Helmet side effects are included in component snapshots.

## Installation

Install preset using npm:

```shell
npm install --save-dev jest-serializer-react-helmet
```

or yarn:

```shell
yarn add --dev jest-serializer-react-helmet
```

## Usage

Configure Jest to use the serializer in `jest.config.js`:

```js
module.exports = {
  snapshotSerializers: ["jest-serializer-react-helmet"]
};
```

or `package.json`:

```json
{
  "jest": {
    "snapshotSerializers": ["jest-serializer-react-helmet"]
  }
}
```

## Related Packages

- [`jest-runner-prettier`](https://github.com/keplersj/jest-runner-prettier) - Use Jest to check your codebase against `prettier`
- [`jest-preset-gatsby`](https://github.com/keplersj/jest-preset-gatsby) - Jest preset to ease unit testing a Gatsby project
- [`jest-serializer-json-ld-script`](https://github.com/keplersj/jest-serializer-json-ld-script) - Jest snapshot serializer to better visualize React `<script>` elements containing LD+JSON data
- [`jest-raw-loader`](https://github.com/keplersj/jest-raw-loader) - Load the raw content of files in Jest, replicating the behavior of `webpack`'s `raw-loader`

## License

Copyright 2019 Kepler Sticka-Jones. Licensed ISC
