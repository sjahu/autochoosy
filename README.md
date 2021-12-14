# autochoosy

Automatically open matching URLs with Choosy from in-browser.

[Choosy](https://www.choosyosx.com/) is an excellent tool for macOS that extends the concept of a "default browser" by allowing you to configure specifically which browser should handle which links. While Choosy has [a browser extension](https://addons.mozilla.org/en-US/firefox/addon/choosy/) that adds a button to the toolbar to easily open a page with another browser and a right-click option for links to "Open with Choosy", it would be nice if certain pages would always be automatically sent to another browser.

*autochoosy* uses [Choosy's URL scheme API](https://www.choosyosx.com/api) to automatically send pages to Choosy, which handles them according to its configured rules.

## Installation

1. Install [Choosy](https://www.choosyosx.com/) and configure rules.
2. Configure your browser to always open `x-choosy://` URLs with Choosy.
  - Paste `x-choosy://https://example.com/` into the address bar and, when prompted, select "Choosy" and "Always use this application to open x-choosy links".
3. Download and install the latest version of *autochoosy* from https://addons.mozilla.org/firefox/addon/autochoosy/ or from this repo's [releases](https://github.com/sjahu/autochoosy/releases).

### Installing from source

If you use [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) or another version that permits the installation of unsigned add-ons, you can package **autochoosy** yourself by running `zip autochoozy.xpi *` in the source directory.

## Configuration

In `about:addons`, navigate to **autochoosy** > Preferences; there, you can configure the regex that is used to decide when to send a page to Choosy.