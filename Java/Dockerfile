# Dockerfile

FROM perl:5.34


ENV PJHOME /home/sarath/U2L/logs
ENV APNAME javaanalysis

COPY . /usr/U2L
WORKDIR /usr/U2L
CMD ["U2LTool_Install.sh", "/usr/U2L/logs", "javaanalysis" ]
