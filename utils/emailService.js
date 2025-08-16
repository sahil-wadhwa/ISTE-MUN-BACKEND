// const nodemailer = require("nodemailer");

// // Configure transporter using your SMTP service credentials
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const sendConfirmationEmail = async (toEmail, fullName) => {
//   const mailOptions = {
//     from: `"CUMUN 2025 Registration" <${process.env.EMAIL_USER}>`,
//     to: toEmail,
//     subject: "Welcome to CUMUN 2025 – Registration Confirmation",
//     html: `
//       <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
//         <p>Dear ${fullName},</p>

//         <p>Thank you for registering for <strong>CUMUN 2025</strong>, hosted by the <strong>ISTE Student Chapter</strong> at <strong>Chandigarh University</strong>. We are thrilled to have you join us for this prestigious Model United Nations event, scheduled to be held during the <strong>first week of September 2025</strong> as a proud part of <strong>Technisia 2025</strong>.</p>

//         <p>Our team has successfully received your registration details and will be reaching out to you shortly regarding the next steps, including allotments, event guidelines, and participation formalities.</p>

//         <p style="color: #c0392b;"><strong>Important Notice:</strong><br/>
//         Please <u>do not make any payments</u> to unofficial sources. All official communication and updates will be shared by the CUMUN 2025 team only.</p>

//         <p>Stay connected with us on Instagram for real-time updates on <strong>portfolio matrix releases</strong>, <strong>event announcements</strong>, and more:<br/>
//         👉 <a href="https://www.instagram.com/cumodelunitednations?igsh=OG1xZWxtY3hweDRw" style="color: #2980b9;">@cumunofficial</a></p>

//         <p>If you have any queries, feel free to contact us at <a href="mailto: iste@cumail.in ">iste.cu@chandigarh.edu</a></p>

//         <p>Warm regards,<br/>
//         <strong>Team CUMUN 2025</strong><br/>
//         ISTE Student Chapter<br/>
//         Chandigarh University</p>
//       </div>
//     `,
//   };

//   try {
//     let info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: ", info.response);
//   } catch (err) {
//     console.error("Error sending email:", err);
//     throw err;
//   }
// };

// module.exports = { sendConfirmationEmail };

const nodemailer = require("nodemailer");

// Configure transporter using your SMTP service credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendConfirmationEmail = async (toEmail, fullName) => {
  const mailOptions = {
    from: `"CUMUN 2025 Registration" <${process.env.EMAIL_USER}>`, // Note: Using process.env.EMAIL_USER as sender
    to: toEmail,
    subject:
      "✅ Registration Confirmed – CUMUN 2025 at Technicia | 13th–15th October",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <p>Dear ${fullName},</p>

        <p>We are delighted to confirm your successful registration for <strong>CUMUN 2025</strong>, proudly organized by the <strong>ISTE Student Chapter, Chandigarh University</strong>, as an integral part of <strong>Technicia 2025</strong>, scheduled to be held from <strong>13th–15th October 2025</strong>.</p>

        <p>Your participation in this prestigious Model United Nations conference marks the beginning of an intellectually stimulating journey that brings together delegates from diverse backgrounds to deliberate on global issues and foster diplomatic discourse.</p>

        <p>Our team has duly received your registration details. You will shortly receive further communication regarding portfolio allotments, event guidelines, and participation formalities.</p>

        <p style="color: #c0392b;"><strong>⚠ Important Advisory:</strong><br/>
        Please refrain from making any payments to unofficial sources. All authentic communication will be routed exclusively through the official CUMUN 2025 channels.</p>

        <p><strong>📢 Stay Updated:</strong><br/>
        Follow us on Instagram <a href="https://www.instagram.com/cumodelunitednations?igsh=OG1xZWxtY3hweDRw" style="color: #2980b9;">@cumunofficial</a> for real-time updates including portfolio matrix releases, announcements, and event highlights.</p>

        <p>For any queries or clarifications, you may reach out to us at:<br/>
        📧 <a href="mailto:iste@cumail.in">iste@cumail.in</a></p>

        <p>We look forward to your active participation and contribution in shaping meaningful discussions at CUMUN 2025.</p>

        <p>Warm regards,<br/>
        <strong>Team CUMUN 2025</strong><br/>
        ISTE Student Chapter<br/>
        Chandigarh University</p>
      </div>
    `,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
};

module.exports = { sendConfirmationEmail };
