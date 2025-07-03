require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIACo+41rR3VGIUQQAAHIHAAAKAAAAY3JlZHMuanNvbpVU27KiOBT9l7xqtdxEsOpUDRevCCIoHp3qhwgBolxDQLTLf59C+*Tph5muMzyFJLX22muvlR8gy3GFDHQD4x+gILiBFHVLeisQGAO1DkNEQB8EkEIwBqadMJk0cEPO21RhK9jmUhlxzsU8luhuKS5bTvdFdHFW6e4NPPqgqE8J9v8A6OnTzN9pKs0N1qEq4*nn5dnUg5UsanVqDeOD7Kjyton56g08OkSICc6iSRGjFBGYGOhmQ0y+Rt81rb16PTU3ZPGBclwXV0G1NNqL7H0wG05SI7HK*amHVKb6Gn3KDQtHYoSVMDAXvdNhu7xCMtlv0ibi73P+ojKrkj3vzjxnvuhXOMpQsAhQRjG9fVl3Y0Ks49UOb5lEbG0ubA*zDloO27nC201viZw8wXCU7C9fI35yhSiPBuXq0nNGnG1cKZ6bZbUrWkfYH61ma+rDWr6qS035nbhNPrxy+T+6R2sPSu5Jx*Fgm5ZXDr9zK1I7EuS1cmAZ0eVcB3FG7un0+jX66TwVWteLZNuD51KcHBzxzjKxuUtO8tq4iwxMc1zaSjOLPulDWpM*sRxMI32Rzk+bPCvydrZJyDrO9F1VHzJG4GV0uU*v+tK7abt6RPzIEtZau*LXZcLdynfjGsq8Fk5ah50578ONe9lIiaFp17dnRxd0WwRgzD76gKAIV5RAivOs2+O4PoBB4yKfIPpUF2Bm0EbBxYfqAkmXbW7qQSgyrBwduVWhUrybehJyYl9xmTfQBwXJfVRVKJjjiubkZqKqghGqwPjv732QoZa+5tZV49k+CDGp6C6riySHwcdQPw6h7+d1Rt1b5mvdAhEwZj63EaU4i6pOxjqDxI9xg7QY0gqMQ5hU6FeDiKAAjCmp0a*QannQ6e69z9W9fnBAH6TPeeAAjAHHCxIzkliWk2R2LLB*Vd+uHS4sim8ZoqAPkte9oSyOBF7gh7wgSs+b3cHjF8UOMUAU4qQCY6CtDa8uzPXEnpPUNGczZRIpWqSAz5Y+rPHS3ix3AW+N9uqERI0U0sJVeWkWhnkRD6siOuYT2Hh+eFST6O1fQLpXptkkUzserJPaPe6yzf467Fm1aL2vvYt+zlqyHN2I6LoWV5U9OLuRwhFPOx8dDm08abbovHKUBb9iRmKphvoGlub7Enc+6oMANdhHvxdr40F9jma+U8t6mLv0eFxMUNqO1vjo6pbO1ovmoom+zvMrxHjeIpse271YTBmBjGYTy+y51wNaiGHaO3Gtup24JfT06GXaZ2iSn48VfvqpG1b3G2L0zH4GuxF+YXgv5p3JmEf*N5Cfz8l*RFLdGsk8uCM2cgxhNZiP4C4KBmrGi8YBnYzDDKozwr7Puc3xAB6P731QJJCGOUm7FBVxniHQBySvO9MusjD*Qy1NiRbKz84TWFHlMwhbnKKKwrQAY3Y0ZIecJAvy65ZN8mIOq7gTwWYPcdi5+qYUhUsh*cgVULrPbHTw+AdQSwECFAMUAAAICAAqPuNa0d1RiFEEAAByBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  BOT_ADMIN: process.env.BOT_ADMIN || '2348078112891',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Blackbrood',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 20,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
