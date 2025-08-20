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
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Reset your password - Action required</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="mx-auto bg-white rounded-[8px] px-[40px] py-[40px] max-w-[600px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[24px] font-bold text-gray-900 m-0">
                Reset Your Password
              </Heading>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hi there,
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                We received a request to reset the password for your account
                associated with {userEmail}.
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Click the button below to create a new password:
              </Text>
            </Section>

            {/* CTA Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={resetLink}
                className="bg-blue-600 text-white px-[32px] py-[12px] rounded-[8px] text-[16px] font-medium no-underline box-border inline-block"
              >
                Reset Password
              </Button>
            </Section>

            {/* Security Info */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[12px]">
                This link will expire in 24 hours for security reasons.
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[12px]">
                If you didn&apos;t request this password reset, please ignore this
                email or contact our support team if you have concerns.
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px]">
                For security, you can also copy and paste this link into your
                browser:{" "}
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
                Best regards,
                <br />
                The Support Team
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] mt-[16px] m-0">
                123 Business Street, Suite 100
                <br />
                Business City, BC 12345
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] mt-[8px] m-0">
                <Link href="#" className="text-gray-500 underline">
                  Unsubscribe
                </Link>{" "}
                | © 2025 Your Company Name. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordResetEmail;
