import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CheckoutSuccess from "../components/CheckoutSuccess";

export default function Success() {
  return (
    <div>
      <CheckoutSuccess />
    </div>
  );
}
