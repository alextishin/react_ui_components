// config/email.js
module.exports = {
  //Custom transporter object to send email, by default created from smtp values but can be override here
  customTransporter: null,

  /*
   * SMTP Configuration
   * @see {@link http://nodemailer.com/2-0-0-beta/setup-smtp/}
   */
  smtp: {
    host: '#',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'user@mail.com',
      pass: 'pass'
    }
  },
  /*
   * Default data use with EmailService.send
   * from, to, css, bcc, subject, text, html, attachments
   */
  defaultData: {
    from: 'noreply@mail.com'
  }
}

// Usage
// Now you can send emails like this :
//
// this.app.services.EmailService.send({
//   to: 'user@gmail.com',
//   subject: 'Test',
//   text: 'test',
//   html: '<p>test</p>'
// }, (err, info) => {
//
// })
// //Or with Promise
// this.app.services.EmailService.send({
//   to: 'user@gmail.com',
//   subject: 'Test',
//   text: 'test',
//   html: '<p>test</p>'
// }).then(info => {
//
// }).catch(err => this.log.error(err))
