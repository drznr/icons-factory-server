const nodemailer = require("nodemailer");

const nodemailerModule = {
    sendMail: async (data) => {
        let mailBody = `
            <p><b>from:</b> ${data.name}</p>
            <p><b>email:</b> ${data.email}</p>
            <p><b>message:</b> ${data.msg}</p>
        `;

        let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 25,
            secure: false,
            auth: {
                user: "iconsfactory2019@gmail.com",
                pass: "Factory2019"
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        let mailOptions = {
            from: `"Icons Factory" ${data.email}`, // sender address
            to: "dresnerdaniel@gmail.com", // list of receivers
            subject: `Message Recieved ✔`, // Subject line
            html: mailBody // html body
        };

        let info = await transporter.sendMail(mailOptions);
        return info;
    }
}

module.exports = nodemailerModule;