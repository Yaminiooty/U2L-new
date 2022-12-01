# Dockerfile

FROM quay.io/centos7/perl-530-centos7
ARG PJHOME
ARG SRC_PATH



# Install the dependencies
RUN sudo su
RUN export PATH=${PATH}:/opt/rh/rh-perl530/root/usr/bin/&& \
     export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/opt/rh/rh-perl530/root/usr/lib64 && \
     cpanm --notest -l extlib Module::CoreList && \
     cpanm --notest -l extlib --installdeps .
RUN yum install java-1.8.0-openjdk-devel -y
RUN java -version
RUN yum install dos2unix -y
Run yum install ksh -y


ENV PJHOME $PJHOME
ENV APNAME javaanalysis


# COPY . /usr/U2L
WORKDIR /usr/U2L
CMD ["U2LTool_Install.sh", $PJHOME, $APNAME ]

RUN cd $PJHOME
RUN cd ./work/javaanalysis/

RUN cp -R $SRC_PATH .

RUN cd $PJHOME
RUN cd ..

CMD ["U2LTool_Analysis.sh", $PJHOME, $APNAME ]
