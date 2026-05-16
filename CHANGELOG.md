# Changelog

## [2.0.0] - 2026-05-16

### Changed
- Migrated build tooling from Babel to Vite (library mode)
- Build now outputs both ESM (`lib/index.mjs`) and CJS (`lib/index.js`) formats
- Added `exports` field in `package.json` for modern Node.js resolution
- Build target set to ES2015 for broad browser compatibility

### Removed
- Removed `@babel/polyfill` and `core-js` runtime dependencies — polyfilling is now the responsibility of the consuming application

## [1.1.1] - previous
- Initial release with Babel-based build
