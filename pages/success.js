import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useSession = (session_id) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/confirmation", {
          method: "POST",
          body: JSON.stringify({ checkout_session: session_id }),
          headers: {
            "Content-type": "application/json",
          },
        });

        const result = await res.json();

        if (session == null) {
          setSession(result);
        }
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchSession();
  }, [session_id]);

  return { session, loading, error };
};

export default function Success() {
  const router = useRouter();
  const { session_id } = router.query;

  const { session, loading, error } = useSession(session_id);

  return (
    <div className="min-h-screen">
      {!error && !loading && session && (
        <div className="text-center py-48 md:py-96">
          <h1 className="text-4xl mb-4">Thank you for your purchase!</h1>
          <h3 className="text-2xl text-gray-600">
            A receipt has been sent to {session?.customer_email}
          </h3>
        </div>
      )}
      {!loading && error && (
        <div className="text-center py-48 md:py-96">
          <h3 className="text-2xl text-gray-600">
            Oops, something went wrong! Please contact info@ecjja.com
          </h3>
        </div>
      )}
      {loading && (
        <div className="text-center py-48 md:py-96">
          <h3 className="text-2xl text-gray-600">Loading...</h3>
        </div>
      )}
    </div>
  );
}
