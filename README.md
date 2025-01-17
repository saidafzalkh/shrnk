# Shrnk - Link Shorter Tool!

## How to Run the Project

1. Copy the environment variables template:
  ```bash
   mv .env.example .env
  ```
2. Build and start the application using Docker Compose:
  ```bash
  docker compose up --build
  ```
3. Links:
`http://localhost:3000/` - client (not yet) <br />
`http://localhost:4000/` - api <br />
`http://localhost:5432/` - postgres <br />


⚠️ **Docker Setup is for Development Only**
The current Docker configuration is optimized for development purposes.

## TODO List for Short URL API

#### Core Functionality
- [x] Create Short Link
- [x] Redirect to Original URL
- [x] Get Link Info
- [x] Delete Short Link

#### Optional Features
- [ ] Expiration Support
- [x] Analytics
- [ ] Custom Alias

#### Extras
- [x] Docker Setup
- [ ] Tests
- [ ] Basic UI
