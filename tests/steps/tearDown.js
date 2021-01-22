const AWS = require('aws-sdk')

const an_authenticated_user = async (user) => {
  const cognito = new AWS.CognitoIdentityServiceProvider()
  
  let req = {
    UserPoolId: process.env.COGNITO_USER_POOL_ID,
    Username: user.username
  }
  await cognito.adminDeleteUser(req).promise()
  
  console.log(`[${user.username}] - user deleted`)
}

module.exports = {
  an_authenticated_user
}