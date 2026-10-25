# Robot Heist website prototype

Open `index.html` in a browser. The site uses one shared layout and switches pages with the top navigation. Page content scrolls within its own panel when it is taller than the available space.


## Editing text

To update text or navigation labels, edit `content.js`. The project synopsis, character list, team list, page names, script paragraphs, concept captions, and placeholder messages are all stored there. Existing page entries include their Figma frame node IDs as a source reference; the Animatic and Final placeholders have no source frame yet.

Home page blog posts live in `blog.js`.

## Adding artwork

Put image files in this folder (or a subfolder such as `assets/`) and set the matching `src` and `alt` fields in `content.js`. For example:

```js
src: "assets/home-heist.png", alt: "Voxer and Linax during the robot heist"
```

- **Pitched Storyboard** panels are ordered in the `frames` list. The pitch video is set by `video.youtubeId`.
- **Char/Enviro Concepts** art paths are on each concept entry.
- **Precedents** holds the reference images and the source citation.
- **Animatic** and **Final** use the same page shell and can be updated by changing their `note` and `media` fields.

Empty image fields show labeled placeholders until you add the source images.
