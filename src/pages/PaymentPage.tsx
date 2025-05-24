import React, { useState } from "react";

const PaymentPage: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const price = 50; // Prix fixe en DH

  // Validation simple :
  // Carte = 16 chiffres, expiry = MM/AA, CVV = 3 chiffres
  const isValid =
    /^\d{16}$/.test(cardNumber.replace(/\s+/g, "")) &&
    /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry) &&
    /^\d{3}$/.test(cvv);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      alert("Veuillez remplir correctement tous les champs de paiement.");
      return;
    }
    setIsProcessing(true);

    // Fake delay simulating payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setSuccessMessage(
        "Paiement effectué avec succès ! Votre réservation de consultation est confirmée."
      );
      // Reset form
      setCardNumber("");
      setExpiry("");
      setCvv("");
    }, 2000);
  };

  // Format automatique numéro carte (optionnel)
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 via-white to-green-50 p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
          Paiement de la réservation
        </h1>

        <p className="text-center text-lg font-semibold mb-8 text-blue-700">
          Montant à payer : <span className="text-green-600">{price} DHS</span>
        </p>

        <form onSubmit={handlePay} className="space-y-6">
          {/* Numéro de carte */}
          <div>
            <label
              htmlFor="cardNumber"
              className="block mb-2 font-medium text-gray-700"
            >
              Numéro de la carte
            </label>
            <input
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              autoComplete="cc-number"
              inputMode="numeric"
            />
          </div>

          {/* Date d'expiration */}
          <div>
            <label
              htmlFor="expiry"
              className="block mb-2 font-medium text-gray-700"
            >
              Date d'expiration (MM/AA)
            </label>
            <input
              id="expiry"
              type="text"
              placeholder="MM/AA"
              maxLength={5}
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              inputMode="numeric"
            />
          </div>

          {/* CVV */}
          <div>
            <label
              htmlFor="cvv"
              className="block mb-2 font-medium text-gray-700"
            >
              Code CVV
            </label>
            <input
              id="cvv"
              type="password"
              placeholder="123"
              maxLength={3}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              inputMode="numeric"
            />
          </div>

          {/* Bouton payer */}
          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full py-3 rounded text-white font-bold transition ${
              isProcessing
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isProcessing ? "Traitement..." : "Payer"}
          </button>
        </form>

        {successMessage && (
          <p className="mt-6 text-center text-green-700 font-semibold">
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
