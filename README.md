# react-toggler

[![Build Status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![Devdependency Status][david-dev-image]][david-dev-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

A utility React component, switch the show/hide of component.

```sh
npm i react-toggler
```

## Usage

```js
import Toggler from 'react-toggler';

<Toggler>Content</Toggler>

<Toggler hide={() => doSomething()}>Content</Toggler>

<Toggler pattern={[true, false]}>
  <div>A</div> // Show
  <div>B</div> // Hide
</Toggler>

<Toggler pattern={{ 0: false 1: true }}>
  <div>A</div> // Hide
  <div>B</div> // Show
</Toggler>
```

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## License

[MIT][license-url]

© sugarshin

[npm-image]: http://img.shields.io/npm/v/react-toggler.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/react-toggler
[travis-image]: http://img.shields.io/travis/sugarshin/react-toggler/master.svg?branch=master&style=flat-square
[travis-url]: https://travis-ci.org/sugarshin/react-toggler
[david-image]: https://david-dm.org/sugarshin/react-toggler.svg?style=flat-square
[david-url]: https://david-dm.org/sugarshin/react-toggler
[david-dev-image]: https://david-dm.org/sugarshin/react-toggler/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/sugarshin/react-toggler#info=devDependencies
[license-image]: http://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: http://sugarshin.mit-license.org/
