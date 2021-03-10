# RediSearch REST Server: Python

### Test application on redis cloud

Set the **REDIS_URL** environment variable with the following format:
```
REDIS_URL=redis://:[PASSWORD]@redis-XXXX.XXX.us-east-1-4.ec2.cloud.redislabs.com:14683
```
Import the dataset by using the **import-data-redis-cloud.sh** script with environment variables:
```
REDIS_ENDPOINT=redis://[Endpoint url]
REDIS_PASSWORD=[Redis cloud password]
```
(Note: Environment variables must be set and **redis-cli** must be installed.)

### Running the application in Docker

You can run build and run the application from docker using the following commands:

**Build**

```shell script

> docker build -t redis/search-backend-python  . 

```

This command will create a new image and build the maven project into it.

**Run**

```shell script
> docker run --rm  \
     --env "REDIS_URL=redis://host.docker.internal:6379" \
     --env "REDIS_INDEX=idx:movie" \
     --name "redisearch-backend-python"\
     -p 8087:8087 redis/search-backend-python
```

You can now access the REST Search service using the following URL:

* http://localhost:8087/api/1.0/search?q=man&limit=10&offset=20

