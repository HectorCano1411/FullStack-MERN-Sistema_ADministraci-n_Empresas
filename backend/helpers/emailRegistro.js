import nodemailer from  'nodemailer';


const emailRegistro =  async (datos) => {

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,   
        },
      });
    const {email, nombre, token} = datos;

    // ENVIAR EMAIL

      const info = await transporter.sendMail({
        from: "SAE - Sistema de Administrador de Empresas",
        to: email,
        subject: 'Comprueba tu cuenta en  SAE',
        text: ' Comprueba tu cuenta en SAE',
        html: `<p> Hola ${nombre}, comprueba tu cuenta en SAE. </p>
            <p> Tu cuenta esta lista solo debes comprobarla en el siguiente enlace:
            <a href="process.env.FRONTEND_URL/confirmar/${token}">Comprobar cuenta </a> </p>

            <p> Si tu no creaste esta cuenta puedes ignorar este mensaje </p>

        `,

      });
      console.log('Mensaje enviado : %s', info.messageId)
};

export default emailRegistro