"use client";
import { useState } from "react";
import { sendEmail } from "@/app/actions";
export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  // 1. Capture the form reference immediately!
  const form = e.currentTarget;

  setStatus("sending");

  // 2. Use the captured 'form' variable
  const formData = new FormData(form);
  const result = await sendEmail(formData);

  if (result.success) {
    setStatus("success");
    // 3. Now 'form' is guaranteed to exist here
    form.reset();
  } else {
    setStatus("error");
  }
}

  return (
    <>
      <div className="bg-surface border border-white/5 p-8 rounded-3xl shadow-2xl relative">
        {status === "success" ? (
          <div className="h-full flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
            <div className="h-20 w-20 bg-primary/20 text-primary rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              ✔
            </div>
            <h4 className="text-2xl font-bold mb-2">
              Message Encrypted & Sent
            </h4>
            <p className="text-muted-foreground font-mono text-sm">
              Status: 200 OK // I'll get back to you soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 text-primary font-mono text-xs hover:underline"
            >
              [ SEND_ANOTHER_TRANSMISSION ]
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-primary uppercase ml-1 tracking-widest">
                  Sender_Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Identity..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-primary uppercase ml-1 tracking-widest">
                  Sender_Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-primary uppercase ml-1 tracking-widest">
                Message_Payload
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Secure message content..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === "sending" ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                      />
                    </svg>
                  </span>{" "}
                  ENCRYPTING...
                </span>
              ) : (
                <>
                  SEND_MESSAGE{" "}
                  <span className="text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      />
                    </svg>
                  </span>
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-xs font-mono text-center">
                Access denied : Enter a real email
              </p>
            )}
          </form>
        )}
      </div>
    </>
  );
}