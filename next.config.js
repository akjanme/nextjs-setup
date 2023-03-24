// next.config.js

module.exports = {
    experimental: {
      outputFileTracingExcludes: {
        '/api/hello': ['./un-necessary-folder/**/*'],
      },
      outputFileTracingIncludes: {
        '/api/another': ['./necessary-folder/**/*'],
      },
    },
  }