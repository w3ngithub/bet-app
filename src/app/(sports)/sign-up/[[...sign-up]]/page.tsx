import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5">
      <SignUp afterSignUpUrl={"/accounts"} />
    </div>
  );
}
