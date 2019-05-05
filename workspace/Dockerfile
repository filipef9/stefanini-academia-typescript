FROM node:6.11.0-alpine

LABEL maintainer="filipef9@hotmail.com"

RUN \
    apk add --no-cache --virtual .persistent-deps \
        curl \
        openssl \
        # for node-sass module
        make \
        gcc \
        g++ \
        python \
        py-pip \
        vim &&\
    # Linux setup
    apk update &&\
    apk add --update alpine-sdk &&\
    apk del alpine-sdk &&\
    rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm &&\
    npm cache clean &&\
    sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd &&\
    # Config npm with user root
    npm -g config set user root &&\
    # Install node dev packages
    npm install -g \
        typescript@2.6.1 

# Set up the workspace directory
VOLUME ["/workspace"]
WORKDIR /workspace

EXPOSE 4200

CMD ["npm", "-v"]