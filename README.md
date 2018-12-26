# Photo Gallery - Vue web component

Drop in page photo gallery web component made with Vue.

## Usage

### Installing component

* Include the component by loading the following on your site:
  * `dist/css/app.css`
  * `dist/js/chunk-vendors.js`
  * `dist/js/app.js`

* Add the component to your site as follows:

    `<photo-gallery></photo-gallery>`
    
### Managing images

Collect a bunch of JPG/PNG images in a folder.

Run `./make_manifest.py <path to images>` to generate the manifest.

Run `./make_thumbs.sh <path to images>` to generate thumbnails.

The processed images will be found in `images/`.

Upload images (including `_thumb` and `_medium` folders inside) to a folder on the web server.

## Development

Install Node 10.

Run NPM install.

Do awesome changes.

Compile:

    node_modules/.bin/vue build -t wc -n photo-gallery

## Licence

MIT

## Author

Jason Robinson / https://jasonrobinson.me / @jaywink:feneas.org
