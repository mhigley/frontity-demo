const settings = {
  name: "frontity-demo",
  state: {
    frontity: {
      // url: "https://test.frontity.io",
      url: "http://localhost:10003",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            [ "Home", "/" ],
            [ "About", "/about-us" ],
          ],
          featured: {
            showOnList: false,
            showOnPost: false
          },
          autoPreFetch: "hover",
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          // api: "https://test.frontity.io/wp-json"
          api: "http://localhost:10003/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
