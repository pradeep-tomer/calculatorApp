import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken,
} from 'react-native-fbsdk-next';

export const facebookLogin = () => {
  LoginManager.logInWithPermissions(['public_profile'])
    .then(
      res => {
        console.log('Response: ', res);
      },
      // function(result) {
      //   if (result.isCancelled) {
      //     console.log("Login cancelled");
      //   } else {
      //     console.log("Result: ",result)
      //     console.log(
      //       "Login success with permissions: " +
      //         result.grantedPermissions
      //     );
      //   }
      // },
      // function(error) {
      //   console.log("Login fail with error: " + error);
      // }
    )
    .catch(err => {
      console.log('error: ', err);
    });
};

export const FBLogout = async () => {
  const token = await AccessToken.getCurrentAccessToken();
  console.log('token: ', token?.accessToken);
  LoginManager.logOut();

  // let logout =
  //     new GraphRequest(
  //         "me/permissions/",
  //         {
  //             accessToken: token,
  //             httpMethod: 'DELETE'
  //         },
  //         (error, result) => {
  //           console.log("error: ",error);
  //           console.log("result: ",result);
  //             // if (error) {
  //             //     console.log('Error fetching data: ' + error.toString());
  //             // } else {
  //             //     LoginManager.logOut();
  //             // }
  //         });
  // new GraphRequestManager().addRequest(logout).start();
};
