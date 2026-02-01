import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import OTPInput from "../../components/auth/OTPInput";
import PrimaryButton from "../../components/auth/PrimaryButton";

export default function VerifyOTP() {
  return (
    <AuthLayout>
      <AuthCard>
        <h2 className="text-center text-xl font-semibold">
          Check your email
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          We sent a verification code
        </p>

        <div className="mt-6 space-y-6">
          <OTPInput />
          <PrimaryButton>Verify</PrimaryButton>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
