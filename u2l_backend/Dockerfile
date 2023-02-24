FROM centos/python-38-centos7:latest
USER root
# # Install the dependencies
RUN yum install java-1.8.0-openjdk.x86_64 java-1.8.0-openjdk-devel.x86_64 -y
RUN java -version
RUN yum install dos2unix -y
RUN yum install ksh -y
RUN yum install perl -y


RUN mkdir /usr/U2L
WORKDIR /usr/U2L
COPY ./Java.zip /usr/U2L
COPY ./U2L.zip  /usr/U2L
RUN unzip Java
RUN unzip U2L
COPY ./requirements.txt /usr/U2L/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /usr/U2L/requirements.txt
RUN localedef -i en_US -f UTF-8 en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8
COPY . .
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]





