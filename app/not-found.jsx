"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds <= 0) {
      router.push("/");
      return;
    }

    const id = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [seconds, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>

      <p className="mb-4 text-gray-600">
        Redirecting to home in {seconds} second{seconds !== 1 ? "s" : ""}...
      </p>

      <Link href="/" className="text-green-600 underline">
        Go to Home Now
      </Link>
    </div>
  );
}