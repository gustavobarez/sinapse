cd frontend
pnpm run dev &
FRONTEND_PID=$!
cd ..

cd backend
docker compose up -d
mvn spring-boot:run &
BACKEND_PID=$!
cd ..

echo "Frontend rodando (PID: $FRONTEND_PID)"
echo "Backend rodando (PID: $BACKEND_PID)"

wait $FRONTEND_PID $BACKEND_PID
