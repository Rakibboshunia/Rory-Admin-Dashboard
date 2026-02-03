import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import PrimaryButton from "../../components/auth/PrimaryButton";
import Logo from "../../../src/Assets/images/logo3.png";
import BackNextActions from "../../components/auth/BackNextActions";

export default function Login() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <AuthCard>
        <div className="text-center space-y-6">
          <img src={Logo} className="mx-auto h-30 scale-[1.3]" />
          <h2 className="text-3xl font-semibold">Login to Account</h2>
          <p className="text-md text-gray-500">
            Please enter your email and password to continue
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* Form */}
          <AuthInput label="Email Address" placeholder="admin@email.com" />

          <AuthInput label="Password" type="password" placeholder="********" />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 cursor-pointer"
              />
              Remember password
            </label>

            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <PrimaryButton onClick={() => navigate("/")}>Sign In</PrimaryButton>
        </div>

      </AuthCard>
    </AuthLayout>
  );
}
