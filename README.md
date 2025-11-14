# DZ-NR-Assignment

A Next.js social feed application with authentication, posts, comments, likes, and media uploads via Cloudinary.

Live demo: https://dz-nr-assignment.onrender.com 

---

## Features

- Next.js (App Router) frontend pages and server API routes
- MongoDB (Mongoose) for persistence
- JWT-based authentication
- Cloudinary media uploads (images & videos) for posts
- Posts, comments, replies, likes, and user profiles
- Basic tests included in `tests/`

---

## Tech Stack

- Next.js
- Node.js
- MongoDB (Mongoose)
- Cloudinary
- JSON Web Tokens (JWT)
- Jest (if tests are configured)

---

## Prerequisites

- Node.js (16+ recommended)
- npm (or yarn)
- A MongoDB connection (Atlas or local)
- Cloudinary account for media uploads (optional but required for media)

---

## Environment Variables

Create a `.env` file in the project root (or provide environment variables through your hosting platform). At minimum provide:

```env
MONGODB_URI="mongodb+srv://user:password@cluster.example.mongodb.net/dbname"
JWT_SECRET="a-very-strong-secret"
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

Notes:

- Keep secrets out of source control. Use `ENV` settings provided by your host for production.
- Add any other variables used in `next.config.js` or `lib/` / `utils/`.

You can also create a `.env.example` with the same variable names (without real secrets) to document required values.

---

## Installation

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server (after build)
# DZ-NR-Assignment
```

Replace `npm` with `yarn` if preferred.

---

## Available Scripts

- `npm run dev` — start Next.js in development mode
- `npm run build` — production build
- `npm start` — start production server
- `npm test` — run tests (if configured)

Check `package.json` for exact scripts available in your copy of the repository.

---

## API Routes

Implemented using the Next.js App Router under `app/api/`.

Common endpoints (check `app/api/` for exact shapes):

- `POST /api/auth/login` — login (returns JWT)
- `POST /api/auth/register` — register new user
- `POST /api/auth/logout` — logout
- `GET  /api/auth/me` — get current user (requires token)
- `POST /api/posts` — create a post (supports `multipart/form-data` with media uploads)
- `GET  /api/posts` — list posts
- `GET  /api/posts/[postId]` — post operations
- `POST /api/posts/[postId]/like` — like/unlike a post
- `GET/POST/PUT/DELETE /api/comments` — comment routes
- `GET /api/users/[id]` — user profile

Refer to route files under `app/api/` for exact request/response shapes and auth requirements.

---

## File Structure (High Level)

- `app/` — Next.js app pages + API routes
- `components/` — React UI components
- `lib/` — Helpers (db connection, responses, etc.)
- `models/` — Mongoose models (`User`, `Post`, `Comment`)
- `services/` — Business logic wrappers (postService, commentService, likeService)
- `utils/` — Utility helpers (cloudinary wrapper, validators, formatters)
- `public/` — Static assets
- `tests/` — Unit/integration tests

---

## Media Uploads

This project uses Cloudinary to upload images and videos. Ensure Cloudinary credentials are set in the environment before attempting to upload media via `POST /api/posts`.

---

## Development Notes & Gotchas

- This repository mixes JavaScript and TypeScript. `tsconfig.json` affects editor/tooling behavior.
- For path aliases, ensure your editor respects `tsconfig.json` or add a `jsconfig.json` for JS-only setups.
- If you see an error like `Non-relative paths are not allowed when 'baseUrl' is not set'`, ensure the `paths` in `tsconfig.json` are relative (for example `"@/*": ["./*"]`).

---

## Testing

If a test script is provided in `package.json`, run:

```bash
npm test
```

Adjust or add tests under `tests/`.

---

## Contributing

- Fork or branch the repo
- Make changes on a branch, add tests for new functionality
- Open a pull request with a clear description of the change

---

## Troubleshooting

- Build errors: run `npm run build` and inspect output. For TypeScript issues, check `tsconfig.json` and `next-env.d.ts`.
- MongoDB issues: verify `MONGODB_URI` and network access (Atlas IP whitelist or VPC).
- Cloudinary issues: verify credentials and supported `resource_type` for media (image vs video).

---

## License

This repository does not include an explicit license. Add a `LICENSE` file if you intend to publish or share under specific terms.

---