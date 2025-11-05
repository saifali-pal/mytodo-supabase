"use client";

import { Suspense } from "react";
import SignupForm from "@/components/auth/SignupForm";
import { Card, CardContent } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card className="w-full max-w-md p-6">
        <CardContent className="pt-6">
          <Suspense fallback={<div>Loading form..</div>}>
            <SignupForm />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
