import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Tailwind,
} from "@react-email/components";

interface UserVerificationEmailProps {
  userEmail: string;
  verificationUrl: string;
}

const UserVerificationEmail = ({
  userEmail,
  verificationUrl,
}: UserVerificationEmailProps) => {
  return (
    <Html lang="es" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] p-[32px] max-w-[600px] mx-auto">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[24px] font-bold text-gray-900 m-0">
                Verifica tu dirección de correo electrónico
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Hola,
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                ¡Gracias por registrarte! Para completar tu registro y
                asegurar tu cuenta, por favor verifica tu dirección de correo electrónico haciendo clic en el botón de abajo.
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                Correo electrónico a verificar: <strong>{userEmail}</strong>
              </Text>
            </Section>

            {/* CTA Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
              >
                Verificar dirección de correo electrónico
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                Si el botón no funciona, puedes copiar y pegar este enlace en tu navegador:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all m-0">
                {verificationUrl}
              </Text>
            </Section>

            {/* Security Note */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                <strong>Nota de seguridad:</strong> Este enlace de verificación
                expirará en 24 horas por tu seguridad. Si no creaste una cuenta
                con nosotros, por favor ignora este correo electrónico.
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[24px]" />

            {/* Footer */}
            <Section className="text-center">
              <Text className="text-[12px] text-gray-500 m-0">
                © {new Date().getFullYear()} Abotgado. Todos los derechos
                reservados.
              </Text>
              <Text className="text-[12px] text-gray-500 m-0">
                Avenida Arturo Prat 157, Oficina 701, Iquique, Chile
              </Text>
              <Text className="text-[12px] text-gray-500 m-0">
                <a href="#" className="text-gray-500 no-underline">
                  Darse de baja
                </a>{" "}
                |
                <a href="#" className="text-gray-500 no-underline ml-[8px]">
                  Política de privacidad
                </a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default UserVerificationEmail;
