"use client";
import { X, Sparkles, Mail, MessageSquareText } from "lucide-react";
import StarIcon from "@/assets/icons/star.svg";
import { Card } from "@/components/Card";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConnectPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectPopup: React.FC<ConnectPopupProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Card className="w-[90%] max-w-lg p-8 m-6 relative shadow-2xl shadow-emerald-500/20">
              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition z-30"
              >
                <X className="size-6" />
              </motion.button>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-serif mb-4"
                >
                  Let’s Connect{" "}
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <StarIcon className="text-emerald-400 size-10" />
                  </motion.span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/60 mb-6"
                >
                  Share your email and I’ll get in touch with you soon.
                </motion.p>

                {/* Form */}
                <motion.form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Submitted! (Hook this to backend/email service)");
                  }}
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  {/* Email Input */}
                  <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 size-5" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none transition-all"
                    />
                  </motion.div>

                  {/* Message Textarea */}
                  <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                    <MessageSquareText className="absolute left-3 top-3 text-white/40 size-5" />
                    <textarea
                      placeholder="Your message (optional)"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none resize-none transition-all"
                      rows={3}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-gray-900 font-semibold py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition"
                  >
                    Submit
                  </motion.button>
                </motion.form>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
