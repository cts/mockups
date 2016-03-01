CTS Bar Graph with D3.js
========================

This example uses [CTS v0.9.2](http://treesheets.org/release/cts-0.9.2.js).

To run this example, `cd` into the directory and run `python -m SimpleHTTPServer`. Visit `localhost:8000/box.html` to see the original and `localhost:8000/index.html` to see the CTS version.

The original uses `box.js` to render the graph and pulls data from the `data` div in `box.html` using `scraper.js`.

The CTS version uses `index.js` to call a function to render the graph when a graft operation is detected. Since we have access to a jQuery node in `index.js` but we need to get the equivalent D3 node to draw on it, we can do the conversion like so:

```js
d3.select(jqueryNode.get(0));
```

The graph is attached to the `box-plot` div that gets grafted to `index.html` from `box.html`.

Loading the JS files in the HTML works better than loading them from the CTS file. Sometimes, the CTS file loads the JS files before modifying the DOM so the graph doesn't render as expected.