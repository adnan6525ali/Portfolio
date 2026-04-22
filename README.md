# Mohammad Adnan Ali Portfolio
## Active Link : https://portfolio-omega-swart-j4pwdgi089.vercel.app/

A modern 3D animated portfolio for a Computer Science M.Tech student and aspiring Python/Django/ML Engineer.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Three.js with React Three Fiber
- EmailJS
- React Icons

## Run Locally

```bash
npm install
npm run dev
```

## EmailJS Setup

Create a `.env` file from `.env.example` and add your EmailJS credentials:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact form fields are named `from_name`, `from_email`, and `message`. These names must exactly match the EmailJS template variables.

Use the EmailJS **Public Key** from Account > API Keys. Do not use a private key, access token, service ID, or template ID in `VITE_EMAILJS_PUBLIC_KEY`.

## Resume

The hero button points to `/MohammadAdnanAliResume.pdf`. Place the final resume PDF in the `public` folder with that exact filename.

## Profile Links

Primary profile links live in `src/data/portfolio.js` under `profile`.

- Email: `adnan6525ali@gmail.com`
- Phone: `+91 7408983774`
- LinkedIn: `https://www.linkedin.com/in/adnan6525ali/`

Add your GitHub profile URL to `profile.github`, and add repository or live-demo URLs to each project with `githubUrl` and `liveUrl`.
