import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();
  const { session_id } = router.query;

  const [email, setEmail] = useState(null);
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

        setEmail(result.customer_email)

      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchSession();
  }, [session_id]);

  return (
    <div>
        <hello>hi</hello>
      {!error && !loading && (
        <div className="text-center py-48 md:py-96">
          <h1 className="text-4xl mb-4">Thank you for your purchase!</h1>
          <h3 className="text-2xl text-gray-600">A receipt has been sent to {email}</h3>
        </div>
      )}
      {!loading && error && <div>{error}</div>}
      {loading && <p>Loading...</p>}
    </div>
  );
}
