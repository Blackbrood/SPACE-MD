require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAAlq61qGoYKiUAQAAHIHAAAKAAAAY3JlZHMuanNvbpVV246jOBD9F78mmnANJFJLCzSQG0nIjYTVPBgw4IRbjCGQUf59RTI9PVppR708GbtUderUOfYPkOW4RHPUgvEPUBBcQ4q6JW0LBMZArcIQEdAHAaQQjIFuKjcDxqmyGGgxC5m75ar30VSQceR49F0cqVZO90xtZPobePRBUXkJ9v+QcDgM9MFGDSp6bzdD85441sC1qLyvXb5Wq7Z3eBeSVMHL1HoDjy4jxARnkV7EKEUEJnPUriEmX4OvKRvV0gyOmzOuFrJlqHvL09Xg7tJpecndtqncIcUub+z9r8H3XOdYKhEhRo9TJ+uWaqdSE+yFLXvKtmHrQ3huqqssMjrzgl*iKEPBNEAZxbT9Mu*2Ij46UyeDxJRMWXLm6423tGsh3epNpYe+Q*1VDi*XlfFF3mPZWGRnsU4YaU6ns7u9VasiPaX2InW5quaJsRmu2EDDbP478DX50Mrl**CeLgcmrkVFjAbie6Q3wbQ+h8PB3Ql3x*WCr2+21tutdjt1wnwN*ilo+M37gd+nUcJfCaW9tl0wA5vGcSQlsqCP6i3V2suAu33Ch7Qif0Ip7mWB443z2q6Kvbs*KWK8XE7s1BounVEzTdbejrOO5rsbarvG1orbBZrHXGADBXv5FjPqoTSc7U4W1jPfmbauyvQmivL27OiC2mkAxuyjDwiKcEkJpDjPuj1x2AcwqLfIJ4g+2QXBagHF492sTB3vSxSXjYsI6rHG+SRlywNat7Pbsh4KIRO9gT4oSO6jskTBBJc0J62FyhJGqATjv7*3QYYa+ppbV41n+yDEpKT7rCqSHAYfQ*04hL6fVxndtpmvdQtEwJj53EaU4iwqOxqrDBI*xjXSYkhLMA5hUqJfDSKCAjCmpEK*TKvlQce7sD2ynC4fQB+kz3ngAIwBxwsyI8ksy8kjdizIf5Xfbl1eWBTfMkRBHySvOHE0lARe4EVeGMrPyO7g8QtilzFAFOKk7Cw*01bNydL1WRs0lmWayjRStEgBny19SOPFvXXdB*xSclSdRLUc0mKr8rIZhnkRi2URubkO64Mfumry5P7fSTpx9hZXFO+Z1VHNGr8+m9qMjsL5WroOTysJcoZnGl64UwWr50sDg8mXI31FxNPU894LmGraXMHl8NYIyiDy5PrekydZHL111QJUYx*9XqwMnfXcuUNDCiXkLhLs9pJRmUxrb7Ev56onM65M1Ew27zN6dDbpIS8YaTdzznAvjmZH*XoJlYvF9EI7L1ZOXmHr3qj2S7RP0yQ*Lyv81FM3rO43xOjp*Qx2I*zC8F7IO5Exj*5vSX5eJ*9hSXU3TybBHbHRZi4sBhMJ7qNgoGb8cH5C3vxkQtUk7HHC2e4JPB7f+6BIIA1zkoIxwEWcZwj0AcmrTrTTLMz*+DhEUyV6dZ7AkiqfRtjhFJUUpgUYs5LIcfxIksRX1JrkxQSWcUfCmj3FYafqVimKLYX0w1dAeX63ADz+AVBLAQIUAxQAAAgIAAlq61qGoYKiUAQAAHIHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
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
