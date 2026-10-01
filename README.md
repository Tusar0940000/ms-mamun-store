# MS MAMUN STORE — Distribution Management System

A mobile-friendly web app for Owner, Manager, SR and DSR operations.

## Included
- Role-based login
- Owner/Manager/SR/DSR member management
- Company and product management
- Flexible units/conversion rules
- Purchase/Selling price history
- Shop management
- Orders with line-level fixed-amount discount
- Delivery, partial delivery and returns
- Credit/outstanding and partial payments
- Collection by DSR/SR/Manager/Owner
- DSR morning handover and day-end return confirmation
- Temporary company assignments
- Audit log
- Dashboard and basic reports

## Run locally
1. Install Node.js 20+.
2. Copy `.env.example` to `.env` and set a strong JWT_SECRET.
3. Run `npm install`.
4. Run `npm run db:seed`.
5. Run `npm start`.
6. Open http://localhost:3000

Seed owner: username `owner`, password `ChangeMe123!`
Change the password immediately in a real deployment.

## Production
Use HTTPS, a strong secret, managed PostgreSQL, automated backups, secure cookie/token strategy, monitoring and a proper deployment platform. This repository is designed as a complete functional foundation, not a substitute for deployment/security review.
