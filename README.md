## DealFlow CRM
📦 Tech Stack
🔮 Frontend – Client Management UI
⚛️ Next.js 16 – React framework

🎨 shadcn/ui + TailwindCSS – UI components & styling

🧩 React Hook Form  – form handling & validation

🔗 Axios – API requests

🔔 React Toastify – notifications

🔙 Backend – Client & Deals API
🟢 NestJS 11 – Node.js framework

🗄 PostgreSQL 15 – relational database

🔌 TypeORM – ORM for DB access & migrations

✅ class-validator + class-transformer – DTO validation & transformation

📖 Swagger – API documentation

⚙️ Setup & Run
1. Clone & start with Docker
git clone https://github.com/braz-bogdan156/DealFlow-CRM
 
cd docker
docker-compose up --build
This will:

build frontend, backend, and Postgres containers,

automatically run npm install inside each container,

start all services.

2. Services
Frontend (Next.js): 👉 http://localhost:3001

Backend (NestJS + Swagger): 👉 http://localhost:7001/api

Database (Postgres): postgres://postgres:admin123@localhost:5432/dealdb

3. Database migrations
Run inside backend container:

docker exec -it nest_backend npm run migration:run
4. Seed data
Populate DB with sample clients & deals:

docker exec -it nest_backend npm run seed

📝 Environment Variables
Backend .env

NODE_ENV=development
PORT=7000
POSTGRES_HOST=postgres_db
POSTGRES_USER=postgres
POSTGRES_DB=dealdb
POSTGRES_PASSWORD=admin123
POSTGRES_PORT=5432
FRONTEND_URL=http://localhost:3001
Frontend .env
env
NEXT_PUBLIC_BACKEND_URL=http://localhost:7001
NEXT_PUBLIC_BACKEND_URL_INTERNAL=http://backend:7000