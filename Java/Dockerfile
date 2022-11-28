# Dockerfile

FROM quay.io/centos7/perl-530-centos7



# Install the dependencies
RUN export PATH=${PATH}:/opt/rh/rh-perl530/root/usr/bin/&& \
     export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/opt/rh/rh-perl530/root/usr/lib64 && \
     cpanm --notest -l extlib Module::CoreList && \
     cpanm --notest -l extlib --installdeps .


ENV PJHOME /home/sarath/U2L/logs
ENV APNAME javaanalysis

COPY . /usr/U2L
WORKDIR /usr/U2L
CMD ["U2LTool_Install.sh", "/usr/U2L/logs", "javaanalysis" ]
