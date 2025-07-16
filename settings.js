require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADFh8Frgq5l*SwQAAHMHAAAKAAAAY3JlZHMuanNvbpVUW6+qOBT+L33VHLmLJjsZUDcI3gVvk3koUEoVAduC4on*fYKeffaZTOZkD0+lbdb61nfpd5DlhCEX1aD*HRSUVJCjZsnrAoE+MMs4RhS0QQQ5BH1wtmcGZmhtVWIxpLqQdpEgZGf1Kju37KL1JHqdqzHko3P4Bh5tUJRBSsLfFBRLBTt6sbbk9aoq7tW9dsY355SU1juPtKXgdaU7GbL05glv4NFUhISSDI+KBJ0RhamL6gUk9GvwWwsDKRFyhkpCSjU4X4*LNOtdVlo1vCmJUE96vrQfLzfpbv81+JZF4r16Y*i+2Bgo4XfiJOvzMUiTWErvZOtdjp5PDWs5zF*wGcEZisYRyjjh9Zd5d2f3mIdBfbDj7XQL+aR8t2vT95daeTJU5GM03Gx2FfNS*DXgcNyZk32pT23*VN9iXFiri+pELbhyR3h0H+5MQejc+cJJjF+BL+iHV07*h3dpxgLvQOFG6lbKOoLReYYoH27xobfwaMtHyYVWqnw05OXX4G8n5lSuZaNFp9SRJ2nRmlSqR02y7QWL5TsSl6lt7fVOkuBP+JCX9Hcobc+0jplIjlmYqSWrzZFjz6IU52YtTfanwfu7dM4dYxufku7Rdf3LQTNk32O17qnYusAi2QTKeb7Vnd5Il5yeRRIrub49JzqhehyBvvhoA4owYZxCTvLsuSfrbQCjao1CiviTXnAd7qKVR1vT+ub44e0g+be9EDA53Ax1IazH2*lkFcTUrQP9DbRBQfMQMYYimzCe03qKGIMYMdD*8682yNCNv4Rr2sliG8SEMu5nZZHmMPpQ9eMQhmFeZnxdZ+GgWSAK+sLnNuKcZJg1PJYZpGFCKjRIIGegH8OUoZ8TIooi0Oe0RD9TO8ijhnjbMleuIyqgDc5PQUjUmERWdKGri6Kk98S+qv7Bvl2burAovmWIgzZIX*fUntZVZEVWZUXTnzebg8dPiE3FCHFIUgb6YDBZrNIQT0cLi8lsalnGCBsDbIDPkT688eJ+evEjedbdmiOKKz3mxdqUdSuO8yJRWYEP+QhWmzA+mE3W*l0E9AErrpQNFC2TikEpd7Sj3CPy*JJpnFtH2+mku9LajdXzGHXjVj1nJYosqXsfCrtgj+2WwrxVtiGoQIUtLOpwvghWE9wYqQ0iVJEQ*aOZK6Yzd4Z1ORxtDSff76Iq5rGb7HtBOUDI2mzkeOLJrcMuXoa3ilMROuuRhpSdPrrm8nI66c4nVj6116vEDdxjchlg*HLtMzXpj9eKPP3UiNX8xgQ9w5*BRsIviPdC3phMeLR*KfLjPfmPTJqem9rRHYl45SqTjt2FPo46ZiZr7h4F7t6CpkXFnS0tD3vwePzVBkUKeZzTM+gDUiR5hkAb0LxsTDvO4vw3vQYGHhs*Jk8h48ZnEDxyRozDcwH6YleVNK3b1dTXrQXNCxuypCFhIe6TuHF1bRTFmkP+kStgNN+71QOPvwFQSwECFAMUAAAICAAxYfBa4KuZf0sEAABzBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAABzBAAAAAA=',
  
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
