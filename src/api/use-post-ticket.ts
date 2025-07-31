import { useState } from "react";

export const usePostTicket = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postTicket = async (data: any) => {
    setIsLoading(true);
    const response = await fetch(
      "https://qr.menuvision.es/api/mv/customer/contact-us",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      setError("Error al enviar el ticket");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    return response.json();
  };

  return { postTicket, isLoading, error };
};
