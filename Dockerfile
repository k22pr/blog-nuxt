FROM node:10-alpine

# Create app directory
WORKDIR /app
ADD . /app/

# global install & update
#RUN npm i -g npm && npm i -g yarn

#RUN rm yarn.lock
#RUN rm package-lock.json
RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "yarn", "start" ]
