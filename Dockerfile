FROM node:16.11.1-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN yarn install

# expose 8080 on container
EXPOSE 8080

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=8080

# build necessary, even if no static files are needed ,
# since it builds the server as well
RUN yarn run stagingbuild

# start the app staging
CMD [ "yarn", "run", "staging" ]

# build necessary, even if no static files are needed ,
# since it builds the server as well
# RUN yarn run generate

# start the app production
# CMD [ "yarn", "run", "start" ]
