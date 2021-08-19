const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mo3tasem66@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app ${name}. Let me know how things go along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mo3tasem66@gmail.com",
    subject: "Sorry for losing you!",
    text: `Please ${name} provide us with your feedback may we improve our services`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
