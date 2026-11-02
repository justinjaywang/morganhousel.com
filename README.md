# morganhousel.com

One-page site for Morgan Housel. Jekyll builds it. GitHub Pages hosts it. There is no theme and no CSS yet.

The published page is generated HTML. Editing the source files and pushing is the whole update loop. Nothing on the live site reads an outside service.

## Repository

| Path | Role |
| --- | --- |
| `_includes/copy.md` | All of the words, as one Markdown document. |
| `_data/images.yml` | Which image files appear, and in what order. |
| `images/` | Image files. A file here is not shown until it is listed in `images.yml`. |
| `index.html` | The page template. It prints the images, then renders `copy.md`. |
| `_layouts/page.html` | Passthrough layout. It outputs the page and nothing else. |
| `_config.yml` | Title, Markdown engine, and `baseurl`. |
| `.ruby-version` | `3.3.4`, the Ruby GitHub Pages uses. |
| `Gemfile`, `Gemfile.lock` | Local Jekyll only. GitHub Pages does not read them. |

`_includes/copy.md` is not a page. The template inserts it and passes it through `markdownify`. It lives in `_includes` so a save rebuilds the site. An excluded file is invisible to the watcher, which is why the words are not a root `copy.md`.

## Local setup

macOS system Ruby cannot build this. Use the version in `.ruby-version`.

[rbenv](https://github.com/rbenv/rbenv) is already installed on the machine that started this repo, and `~/.zshrc` runs `rbenv init`. A new shell in this directory should report Ruby 3.3.4. On another machine:

```bash
brew install rbenv ruby-build
rbenv install 3.3.4
```

Then, from this directory:

```bash
bundle install
bundle exec jekyll serve --force_polling
```

Open [http://127.0.0.1:4000/morganhousel.com/](http://127.0.0.1:4000/morganhousel.com/).

The `/morganhousel.com` prefix is `baseurl` in `_config.yml`. It matches a GitHub Pages project site. `http://127.0.0.1:4000/` alone will not show the page. While the server is running, saving a source file regenerates the page. Refresh the browser to see it. `--force_polling` matters here: the default watcher misses some saves, so a change can sit on disk while the served page stays old. A change to `_config.yml` still needs a restart.

`bundle exec jekyll build` writes the finished site to `_site/`. That directory is gitignored. Do not commit it.

## Editing copy

Change `_includes/copy.md` and nothing else. It is ordinary Markdown, not a data structure.

- A blank line starts a new paragraph.
- `*The Psychology of Money*` is italics.
- `[The Collaborative Fund](http://www.collaborativefund.com/blog/)` is a link.
- An email is a link too: `[speaking@longtermwords.com](mailto:speaking@longtermwords.com)`.

Contacts and the Podcast, YouTube, and Twitter links are paragraphs in that file. The template does not treat them specially.

## Editing images

`_data/images.yml` is a list. Each entry has `src` (a path in this repo, starting with `/images/`) and `alt`.

To swap a cover, replace the file or point `src` at a different file. To add one, put the file in `images/` and add an entry. Order in the YAML is the order on the page. Unlisted files stay off the page.

## Publishing

Push `main`. GitHub Pages builds with its own Jekyll 3.10 and Ruby 3.3. A local build is not required to publish.

Pages should serve this branch from `/`. The project URL is `https://justinjaywang.github.io/morganhousel.com/`.

When the site moves to the domain root, set `baseurl` to `""` in `_config.yml`. Leave `url` as the public origin. Do not add a `CNAME` until that cutover. The current domain stays where it is.

Do not set a `theme` in `_config.yml`. `_layouts/page.html` exists so GitHub Pages does not wrap the document in its default layout. Keep `layout: page` on `index.html`.

## Not built yet

No stylesheet, no webfonts, and no Tailwind. Visual decisions are intentionally unset.
