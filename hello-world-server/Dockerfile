FROM centos:centos7

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nodejs npm; yum clean all

WORKDIR /opt/apps/hello-world-server

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
