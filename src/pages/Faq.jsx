import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/faqs")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch FAQs");
        return res.json();
      })
      .then((data) => {
        setFaqs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", backgroundColor: "#80C8EA", padding: "24px", color: "#155CDE" }}>
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
            Welcome to CampusMate FAQs
          </h1>
          <p style={{ marginTop: "16px", fontSize: "20px", fontWeight: "600" }}>
            Get your questions answered below
          </p>
        </div>

        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            backgroundColor: "#fff",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {loading && <p>Loading FAQs...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}

          {!loading && !error && faqs.map((faq, index) => (
            <div
              key={faq.id}
              style={{ borderBottom: "1px solid #cfe3f8", padding: "16px 0" }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  background: "none",
                  border: "none",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#155CDE",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <p style={{ marginTop: "12px", color: "#155CDE", fontSize: "16px" }}>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
