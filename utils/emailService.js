// // backend/utils/emailService.js
// const nodemailer = require('nodemailer');

// // Configure transporter using your SMTP service credentials
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const sendConfirmationEmail = async (toEmail, fullName, delegateType, university, committee1, committee2, eventDates, venue) => {
//   const mailOptions = {
//     from: `"CUMUN 2025 Registration" <${process.env.EMAIL_USER}>`,
//     to: toEmail,
//     subject: 'Registration Confirmation for CUMUN 2025 – Welcome to Technisia 2025!',
//     html: `
//       <p>Dear ${fullName},</p>
//       <p>Thank you for registering for <strong>CUMUN 2025</strong>, a dynamic 3-day Model United Nations conference, proudly organized as part of the <em>Technisia 2025</em> festival.</p>
//       <p><strong>Event Details:</strong><br/>
//       - <strong>Event:</strong> CUMUN 2025 – Model United Nations Conference<br/>
//       - <strong>Duration:</strong> 3 days<br/>
//       - <strong>Part of:</strong> Technisia 2025<br/>
//       - <strong>Dates:</strong> ${eventDates}<br/>
//       - <strong>Venue:</strong> ${venue}</p>

//       <p>We are delighted to have you join us as a <strong>${delegateType}</strong> representing <strong>${university}</strong>. Your committee preferences have been recorded as:<br/>
//       - <strong>Primary Committee:</strong> ${committee1}<br/>
//       - <strong>Secondary Committee:</strong> ${committee2 || "N/A"}</p>

//       <p>Your participation will be invaluable, providing an opportunity to engage in diplomatic discourse, develop critical leadership skills, and network with fellow delegates across the region.</p>

//       <p><strong>Important Information:</strong><br/>
//       - Please carry a valid government-issued ID for registration verification.<br/>
//       - <strong>Dress Code:</strong> Formal business attire or traditional ethnic wear is required to maintain the decorum of the event.</p>

//       <p>For any queries or further assistance, please contact us at <a href="mailto:iste.cu@chandigarh.edu">iste.cu@chandigarh.edu</a> or call +91-XXXXXXXXXX.<br/>
//       Stay updated by following our official Instagram handle: <a href="https://instagram.com/iste.cuchandigarh" target="_blank">@iste.cuchandigarh</a>.</p>

//       <p>We look forward to welcoming you to an enriching and memorable CUMUN 2025 experience.</p>

//       <p>Best regards,<br/>
//       The CUMUN 2025 Team<br/>
//       Technisia 2025 Organizing Committee<br/>
//       <a href="https://mun-iste.vercel.app" target="_blank">https://mun-iste.vercel.app</a></p>
//     `,
//   };

//   try {
//     let info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ', info.response);
//   } catch (err) {
//     console.error('Error sending email:', err);
//     throw err;
//   }
// };

// module.exports = { sendConfirmationEmail };

//

// backend/utils/emailService.js
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
    from: `"CUMUN 2025 Registration" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "Welcome to CUMUN 2025 – Registration Confirmation",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <p>Dear ${fullName},</p>

        <p>Thank you for registering for <strong>CUMUN 2025</strong>, hosted by the <strong>ISTE Student Chapter</strong> at <strong>Chandigarh University</strong>. We are thrilled to have you join us for this prestigious Model United Nations event, scheduled to be held during the <strong>first week of September 2025</strong> as a proud part of <strong>Technisia 2025</strong>.</p>

        <p>Our team has successfully received your registration details and will be reaching out to you shortly regarding the next steps, including allotments, event guidelines, and participation formalities.</p>

        <p style="color: #c0392b;"><strong>Important Notice:</strong><br/>
        Please <u>do not make any payments</u> to unofficial sources. All official communication and updates will be shared by the CUMUN 2025 team only.</p>

        <p>Stay connected with us on Instagram for real-time updates on <strong>portfolio matrix releases</strong>, <strong>event announcements</strong>, and more:<br/>
        👉 <a href="https://instagram.com/iste.cuchandigarh" style="color: #2980b9;">@cumunofficial</a></p>

        <p>If you have any queries, feel free to contact us at <a href="mailto: iste@cumail.in ">iste.cu@chandigarh.edu</a></p>

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
