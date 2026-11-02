Words live in `_data/copy.yml`. Which images appear, and in what order, lives in `_data/images.yml`.

To change a cover, add the file under `images/` and point `src` at it. To add a cover, add another block. Anything in `images/` that is not listed there stays off the page.

Push to `main`. GitHub Pages builds the site. No stylesheet yet.

Local preview, from this folder:

```
bundle install
bundle exec jekyll serve
```
