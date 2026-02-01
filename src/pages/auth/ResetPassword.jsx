import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import PrimaryButton from "../../components/auth/PrimaryButton";

export default function ResetPassword() {
  return (
    <AuthLayout>
      <AuthCard>
        <h2 className="text-center text-xl font-semibold">
          Set a new password
        </h2>

        <div className="mt-6 space-y-4">
          <AuthInput
            label="New Password"
            type="password"
            placeholder="********"
          />
          <AuthInput
            label="Confirm Password"
            type="password"
            placeholder="********"
          />
          <PrimaryButton>Reset Password</PrimaryButton>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
