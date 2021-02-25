// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  routes: [
      {
        match: "routes",
        src: ".*",
        dest: "/index.html"
      },
  ],
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */

  },
  buildOptions: {
    /* ... */
    out: "public_html",
    baseUrl:"/"
  },
  optimize: {
    bundle:true,
    minify:true,
    target:'es2018',
  }
};
