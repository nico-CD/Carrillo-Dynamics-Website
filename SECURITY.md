# SECURITY PROTOCOL
### Carrillo Dynamics | Data Integrity & Protection

We treat our clients' operational context as mission-critical infrastructure. Security and data integrity are integrated into the initial architectural blueprint.

## Vulnerability Disclosure Policy
We maintain an open channel for responsible security reporting. If you identify a security vulnerability in our infrastructure or any of our client-facing tools, please report it immediately:

- **Email**: security@carrillodynamics.com
- **Response SLA**: Initial triage within 24 hours. Full remediation within 72 hours (Critical severity).

## Our Commitment
1. **Minimum Data Footprint**: We only request the minimum information required for a successful operational audit.
2. **Deterministic Sanitization**: All frontend inputs are strictly sanitized via DOMPurify before entering our processing hooks.
3. **No Third-Party Access**: Lead data and operational blueprints are reviewed internally and are NEVER shared or sold.
4. **Header Enforcement**: Global CSP, X-Frame-Options, and X-Content-Type-Options are enforced throughout our distribution network.

## Secure Audits
Payment for our "Friction Analysis" is handled through a secure, encrypted Stripe pipeline. We do not store financial data or credit card numbers on our local infrastructure.

---
**Carrillo Dynamics Security Team** | *Industrial-Grade Data Protection*
