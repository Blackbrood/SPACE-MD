require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAFZ261ox6GBcTgQAAHIHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3lta5SboFVdtYBcFFHU9gJb8xAhQJqrSVBxyv++hU5Pz8PuVC9PIUmd853vkh+grDBFDmrB+AeoCT5Dhrola2sExkBr4hgR0AMRZBCMQaPtq4OXNvwbOcGMOxwLgR80sUEDaImHhXQtdqOF6VsNT1*BvQfq5pjj8A8FRek2FXNt7lzpIc0uptFefSxKS67MWjYV7Sg4bk*Fy7XC2Su4dxUhJrhMjDpFBSIwd1DrQUy+Br9abjOf4orphZ1RtcywARe3+va+XjlDc6VuG0mSDZPuufBr8BuvL5y3*MW2l7kTu9G8DaK+L8+FpbC7BjZvkRsbamwP28sTPsVJiaJphEqGWftl3vn52Q+hNg2NarVSlkHz1qd5cTqXgqY5h8kk8AI52znEst2vAe9P92t5PRXxwZpfdHpRrJIaubu8OtCaCNOB5C1cWa3UWg1*B+6RD69k*4f30J69G3kZyt5REcmN29V8wPpO2xqzE8mYcophoMaG5+yqr8HfaYYxYy+DS7gUpmbs+4H*ci0v+voloaf3RjJjcjA5uFty1Sd8yBryJ5TSJBxcJ*MFd5W9xpgeV+pQjylJ7aN1k2abCR21KPHS3O0X9mC6Hp3CS4ATPbEseaJWfXc3z3l24r3kthFNWV1aimLqyetjogy10wiMuXsPEJRgyghkuCq7vZHUAzA6b1BIEHuwC2I43QZLJ1d2uZrZiSyY2Qm9GwqWU2WN56JvhyP0vr00nvsKeqAmVYgoRZGNKatI6yJKYYIoGP*9vQdKdGVP3bpuAtcDMSaUbcumzisYfYj6cQjDsGpKtmnLUO8WiIDx4HMbMYbLhHY0NiUkYYrPSE8ho2Acw5yiXwMigiIwZqRBv0KrV1HH+9Dec282NwM9UDz0wFFncUFUBrLCcbwy4sbS4C*67dLVhXX9rUQM9ED+vCeNhrIoiIIkiEPlcbM7uP+C2FWMEIM4p2AM9Jm+vPquYbj27Oq6lqWuElVPVPA50oc1nty7p20kLOS9ZpDkrMSs3miCYsVxVacSrZOgMuB5F8aBliev*1IEjAH2hKKxLm+We5mvTE1b6eZ7GedFwaujPEq4fnJcZ2VULkLcmpV0jHxnZ5trtNi2sThzT7SWoJPgRXyT9*hF2u63GxmvXrtuETrjEP3erM5id8Xpp6g8miF9P8QbgxuuDnBZTRyWbqX98DpZLFKkqYvWdNL5saAK0Uaps40Pwpk79tce5zab5ckQL*tjmMYBL07Up2kfocl*Plb44adOrO43xuiR*RJ2En5BvCfyzmSDe++3Ij+fk*+IpPbm5HZ0Q1yydsR535bhNon6WikMHR8dHd+CmkW4g82vAh*c7997oM4hiytSdDrUaVUi0AOkajrTTsu4+kMvXU2m6s+45pAy9TMIb7hAlMGiBmNOlnhelERRfN7ySFXbkKYdCR7np3Hn6lat6w2D7CNXQH18lwTc*wFQSwECFAMUAAAICABWdutaMehgXE4EAAByBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB2BAAAAAA=',
  
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
