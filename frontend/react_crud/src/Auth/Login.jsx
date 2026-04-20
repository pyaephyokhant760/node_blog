import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit:", { email, password });
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
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 btn-primary-custom mt-2 auth-btn">
                            Create Account
                        </Button>
                    </Form>
                    
                    <div className="text-center mt-4 pt-4 border-top">
                        <p className="text-muted mb-0 auth-footer-text" style={{ fontSize: '0.9rem' }}>
                            Already have an account? <a href="#login" className="text-decoration-none fw-semibold">Log in</a>
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Login;