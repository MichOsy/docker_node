# Dockerizing Node.js application

## Console commands
### Main 
- <code>docker build . -t \<repository name\></code> to build docker image from Dockerfile
- <code>docker images</code> to display all your images
- <code>docker run -p 49160:80 -d \<repository name\></code> to run node application and redirect public port (49160) to private port (80) inside the container
- <code>docker ps</code> to show current containers
- <code>docker logs \<container id\></code> to print app output
- <code>curl -i localhost:49160</code> to call app on public port 49160
- <code>docker kill \<container id\></code> to shutdown container
- <code>docker </code>

### Memory and CPU limits
- <code>docker run --memory=1g --cpus="1" -p 49160:80 -d \<repository name\></code> limits memory to 1GB and CPUs to 1

### Docker hub
- <code>docker login --username=\<your username\></code> and then enter password to login to docker hub
- <code>docker tag \<image id\> \<username\>/repository:tag</code> to tag image
- <code>docker push \<username\>/repository:tag</code> to push image
