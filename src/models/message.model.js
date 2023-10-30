const register = (name) => {
    return `
    <div style="padding-top: 100px; text-align: center;">
    <img src="https://res.cloudinary.com/deviti/image/upload/v1698524616/vijiPay_1_rlq2tz.png" width="80px" height="80px" alt="logo">
    <h1>Welcome to vijiPay</h1>
    <p>Dear ${name}, <br /> Thank you for registering on our platform. We are thrilled to have you as a user! <p/>
    <p>To get started, verify your email address and read more about how the platform benefits you.</p>
    <a href="https://vijipay.ng/getting-started" style="display: inline-block; padding: 10px 20px; background-color: #098700; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 15px;">Read more</a>
    <p>If you have any questions or need assistance, feel free to contact our support team.</p>
    <p>Best regards,</p>
    <p>Shemang from vijiPay</p>
    ${footer}
  </div>
    `
}

const confirmEmail = (code) => {
    return `
    <div style="padding-top: 100px; text-align: center;">
    <img src="https://res.cloudinary.com/deviti/image/upload/v1698524616/vijiPay_1_rlq2tz.png" width="80px" height="80px" alt="logo">
    <h1>Verify your Email Address with vijiPay</h1>
    <p>Click the button below to verify your email address.<p/>
    <p>We just want to ensure we have the correct address from you</p>
    <a href="https://vijipay.ng/auth/email-confirmation?code=${code}" style="display: inline-block; padding: 10px 20px; background-color: #098700; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 15px;">VERIFY YOUR EMAIL</a>
    <p><small>or copy this link and paste in your browser: <a href="https://vijipay.ng/auth/email-confirmation?code=${code}"> https://vijipay.ng/auth/email-confirmation?code=${code}</a></small></p>
    ${footer}
  </div>
    `
}

const requestPasswordReset = (name, code) => {
    return `
    <div style="padding-top: 100px; text-align: center;">
    <img src="https://res.cloudinary.com/deviti/image/upload/v1698524616/vijiPay_1_rlq2tz.png" width="80px" height="80px" alt="logo">
    <h1>Dear user,</h1>
    <p>Click the button below to change your password.<p/>
    <p>if you did not make this request, IGNORE this message</p>
    <a href="https://vijipay.ng/auth/resetpassword?email=${name}&code=${code}" style="display: inline-block; padding: 10px 20px; background-color: #098700; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 15px;">VERIFY YOUR EMAIL</a>
    <p><small>or copy this link and paste in your browser: <a href="https://vijipay.ng/auth/resetpassword?${name}&code=${code}"> https://vijipay.ng/auth/resetpassword?email=${name}&code=${code}</a></small></p>
    ${footer}
  </div>
    `
}

const footer = `
<hr />
<h4>Need help?</h4>
<p> Get in touch by emailing Customer success at</p>
<a href="mailto:help@vijipay.ng">help@vijipay.ng</a>
`
const messages = { register, confirmEmail, requestPasswordReset };

export default messages;