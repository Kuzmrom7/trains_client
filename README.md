## Trains

## Run

```
docker build -t trains-client .
docker run -d \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 3000:3000 \
  --rm \
  trains-client
```
