#!/usr/bin/env bash
docker-compose -f docker-compose-build.yml up --build -d && \
docker system prune --volumes && \
mkdir services/jump-nginx/build && \
cp -r services/react/build/client services/jump-nginx/build && \
docker build -t trzl/portfolio:jump-react.1 -f ./services/jump-nginx/build.Dockerfile ./services/jump-nginx && \
# docker push trzl/portfolio:jump-react.1 && \
docker build -t trzl/portfolio:jump-proxy.1 -f ./services/reverseproxy/Dockerfile ./services/reverseproxy && \
# docker push trzl/portfolio:jump-proxy.1 && \
docker-compose down && \
docker system prune --volumes && \
sudo rm -rf services/jump-nginx/build && \
sudo rm -rf services/react/build/client && \
echo "Build complete!"