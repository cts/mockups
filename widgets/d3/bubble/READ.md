CTS Bubble Chart with D3.js
========================

This example uses [CTS v0.9.2](http://treesheets.org/release/cts-0.9.2.js).

To run this example, `cd` into the directory and run `python -m SimpleHTTPServer`. Visit `localhost:8000/bubble.html` to see the original and `localhost:8000/index.html` to see the CTS version.

The original uses `bubble.js` to render the graph and pulls data from `flare.json`.

The CTS version uses `index.js` to call a function to render the graph when a graft operation is detected. Since we have access to a jQuery node in `index.js` but we need to get the equivalent D3 node to draw on it, we can do the conversion like so:

```js
d3.select(jqueryNode.get(0));
```
