// pages/middleware.js
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/'); // Kalau belum login, langsung ke halaman login
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return children;
}
