require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAOKI3Fq7AdHgUAQAAHIHAAAKAAAAY3JlZHMuanNvbpVUW4+iSBT+L*XaZlrkbtLJItqKiqAItGzmoZQCSrl1VXFz4n*foNPTk0120stTUVU55zvfpX6AvMAUrVAHxj9ASXANGeqXrCsRGINJFUWIgAEIIYNgDMxX6k*OK92eeFfbjApUec9Op*gyR7b6wSEWf1G2l8ly6NEXcBuAsjqm+PSHgrS9JhpevpGmE4Opnp7jxI7lxXu1vxQkkqW5krUN6vhqobyAW18RYoLzeFYmKEMEpivU2RCTr8E*aFlSBnp4plGzkoORvlZKn8qG*Lz11lO0K3Qu5poWq9nha*CHXqPNOFWN9qJEtoW*5p4SQYP5cDsRolA0k5PL2WVxpcP4AZ*iOEehEaKcYdZ9mXffWuHKN3WReWe*7EiQvMOtk6gdHhFzFKrMzZfarJmGvPs14LIbbZzFNKSbHdkfDlvT1tvVsqku5swrF1Zjmcoyk*0CtebvwG3y4ZXL*+FdWbmiGDeWrvDHsBJ9foc2Pqv1DX+kVTrZCbE22c2Op86bfQ2+UpXOwm*mxw3rMrM5uPnitI*DXdzu*BYtvHfquWI0KvWd9gkfsor8CeVUENftEAUVQbPGDQ3H8cpyWm4j4ikbrSwlIS2YkNA2pRGdycbaES4r9rbE7*Z6guL5lEr0WTK1qXF8C8La1175w6R5uU90QZ0RgjF3GwCCYkwZgQwXeb+njgYAhrWDTgSxO7sgh3luFburtksMDu+kS5B2tke2G+PKdWt1OIu17VneWE9r4wUMQEmKE6IUhQtMWUE6E1EKY0TB+O*vA5Cjlj1067vx3ABEmFDm5lWZFjD8EPXjEJ5ORZUzp8tPer9ABIyHn9uIMZzHtKexyiE5JbhGegIZBeMIphT9GhARFIIxIxX6FVq9CHveA3vxqi1eVTAA2V0PHIIxGPGCMpQVjhspKjfm1b*ot6avC8vyW44YGID0cU9UJVngBV7kBUm53+wPbr8g9hVDxCBOKRgD3ci276I7na3f9Ng053PNiDU91sDnSB*WeHDvr73siBbDdm+pb5vqGJ*r97fAtUngumpa1lC7NlI2VBzuzv2*i4AxeDIXAS*kahVvkfVUO7yZ8dbT4VTD5YSdnqF8mVXLEMtNox*Yac5NQ3e7O1qifxZl3z+zqV2u5qXFyeLzq65fxN1GPWLtpe8Wohqf0O*NpGBkSsn7snOcNg2KVj5fzCxI62u3f1O3I7Fbc1ht1vG+Uf1qKKW14Yzq1LJqc98KXrpHmeQfW0*WBbV63mvceo7dD9PeQ5P+fKzw3U+9WP1vhNE9+znsJfyCeA*kvcmGt8FvRX4+J*8RyYmHuSDjE9V0r7V3PWaCIUvpyJtKI+*VDuBxFJuKVTJ7xhxwu30fgDKFLCpIBsYAl0mRIzAApKh60xp5VPyhl67FhhY*Jk8hZdpnEPY4Q5TBrARjThY5jh8KI*5xyyZFuYA06UmwuUMS9a7utLJ0GGQfuQJa*1m7Gtz+AVBLAQIUAxQAAAgIAOKI3Fq7AdHgUAQAAHIHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Blackbrood',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  
  //⚠️ Premium users settings ⚠️
  PREMIUM_KEY: process.env.PREMIUM_KEY || '',
  MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 20,
  EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
//Need premium? Purchase one here => https://wa.me/tylor
