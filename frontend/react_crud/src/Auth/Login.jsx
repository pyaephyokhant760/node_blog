import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // error အဟောင်းများကို ရှင်းထုတ်ရန်
        setLoading(true);

        try {
            // 📌 URL ကို Backend Port 5000 အပြည့်အစုံသို့ ပြောင်းလဲထားသည်
            const response = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            // 📌 JSON မပြောင်းခင် Response ပုံစံ မှန်မမှန်နှင့် Status ကို အရင်စစ်ဆေးခြင်း
            if (!response.ok) {
                const errorText = await response.text(); // JSON input မဟုတ်ပါက text အဖြစ် ဖတ်မည်
                let errorMessage = "Something went wrong";
                try {
                    const errorJson = JSON.parse(errorText);
                    errorMessage = errorJson.message;
                } catch (e) {
                    errorMessage = errorText || `Error Status: ${response.status}`;
                }
                throw new Error(errorMessage);
            }

            // Status အားလုံး အဆင်ပြေမှ JSON ပြောင်းလဲမည်
            const data = await response.json();

            // Login အောင်မြင်ပါက Token ကို သိမ်းဆည်းရန်
            localStorage.setItem("token", data.accessToken);
            alert("Login Successful!");
            
            // ဥပမာ - Dashboard သို့ Page ရွှေ့ရန်
            // window.location.href = "/dashboard";

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="login-container">
            <Card className="premium-card">
                <Card.Body className="p-4 p-sm-5">
                    <div className="text-center mb-4">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        <h2 className="mb-0 fw-bold auth-title">Welcome Back</h2>
                        <p className="text-muted mt-2 auth-subtitle">Enter your details to proceed.</p>
                    </div>

                    {/* Error တက်လာပါက ပြသရန် */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label className="fw-semibold form-label-custom">Email Address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="name@example.com" 
                                className="form-control-custom"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={loading}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label className="fw-semibold form-label-custom d-flex justify-content-between">
                                Password
                                <a href="#forgot" className="forgot-link text-decoration-none">Forgot?</a>
                            </Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter your password" 
                                className="form-control-custom"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={loading}
                            />
                        </Form.Group>

                        <Button 
                            variant="primary" 
                            type="submit" 
                            className="w-100 btn-primary-custom mt-2 auth-btn"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Log In"}
                        </Button>
                    </Form>
                    
                    <div className="text-center mt-4 pt-4 border-top">
                        <p className="text-muted mb-0 auth-footer-text" style={{ fontSize: '0.9rem' }}>
                            Don't have an account? <a href="#register" className="text-decoration-none fw-semibold">Sign Up</a>
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Login;