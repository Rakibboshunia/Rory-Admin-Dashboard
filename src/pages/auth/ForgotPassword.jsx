import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import PrimaryButton from "../../components/auth/PrimaryButton";
import Logo from "../../assets/images/logo3.png";

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <AuthCard>
        <div className="text-center space-y-5">
            <img src={Logo} className="mx-auto h-25" />
            <h2 className="text-center text-xl font-semibold">
            Forgot Password?
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500">
            Please enter your email to get verification code
            </p>
        </div>

        <div className="mt-6 space-y-4">
          <AuthInput label="Email Address" placeholder="admin@email.com" />
          <PrimaryButton>Continue</PrimaryButton>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
