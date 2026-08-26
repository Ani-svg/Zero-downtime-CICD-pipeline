🧭 Overview

This project demonstrates a complete, production-style DevOps workflow around a React application:

The app is containerized with Docker so it runs identically anywhere.
Two identical instances (Blue and Green) run side by side, enabling zero-downtime deployments.
NGINX sits in front as a reverse proxy, routing traffic to whichever instance is currently active.
GitHub Actions automates the build → push → deploy pipeline on every push to main.
A self-hosted runner executes the Docker build/deploy steps directly on the host machine running the containers.
🏗️ Architecture
             DEVELOPER
                 │
                 │ git push
                 ▼
             GITHUB
                 │
                 ▼
        GITHUB ACTIONS
                 │
                 ▼
       SELF-HOSTED RUNNER
        (Windows / Local)
                 │
                 ▼
          DOCKER BUILD
                 │
                 ▼
          DOCKER IMAGE
                 │
                 ▼
           DOCKER HUB
                 │
                 ▼
       BLUE / GREEN CONTAINERS
          │              │
        BLUE           GREEN
          \              /
           \            /
              ▼        ▼
                NGINX
                  │
                  ▼
          localhost:8080
                  │
                  ▼
                USER
🛠️ Tech Stack
Layer	Technology
Frontend	React + Vite
Containerization	Docker, Docker Compose
Reverse Proxy	NGINX
CI/CD	GitHub Actions (self-hosted runner)
Image Registry	Docker Hub
Deployment Strategy	Blue-Green Deployment
✨ Features
Beneficiary login and dashboard
Search and view beneficiary details
Edit / manage beneficiary information
Fully automated build & deploy pipeline
Zero-downtime releases via Blue-Green switching
Reverse-proxied, single entry point (localhost:8080)
🔄 Why Blue-Green Deployment?

Traditional deployments stop the running app, update it, and start it again — causing downtime.

This project instead runs two identical environments:

Blue — the currently live version serving users.
Green — the new version being deployed and tested.

Once Green is verified, NGINX's upstream config is switched to point traffic to it. Users never experience a moment where the app is completely unavailable.

BLUE running → Deploy GREEN → Test GREEN → Switch NGINX → GREEN serves users → BLUE can be reused/updated
📁 Project Structure
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml        # GitHub Actions pipeline definition
├── nginx/
│   └── nginx.conf           # Reverse proxy / upstream config
├── src/                     # React application source
├── Dockerfile               # Multi-stage build: Node → NGINX
├── docker-compose.yml       # Defines ngo-blue, ngo-green, ngo-nginx
├── package.json
└── README.md
🚀 Getting Started
Prerequisites
Docker & Docker Compose installed
Node.js (only needed for local development outside containers)
A Docker Hub account (for pushing images)
Run Locally with Docker Compose
bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Build and start Blue, Green, and NGINX containers
docker compose up -d --build

# Verify it's running
curl -I http://localhost:8080

Expected response:

HTTP/1.1 200 OK

The app is now accessible at http://localhost:8080.

Run the Frontend Standalone (without Docker)
bash
npm install
npm run dev
⚙️ CI/CD Pipeline

The pipeline is defined in .github/workflows/ci-cd.yml and triggers on every push to main:

Checkout code
      │
Build Docker image
      │
Login to Docker Hub
      │
Push image to Docker Hub
      │
Deploy to Blue/Green containers
      │
Switch NGINX upstream

Continuous Integration — verifies the app builds successfully and produces a valid Docker image on every push.

Continuous Deployment — automatically pushes the image to Docker Hub and redeploys it, with NGINX handling the traffic switch.

🖥️ Self-Hosted Runner Setup

Because the containers run on a specific host machine, a self-hosted GitHub Actions runner executes the workflow directly there instead of on GitHub-hosted infrastructure.

bash
# On the host machine
mkdir actions-runner && cd actions-runner
# Download and configure the runner (see GitHub repo → Settings → Actions → Runners)
./config.cmd --url https://github.com/<your-username>/<your-repo> --token <TOKEN>
./run.cmd

Once connected, it should report:

Connected to GitHub
Listening for Jobs

This lets GitHub Actions run Docker commands directly against the local Docker engine where ngo-blue, ngo-green, and ngo-nginx live.

🔐 Environment Variables / Secrets

Configure the following as GitHub repository secrets (never commit these):

Secret Name	Description
DOCKERHUB_USERNAME	Docker Hub account username
DOCKERHUB_TOKEN	Docker Hub access token/password
🧪 Testing the Deployment
bash
curl.exe -I http://localhost:8080

A successful deployment returns:

HTTP/1.1 200 OK

Note (Windows/PowerShell): curl is aliased to Invoke-WebRequest in PowerShell. Use curl.exe explicitly to invoke the real curl binary.

🩹 Troubleshooting
Issue	Cause	Fix
failed to read dockerfile	Wrong build context/path	Verify the Dockerfile path in docker-compose.yml / workflow
unauthorized on Docker push	Invalid Docker Hub credentials	Recheck DOCKERHUB_USERNAME / DOCKERHUB_TOKEN secrets
host not found in upstream "ngo-blue:80"	NGINX can't resolve container name	Ensure containers share the same Docker network
curl: (7) Failed to connect to localhost port 8080	NGINX/containers not up or misconfigured	Check docker compose ps and container logs
PowerShell prompts for Uri on curl	curl aliased to Invoke-WebRequest	Use curl.exe instead of curl
🔮 Future Improvements
Automate the Blue/Green traffic switch fully within the workflow (no manual NGINX reload)
Add health checks before switching traffic to the new version
Add rollback automation if the new version fails health checks
Move self-hosted runner to a cloud VM for better availability
Add automated tests as a CI gate before deployment
📄 License

This project is open-source and available under the MIT License.

🙋 Author

Aniket Shishodia Docker Hub: aniketshishodia28/ngo-dashboard
