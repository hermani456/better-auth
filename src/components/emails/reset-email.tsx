import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface PasswordResetEmailProps {
  userEmail: string;
  resetLink: string;
}

const PasswordResetEmail = ({
  userEmail,
  resetLink,
}: PasswordResetEmailProps) => {
  return (
    <Html lang="es" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Restablecer tu contraseña - Acción requerida</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="mx-auto bg-white rounded-[8px] px-[40px] py-[40px] max-w-[600px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 m-0">
                Restablecer tu contraseña
              </Heading>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hola,
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hemos recibido una solicitud para restablecer la contraseña de
                tu cuenta asociada con {userEmail}.
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Haz clic en el botón de abajo para crear una nueva contraseña:
              </Text>
            </Section>

            {/* CTA Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={resetLink}
                className="bg-blue-600 text-white px-[32px] py-[12px] rounded-[8px] text-[16px] font-medium no-underline box-border inline-block"
              >
                Restablecer contraseña
              </Button>
            </Section>

            {/* Security Info */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[12px]">
                Este enlace expirará en 24 horas por razones de seguridad.
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[12px]">
                Si no solicitaste este restablecimiento de contraseña, por favor
                ignora este correo electrónico o contacta a nuestro equipo de
                soporte si tienes alguna inquietud.
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px]">
                Por seguridad, también puedes copiar y pegar este enlace en tu
                navegador:{" "}
                <Link
                  href={resetLink}
                  className="text-blue-600 underline break-all"
                >
                  {resetLink}
                </Link>
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                Saludos cordiales,
                <br />
                El equipo de soporte
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] mt-[16px] m-0">
                Avenida Arturo Prat 157, Oficina 701
                <br />
                Iquique, Chile
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] mt-[8px] m-0">
                <Link href="#" className="text-gray-500 underline">
                  Darse de baja
                </Link>{" "}
                | © {new Date().getFullYear()} Abotgado. Todos los derechos
                reservados.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordResetEmail;
