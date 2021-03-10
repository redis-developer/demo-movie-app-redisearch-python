redis-cli -u $REDIS_ENDPOINT -a $REDIS_PASSWORD < ../redisearch-docker/dataset/import_actors.redis
redis-cli -u $REDIS_ENDPOINT -a $REDIS_PASSWORD < ../redisearch-docker/dataset/import_movies.redis
redis-cli -u $REDIS_ENDPOINT -a $REDIS_PASSWORD < ../redisearch-docker/dataset/import_users.redis
redis-cli -u $REDIS_ENDPOINT -a $REDIS_PASSWORD < ../redisearch-docker/dataset/import_create_index.redis
