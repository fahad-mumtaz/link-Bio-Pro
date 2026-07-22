import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "Is there really a free plan forever?",
      answer: "Yes! Our Starter plan is 100% free with no credit card required. Perfect for testing BioPro and getting started. You can upgrade anytime when you're ready for advanced features like email capture and custom domains."
    },
    {
      question: "How does the email capture feature work?",
      answer: "When visitors land on your BioPro page, they see a beautiful popup asking for their email before accessing your links. You can customize the timing (immediate, after 3 seconds, on exit intent), the message, and offer a lead magnet like a free PDF or discount code. Emails are automatically synced to your preferred email marketing tool."
    },
    {
      question: "Can I use my own custom domain?",
      answer: "Absolutely! On the Pro and Creator Hub plans, you can connect any custom domain (like links.yourbrand.com). We provide step-by-step DNS setup instructions and automatically provision SSL certificates for security."
    },
    {
      question: "Do you take commission on my sales?",
      answer: "Never. Unlike platforms like Beacons that take 5% of every sale, BioPro charges 0% commission forever. What you earn is 100% yours."
    },
    {
      question: "What email tools do you integrate with?",
      answer: "We integrate with all major email platforms: Mailchimp, ConvertKit, ActiveCampaign, Klaviyo, SendGrid, and more. Plus, we support custom webhooks for Zapier integration with 5,000+ other apps."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, cancel with one click from your dashboard. No questions asked, no hidden fees. If you cancel, you'll keep Pro features until the end of your billing period."
    },
    {
      question: "How many links can I add?",
      answer: "Unlimited on all plans, including the free Starter plan. Add as many links as you need - we've seen creators with 100+ links and our infrastructure handles it seamlessly."
    },
    {
      question: "What kind of analytics do I get?",
      answer: "BioPro tracks everything: total views, unique visitors, clicks per link, click-through rates, geographic data (country/city), device breakdown (mobile/desktop/tablet), referral sources, and full conversion funnels. Pro plans get 90 days of history; Creator Hub gets 1 year."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied for any reason, email us within 30 days of purchase for a full refund."
    },
    {
      question: "Is my data secure?",
      answer: "Your data is protected with bank-level SSL encryption, stored in secure data centers, and we're fully GDPR compliant. We never sell your data to third parties."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-section lg:text-section font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-body-large text-gray-600 leading-relaxed">
            Everything you need to know about BioPro
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openQuestion === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </button>
              
              <AnimatePresence>
                {openQuestion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
