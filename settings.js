require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAKBc7Fpb8dXfUwQAAG8HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rFGBEQ1IiOWEQEVETbC+LGPhRUcZNbVxUoTvjvG9jT0*OwO9vLU5GVkXnynJP1HRRlQvESt2DyHVQkaSDD3ZG1FQYTMK3DEBPQAwgyCCZgZN8lZ+E0UzrU9+nc8xdvXOmYFu4vuI0vBYYKqR8GJ86MXsCjB6raz5LgNwUDVb+NZwbx8jmUj77jtYO2iKtTX7qkJ0dWR5szfaO7AB2tF*DoKsKEJEWkVzHOMYHZErcbmJCvwS*tZZy2xTWitnkf5+QiDbej1jgSs58bC+LNrXC7GA0pzLZfgx8PV9eFNlLfbDzn8yQO2D2bxknqp3JFL3cv4JxQPJ3mrfoDPk2iAiML4YIlrP0y71sThWujmOvLRZ9vx8pIXQWm+xpc0ThuWLsTCv6khpv+SAy+BnwenNOKu0w15aS6Q1witFMs3XT8E6qrgXs2*Ci0p4px1*RfgW*Ih1cu*4f3et1OF2KcnbJj+tqeOVGZv9VLzTjfG7F*GTX+LLs2t9nW1L2vwb9pfR6ZfHAUo7TW7txMOM+z6euoqsMhdZ23XWQv0J2gWXL4hA9ZTX6HUkjJqui3g6PiosEIViWzLlOeP9gKus3MyrLoYWYOwiYbisK9Pbmj7TpxnHy*F9cH9R4ckOTwGZau7noxLhXEl7KVa9eX50QX3FoITAaPHiA4SigjkCVl8YzxQg9A1OxwQDB70gvuzVJsK*1o1Mpm3xSqsFoLDsl9wTWkfMzieoPsyxrNjVx6AT1QkTLAlGJkJpSVpLUxpTDCFEz+*KsHCnxj78J17eRBD4QJoexQ1FVWQvSh6sclDIKyLtiuLQKtO2ACJvxnGDOWFBHteKwLSII4abAWQ0bBJIQZxT8nxAQjMGGkxj+3VitRR7zueQvTPkugB*KnIAnq6BclhZcHQ4EXxsJE*oN+u3ZlYVV9KzADPZA90xRZVERpwEvDgTzq8rrw4ye+rhzCDCYZBROgbdLxpa86+hq+toFtGKoVqVqkgs95PozxTrwWFra0DFLfPNClvDvj6VG+cJxMuVkGGev7M1HButuOM+*lH4qACXg70HER5bau8Mb1tFrp*V2pu9vm6Juv0u26xtJ+vSFJlIlpw3FWsL9lCkIr4ktXtqxMdsjZ4nicZzL1PLKRr*16vX26qAcQbpIA*9psn1dLZa2oZX5ntuMljeeaIy9x87jijrNxam9nU3h9vbLCXelcIp8zxIpp5h7Xbdq2yNFn43C81i3HI7vhqzcMFVJNo3fLPlcm+*FUJU8zdUp1v2GCn5tfwE6**1buHXhnMP7R+6XGj7fkX*Zxui2Gd0crLOE2WGn1JT9FR1xtmppsoqFL*FC4jjkxntPm7ILH468eqDLIwpLkYAKSKi4LDHqAlHVnWKsIy9*00tTImm7fB88gZernEuyTHFMG8wpMBspQEAVeGIzeszakrExI444DQ1LzunN0q1bVjkH2sVNA7b6lnoLH31BLAQIUAxQAAAgIAKBc7Fpb8dXfUwQAAG8HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2348078112891',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Blackbrood',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '7410258665:AAGZeZNz9BF28ixYl-U-_PQ9h3ixuLgEqg8',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
