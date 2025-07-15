require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAAZ671rbjSUVUQQAAHMHAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3ptY5A7GtERCwqKgBdQWtiYhwKKiyCUUKA44b9vYE*P9MPuRC9PRVXGqZMnT2b9AGWVNchAPZj+ALjOOkjQsCQ9RmAKlDaOUQ1GIIIEgimYGddkF*J7T6US8ez6VXAzBX+D8qC95xye6el+tTiqiu1yr+AxArgNiiz8A6CF655ZLX0M9Ylt7Mv+QFZJbd4hJ9wIHbNUc9nEcuGuyuYVPAZEmNVZmag4RWdUw8JA*RZm9dfob9asP79Y+sxEEm+cDA7utBMWxnm13C0XPq6g380n+p1i86*RP19tj26svGfTSG5E7eXywiiTZaAahxW+Vy8myyOeYcTS9t7pN1lSokiPUEky0n9Z97flfo091xKlq2hTuUBY*6DchZmQoyxAY3kTaOLupvtc*kXiEU3ebEQHvjtOQ8hHoR1D69Rx0uJcFvcCeeacHF+4GuWHz8S39YdX8v+jO6cxa94o7lSnuUf6pNo2B1+2ZqBdLlVyULVSnzdefVcw*UXbiArTqe5i78hSZsrEkzlvdbuX5gql3IVnjI7qZse9uBXfPukOSVv*ieXlpJrHyUv1RjF4VXcpIyWGaLxhm7rQjElVuh4mttn4xLtc9B23idV7IKdHVYid0*ni25UZab2QWYYSLDrLenO0G54lr8+MctTrEZjSjxGoUZI1pIYkq8rn3lgYARh1DgprRJ7ygpbG7S6IlH7XOuYyVte4hKK2btrSOzXSKjrYcBOM6d1akl7BCOC6ClHToGiZNaSqews1DUxQA6Z*fx+BEt3Ie+GG61h6BOKsbsihbHFRweijqh+HMAyrtiROX4azYYFqMB3*3kaEZGXSDDq2JazDNOvQLIWkAdMYFg36lSGqUQSmpG7Rr66dVdEg*HZ39Onjeg5G4PwsSBaBKWBYThqLEk0z0oSe8sxfzbfrgAsx*lYiAkageI*jJ4LIsRzLs5wgPSOHg8cvigNihAjMimYYWavZ5uZZqmqeUia0FgvZS+RZIoPfKX14411763KI2LX4pqh10kkxwY7CSos4rnDKNzjxKxV2bhj7SpG8*gsImAKXMgVtIrpJyvFx5ffynl9vc32toD6fOZrCzV09NTmLFygH7sxjwEhzp*U79yyfbmHprBf7*qRRgtN0yiVlgyuc3zP5dbgtQl0Wos+XCcl4eZ7n5dVTApva3PRqtU*ZaxszK52*Ht1dZPrFxJHhxF+sFCvfWPHRpyq3NVbr+VnUi0B2BI0N+ahw9MDVbs6p*HDts2uKn9Mqe*ppKNbwG2fo2fwlHEr4heK9Mx9MNn6MPoH8nCf*0ZPK3iiW0R3RiW1wJrUU4SGJKKVkBcNDgeEtoLKo6eOS2fkeeDy+jwAuIImr+gymIMNpVSIwAnXVDqbVy7j60+MmJ7r8M*MCNkT+3Qj77IwaAs8YTGmRZ*gJw4v0e9S2rvASNukgwpb20nhwdS9j7BBIPvoKyM*vegGPfwBQSwECFAMUAAAICAAGeu9a240lFVEEAABzBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
