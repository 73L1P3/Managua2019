const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  //verificamos si el admin pide algo
  if (context.auth.token.admin !== true) {
    return { error: 'Solo un Admin puede agregar otro Admin, Fuerte!' };
  }

  //Tomamos el usuario y agregamos custom claim
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
      });
    })
    .then(() => {
      return {
        message: `Exito! ${data.email} se ha convertido en Admin`
      };
    })
    .catch(err => {
      return err;
    });
});
