# README
## DEVELOPMENT ENVIRONMENT
- node 18.17.0

## GETTING STARTED
### ENVIRONMENT VARIABLES
```
PORT: server port
DATABASE_URL: for prisma 
```

### INSTALLATION
```bash
# port forwarding
ssh -L ${HOST_PORT}:localhost:${DEVICE_PORT} ${USER}@${IP_ADDRESS} -p ${SSH_TUNNEL_PORT}

# install dependencies
npm install

# generate syncs the Prisma Client with the latest schema changes
npx prisma generate

# run development mode
npm run dev
```

## STRUCTURE
### FOLDER STRUCTURE
Express is flexible but vulnerable. This project aims to build a more efficient server structure by respecting the MVC pattern.

1. The `app` folder functions as the controller, mediating between routing and service functions to handle application flow.
2. The `interface` layer defines object contracts, ensures consistent data structures across the system, and includes type guards for runtime validation.
3. The `service` layer encapsulates business logic, processing data and implementing application-specific operations.
4. The `repository` layer is responsible for direct interaction with the database, utilizing Prisma functions to manage data persistence and retrieval.