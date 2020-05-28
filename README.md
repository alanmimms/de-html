# Remove HTML from Bitsavers text file dumps
I needed to retrieve the real contents of
(http://pdp-10.trailing-edge.com/bb-x141b-bb/index.html)[some text
files on Bitsavers archive]. I wasn't willing to go figure out TOPS-10
BACKUP tape format and fiddle around, although I admit I did try that
path at first.

This is the solution I came up with. I like Javascript. It's
_expressive!_. This took about ten minutes to put together counting
the "learning curve" for (https://cheerio.js.org/)[cheerio].

