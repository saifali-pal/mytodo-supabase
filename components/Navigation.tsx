"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut, loading } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  useEffect(() => {
    if (!loading && !user && pathname !== "/login" && pathname !== "/signup") {
      router.push("/login");
    }
  }, [loading, user, pathname, router]);

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  if (loading) {
    return (
      <nav className="flex justify-center gap-4 p-4 shadow-sm bg-background">
        <div className="animate-pulse">Loading...</div>
      </nav>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center p-5 shadow-sm bg-background ">
      <ModeToggle />
      <div className="flex gap-4">
        <Link href="/">
          <Button
            variant={pathname === "/" ? "default" : "outline"}
            className={
              pathname === "/"
                ? "bg-primary text-primary-foreground hover:bg-primary"
                : "hover:bg-accent hover:text-accent-foreground"
            }
          >
            All Tasks
          </Button>
        </Link>

        <Link href="/add">
          <Button
            variant={pathname === "/add" ? "default" : "outline"}
            className={
              pathname === "/add"
                ? "bg-primary text-primary-foreground hover:bg-primary"
                : "hover:bg-accent hover:text-accent-foreground"
            }
          >
            Add Task
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          Welcome, {user?.email?.split("@")[0] || "Guest"}
        </span>
        <Button variant="outline" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </nav>
  );
}
