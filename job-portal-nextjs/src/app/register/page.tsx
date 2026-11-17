"use client";
import { Input } from "@/components/ui/input";
import React from "react";
interface RegistrationProps {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  role?: "applicant" | "employer";
}
const Registration: React.FC<RegistrationProps> = () => {
  const [formData, setFormData] = React.useState<RegistrationProps>({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "applicant",
  });
  return (
    <div>
      <form>
        <div>{<Input type="text" placeholder="Username"></Input>}</div>
      </form>
    </div>
  );
};

export default Registration;
