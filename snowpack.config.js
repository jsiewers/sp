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
    ["@snowpack/plugin-optimize", { /* see options below */ }]
  ]
  ,
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */

  },
  buildOptions: {
    /* ... */
    out: "public_html"
    //baseUrl:"/"
  },
  alias: {

  }
};
