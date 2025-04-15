# sit737-2025-prac6c
1. Application Development
•	Modify the application and update it.
2. Building the Docker Image
•	Use the Docker build command to build an image of the modified application from the Dockerfile.
•	Verify that the image has been created successfully and is listed locally
3. Uploading the Image to Docker Hub
•	Push the image to your Docker Hub repository for external accessibility.
•	Tag the docker image.
4. Creating the Kubernetes Deployment
•	Update the deployment configuration file in the same folder to specify the modified container image.
5. Configuring the Kubernetes Service
•	Create a service configuration to expose the application externally.
6. Navigating to the Kubernetes Dashboard
•	Deploy the official Kubernetes Dashboard from the terminal using the command http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
•	Create a dedicated service account for dashboard administration.
7. Accessing the Dashboard
•	Start the Kubernetes proxy to enable secure local access.
•	Open the Dashboard URL in a web browser.
•	Generate a login token for the admin-user service account.
•	Use the token to authenticate and access the Kubernetes Dashboard.
8. Interacting with Kubernetes:
•	Use Kubectl get pods to view the pods
•	Use Kubectl get services to view the services running.
•	Verify the logs using the command – Kubectl log mypod
9. Forward the port
•	Forward the local port to the Kubernetes port and access the application.
10. Accessing the website
•	Confirm that the modified application is successfully running and accessible through the exposed service port.
•	Verify that the application status and deployment details are visible on the Kubernetes Dashboard.
11. Push Code to Repository
•	Initialize a Git repository (git init).
•	Add and commit files using the commands - git add . & git commit -m "Initial commit".
•	Push to a GitHub repository.
