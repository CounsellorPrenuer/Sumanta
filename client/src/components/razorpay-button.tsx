import { useEffect, useRef } from "react";

interface RazorpayButtonProps {
    paymentButtonId: string;
}

export function RazorpayButton({ paymentButtonId }: RazorpayButtonProps) {
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (!formRef.current) return;

        // Check if script is already added to avoid duplicates on re-renders
        if (formRef.current.querySelector("script")) return;

        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.dataset.payment_button_id = paymentButtonId;
        script.async = true;

        formRef.current.appendChild(script);

        // Cleanup function not strictly necessary for the script tag itself 
        // as we want it to persist, but good practice to ensure we don't duplicate
        return () => {
            // We typically don't remove the script on unmount for payment buttons 
            // as it might cause UI flicker if the component remounts quickly,
            // but strictly speaking for a pure react component we might.
            // For this specific 3rd party script, it replaces the form content, 
            // so we just let it be.
        };
    }, [paymentButtonId]);

    return (
        <form ref={formRef} className="flex justify-center">
            {/* Razorpay script will be injected here */}
        </form>
    );
}
