import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import PrimaryButton from "../../components/auth/PrimaryButton";
import Logo from "../../assets/images/logo.png";

export default function Success() {
  return (
    <AuthLayout>
      <AuthCard>
        <div className="text-center space-y-4">
          <img src={Logo} className="mx-auto h-10" />
          <h2 className="text-xl font-semibold">
            Password Updated Successfully!
          </h2>
          <PrimaryButton>Sign In</PrimaryButton>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
