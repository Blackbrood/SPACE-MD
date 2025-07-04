require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAM005FpcYYgMTwQAAHIHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGLmptBEdsSCIiIiK9415KKGA4loWBYoT*vsG9mX6YXeil6eiKiPz5Mlz8hfIC1wiCzVg9AsQimvIUHtkDUFgBNQqCBAFXeBDBsEIjMeRs1iKc+l89p31+CqSs61LIVlsOnNzlwrVcZ44e4Lve+UVPLqAVOcUe39IyG*Xrn5Fc3ifndanmL9PInwPzGRYj8XZcHjsZ8UArU73zXX1Ch5tRogpzkOdRChDFKYWapYQ0+*Bl1VnosVmyBdcci4FMxTJ3LOny77JaxNxsDnspRdPME7WRP8efG6qmLKYbtOLvZXd9IoXSRqohshCjkj8fru0OoeT7NYmt32DX+IwR77po5xh1nyf96niz4O41gZeHeu3eQ+J58iyd5qznKfXxk*85uBoWU*Kwu8Bdxi9qoFrXfisd5NP6VAu0vmGl4uBfAht5eTZvclLxCbH3PwKfEk*tJL8H94vi1DPQ21F8ijLvUNuOoeN3oyPbrU3BkeduRyinTCPF7r8Pfi+HCeD5qQdaGV4vi2n*WLnKhe84+Smuq0bKE6ygMD4zn+BD1lF*4SSTjvVfBrcrNllEcGtZ1jr*i2ZpiHlVX*hjoVEo32qFjdZT6U+NIzB3I7LQ5ZV+0oXdpPVrPMi1TyR8DLqTTqLl5tra9fXZ0cJakwfjPhHF1AU4pJRyHCRt3fCsAugX7vIo4g92QV2WFX7dZEtOQMndK2vYrQm++BQn51GrKaSeHeUglzQKk5eQRcQWnioLJE*xSUraGOjsoQhKsHo759dkKMbe5tbW03kuyDAtGTbvCJpAf2PoX48Qs8rqpy5Te6N2wOiYMT9vkaM4TwsWxqrHFIvwjUaR5CVYBTAtESfDSKKfDBitEKfph0Xfsu72H9R5JO8B12QPeeBfTACgijJ3FDmeUF+4UeS9Ff549rmhYT8yBEDXZC+xfVfBkNJlMS+KA3kZ2T78PiE2Gb0EYM4LVvnOO6uIrajL3KWe7ZhKHqojEMF*G7pQxrv3F+2vrgY7lWdhrUcMOKqomwEQUGifknCU6HDeucFJzUNX*8lCRiBo3g7RuOzcKz4LVdIZ3+NsU+sQjo4cXO8zThUY2eIxGSuboRSEMasolo6Q5yvaupWvTiXxj5M0t7dvwgztzfX77NDvHptq*moxh76Wuyq2DNz1i9kV7P6+11BeNuLzquMJuN6uNnnrPD2Q+k6yMl92okNeLcpm4TneFc0A6vXoI2FubBeLbQ0c3mtdm6bkmnhm2ifpknflxV+6qkdVvsbYPT0fg7bEX5jeG*IW5Fxj+6XJO*r5D8sqW6sdOrfER+uLWnemw7hNvR7ai4OrCM6W0cDqgblD1NhdTqCx+NnF5AUsqCgGRgBTKIiR6ALaFG1ojXzoPjTjlVCU3nvPIUlU34bYYMzVDKYETDih31+wPM8x79FLWlBprCMWhKW*DEKWlU3CiEug+zDV0BpP3Olg8c*UEsBAhQDFAAACAgAzTTkWlxhiAxPBAAAcgcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA',
  BOT_ADMIN: process.env.BOT_ADMIN || '2348078112891',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Blackbrood',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 4,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
