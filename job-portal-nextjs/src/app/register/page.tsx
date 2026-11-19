"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Eye,
  EyeOff,
  Search,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type RegistrationFormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "applicant" | "employer";
};

const RoleData = [
  {
    value: "applicant",
    title: "Applicant",
    description: "I’m looking for work",
  },
  {
    value: "employer",
    title: "Employer",
    description: "I’m growing a team",
  },
] as const;

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "applicant",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const updateField = (name: string, value: string) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  console.log("Form Data:", formData);
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#edf3ee] px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_32px_100px_-36px_rgba(20,54,39,0.28)] lg:min-h-[800px] lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="relative hidden flex-col justify-between overflow-hidden bg-[linear-gradient(145deg,#163d32_0%,#205541_52%,#102d26_100%)] p-10 text-white lg:flex xl:p-14">
          <div className="absolute -right-36 top-16 size-[28rem] rounded-full border border-white/[0.08]" />
          <div className="absolute -right-20 top-32 size-80 rounded-full border border-white/[0.08]" />
          <div className="absolute -bottom-52 -left-40 size-[34rem] rounded-full bg-[#2c684e]/50 blur-sm" />
          <div className="absolute left-0 top-1/3 h-40 w-px bg-gradient-to-b from-transparent via-[#c4f06a]/50 to-transparent" />

          <Link
            href="/"
            className="relative flex w-fit items-center gap-2.5 text-lg font-semibold tracking-tight"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#c4f06a] text-[#173c32] shadow-[0_8px_24px_-8px_rgba(196,240,106,0.7)]">
              <BriefcaseBusiness className="size-5" aria-hidden="true" />
            </span>
            workwise<span className="text-[#c4f06a]">.</span>
          </Link>

          <div className="relative my-12 max-w-lg">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c4f06a]/25 bg-[#c4f06a]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d3f58b]">
              <span className="size-1.5 rounded-full bg-[#c4f06a]" />A better
              way to work
            </p>
            <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-0.04em] xl:text-[3.4rem]">
              Your next move starts with the{" "}
              <span className="text-[#c4f06a]">right connection.</span>
            </h1>
            <p className="mt-6 max-w-sm text-[15px] leading-7 text-white/70">
              Meet the people and opportunities that help you build a career
              you&apos;re excited about.
            </p>

            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#c4f06a]/15 text-[#c4f06a] ring-1 ring-inset ring-[#c4f06a]/20">
                <Search className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold">Find your kind of work</p>
                <p className="mt-1 text-xs leading-5 text-white/60">
                  The right role. The right team. Your next chapter.
                </p>
              </div>
              <ArrowRight
                className="ml-auto size-4 shrink-0 text-[#c4f06a]"
                aria-hidden="true"
              />
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-white/55">
              <div className="flex -space-x-2">
                <span className="flex size-7 items-center justify-center rounded-full border-2 border-[#1c4939] bg-[#f2c7a5] text-[9px] font-semibold text-[#503b2b]">
                  J
                </span>
                <span className="flex size-7 items-center justify-center rounded-full border-2 border-[#1c4939] bg-[#d7e9be] text-[9px] font-semibold text-[#31513c]">
                  M
                </span>
                <span className="flex size-7 items-center justify-center rounded-full border-2 border-[#1c4939] bg-[#d4d7f0] text-[9px] font-semibold text-[#41456e]">
                  A
                </span>
              </div>
              <span>For people ready to grow</span>
            </div>
          </div>

          <p className="relative text-xs tracking-wide text-white/45">
            Find your way forward.
          </p>
        </aside>

        <section className="flex items-center justify-center bg-white px-5 py-8 sm:px-10 sm:py-12 lg:px-12 xl:px-16">
          <div className="w-full max-w-xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-base font-semibold tracking-tight text-[#163d32] lg:hidden"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-[#eaf4e5] text-[#28634d]">
                <BriefcaseBusiness className="size-4" aria-hidden="true" />
              </span>
              workwise<span className="text-[#75a44d]">.</span>
            </Link>

            <div className="mb-7">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.17em] text-[#578264]">
                Get started for free
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#19231e] sm:text-[2.35rem]">
                Create your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#78827b]">
                Join workwise and take the next step in your career.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[13px] font-semibold text-[#34443a]"
                  >
                    Full name{" "}
                    <span className="text-[#d96a5e]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jordan Lee"
                    value={formData.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      updateField("name", event.target.value)
                    }
                    required
                    className="h-12 rounded-xl border-[#e1e7e2] bg-[#fbfcfb] px-3.5 text-sm placeholder:text-[#a0a9a2] focus-visible:border-[#5b8c6b] focus-visible:bg-white focus-visible:ring-[#5b8c6b]/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-[13px] font-semibold text-[#34443a]"
                  >
                    Username{" "}
                    <span className="text-[#d96a5e]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    placeholder="jordanlee"
                    value={formData.username}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      updateField("username", event.target.value)
                    }
                    required
                    className="h-12 rounded-xl border-[#e1e7e2] bg-[#fbfcfb] px-3.5 text-sm placeholder:text-[#a0a9a2] focus-visible:border-[#5b8c6b] focus-visible:bg-white focus-visible:ring-[#5b8c6b]/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[13px] font-semibold text-[#34443a]"
                >
                  Email address{" "}
                  <span className="text-[#d96a5e]" aria-hidden="true">
                    *
                  </span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    updateField("email", event.target.value)
                  }
                  required
                  className="h-12 rounded-xl border-[#e1e7e2] bg-[#fbfcfb] px-3.5 text-sm placeholder:text-[#a0a9a2] focus-visible:border-[#5b8c6b] focus-visible:bg-white focus-visible:ring-[#5b8c6b]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block text-[13px] font-semibold text-[#34443a]"
                >
                  Account type{" "}
                  <span className="text-[#d96a5e]" aria-hidden="true">
                    *
                  </span>
                </label>
                <div className="relative">
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={(event) => {
                      const selectedRole = RoleData.find(
                        (option) => option.value === event.target.value,
                      );
                      if (selectedRole) {
                        setFormData((current) => ({
                          ...current,
                          role: selectedRole.value,
                        }));
                      }
                    }}
                    className="h-12 w-full appearance-none rounded-xl border border-[#e1e7e2] bg-[#fbfcfb] px-3.5 pr-10 text-sm text-[#27332c] outline-none transition focus:border-[#5b8c6b] focus:bg-white focus:ring-3 focus:ring-[#5b8c6b]/20"
                  >
                    {RoleData.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#89938b]"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-[13px] font-semibold text-[#34443a]"
                  >
                    Password{" "}
                    <span className="text-[#d96a5e]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="At least 8 characters"
                      minLength={8}
                      value={formData.password}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        updateField("password", event.target.value)
                      }
                      required
                      className="h-12 rounded-xl border-[#e1e7e2] bg-[#fbfcfb] px-3.5 pr-11 text-sm placeholder:text-[#a0a9a2] focus-visible:border-[#5b8c6b] focus-visible:bg-white focus-visible:ring-[#5b8c6b]/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((visible) => !visible)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-[#89938b] transition-colors hover:text-[#28634d]"
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" aria-hidden="true" />
                      ) : (
                        <Eye className="size-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-[13px] font-semibold text-[#34443a]"
                  >
                    Confirm password{" "}
                    <span className="text-[#d96a5e]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Enter it again"
                      minLength={8}
                      value={formData.confirmPassword}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        updateField("confirmPassword", event.target.value)
                      }
                      required
                      className="h-12 rounded-xl border-[#e1e7e2] bg-[#fbfcfb] px-3.5 pr-11 text-sm placeholder:text-[#a0a9a2] focus-visible:border-[#5b8c6b] focus-visible:bg-white focus-visible:ring-[#5b8c6b]/20"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((visible) => !visible)
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-[#89938b] transition-colors hover:text-[#28634d]"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="size-4" aria-hidden="true" />
                      ) : (
                        <Eye className="size-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {feedback && (
                <p
                  role="status"
                  className={`text-sm ${
                    formData.password !== formData.confirmPassword
                      ? "text-red-600"
                      : "text-[#397356]"
                  }`}
                >
                  {feedback}
                </p>
              )}

              <Button
                type="submit"
                className="group h-12 w-full rounded-xl bg-[#28634d] text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(40,99,77,0.65)] transition-all hover:-translate-y-0.5 hover:bg-[#204f3d] hover:shadow-[0_12px_24px_-8px_rgba(40,99,77,0.55)]"
              >
                Create account
                <ArrowRight
                  className="ml-1 size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </form>

            <p className="mt-5 text-center text-sm text-[#78827b]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#28634d] underline-offset-4 hover:underline"
              >
                Login
              </Link>
            </p>

            <p className="mt-6 border-t border-[#edf0ed] pt-5 text-center text-xs leading-5 text-[#89918b]">
              By joining workwise, you&apos;re opening the door to what&apos;s
              next.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Registration;
