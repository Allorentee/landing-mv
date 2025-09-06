import { useState } from "react";
import { toast } from "react-hot-toast";

export const usePostTicket = () => {
  const [isLoading, setIsLoading] = useState(false);

  const postTicket = async (data: any) => {
    setIsLoading(true);
    const response = await fetch(
      "https://qr.menuvision.es/api/mv/customer/contact-us",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(response);
    if (!response.ok) {
      setIsLoading(false);
      throw new Error("Error al enviar el ticket");
    }
    setIsLoading(false);
  };

  return { postTicket, isLoading };
};
