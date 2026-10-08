# Gestión de Empleados (GA8-220501096-AA1-EV01)

Aplicación web CRUD de empleados.

| Capa | Tecnología |
| --- | --- |
| Backend / API REST | Node.js + Express |
| Base de datos | MongoDB + Mongoose |
| Frontend | Angular 20 + Materialize |
| Pruebas de API | Postman |

## Estructura

```
gestion-empleados/
├── backend/            API REST (puerto 3000)
│   └── src/  models · controllers · routes · database.js · index.js
├── frontend/           Angular (puerto 4200)
│   └── src/app/  models · services · components/employees
└── postman/            Colección para probar la API
```

## Requisitos
Node.js 20.19+ o 22.12+, y MongoDB corriendo en local (`mongodb://127.0.0.1:27017`).

## Ejecutar

**Backend**
```bash
cd backend
npm install
npm run dev        # o: npm start
```

**Frontend** (otra terminal)
```bash
cd frontend
npm install
npx ng serve       # abre http://localhost:4200
```

## Endpoints

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | /api/employees | Listar empleados |
| GET | /api/employees/:id | Obtener uno |
| POST | /api/employees | Crear |
| PUT | /api/employees/:id | Actualizar |
| DELETE | /api/employees/:id | Eliminar |

Ejemplo de body (POST/PUT):
```json
{ "nombre": "Ana Pérez", "cargo": "Desarrolladora", "oficina": "Medellín", "salario": 4500000 }
```

## Subir a GitHub
```bash
git init
git add .
git commit -m "Proyecto gestión de empleados: backend y frontend"
git branch -M main
git remote add origin https://github.com/gonzalez923/Gestion-Empleados.git
git push -u origin main
```
