import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  DataTable,
  Heading,
  Meter,
  Text,
  ResponsiveContext,
} from "grommet";
import {
  StatusGoodSmall,
  StatusWarningSmall,
  StatusCriticalSmall,
} from "grommet-icons";

const data = [
  {
    projectid: "1268005",
    name: "U2L",
    date: "12/22/2023",
    filesize: "23mb",
    applicationstatus: "Successful Assessment",
    reports: "view",
  },
  {
    projectid: "1268006",
    name: "GLWMAAS",
    date: "12/25/2023",
    filesize: "30mb",
    applicationstatus: "Successful Assessment",
    reports: "view",
  },
];

const columns = [
  {
    property: "projectid",
    header: "Project ID",
  },
  {
    property: "name",
    header: "Name",
  },
  {
    property: "date",
    header: "Date",
  },
  {
    property: "filesize",
    header: "File Size",
  },
  {
    property: "applicationstatus",
    header: "Application Status",
    // render: (datum) => (
    //   <Box direction="row" align="center" gap="xsmall">
    //     <datum.status.icon color={datum.status.color} size="small" />
    //     <Text>{datum.status.label}</Text>
    //   </Box>
    // ),
  },
  {
    property: "reports",
    header: "Reports",
  },
];

const formatData = dataSet =>
  dataSet.map(datum => {
    const adjustedDatum = { ...datum };
    adjustedDatum.date = new Date(datum.date);
    switch (datum.status) {
      case 'ok':
        adjustedDatum.status = {
          label: datum.status,
          icon: StatusGoodSmall,
          value: 0,
          color: 'status-ok',
        };
        break;
      case 'warning':
        adjustedDatum.status = {
          label: datum.status,
          icon: StatusWarningSmall,
          value: 1,
          color: 'status-warning',
        };
        break;
      case 'critical':
        adjustedDatum.status = {
          label: datum.status,
          icon: StatusCriticalSmall,
          value: 2,
          color: 'status-critical',
        };
        break;
      default:
        adjustedDatum.status = {
          label: datum.status,
        };
    }
    return adjustedDatum;
  });

export const DataTableExample = ({ designSystemDemo }) => {
  const size = React.useContext(ResponsiveContext);
  const [selected, setSelected] = useState("");
  return (
    <>
      <Box gap="medium" align="start" justify="start">
        {/* <Heading level={4} margin="none">
        Planning
      </Heading> */}
        {/* <Box direction="row">
        <Button label="Manual Upload"  hoverIndicator={{dark: "rgba(1,169,130,1)", light: "rgba(1,169,130,1)"}} onClick={() => {}} />
        <Button label ="Automated Discovery" hoverIndicator={{dark: "rgba(1,169,130,1)", light: "rgba(1,169,130,1)"}} onClick={() => {}} />
      </Box> */}

        {/* <Form>
          <Box pad="small">
            <FormField
            htmlFor="select-example__input"
            name="select-example"
            label="Select wavegroup"
            >
              <Select
                id="select-example"
                name="select-example"
                placeholder="Select Wavegroup"
                // options={options}
                value="Wave 1"
                onChange={({ option }) => setSelected(option)}
              />
              
            </FormField>
          </Box>
        </Form>  */}
      </Box>
      <Box pad="small">
        {/* <Heading
          id="server-header-heading"
          level={3}
          margin={{ bottom: 'small', top: 'none' }}
          
        >
          Server Names
        </Heading> */}
        <Box  overflow="auto">
          <DataTable
            aria-describedby="server-header-heading"
            data={data}
            // background={{
            //   color: { dark: 'dark-2', light: 'light-2' },
            // }}
            align="center"
            justify="center"
            fill="horizontal"
            columns={[{}, ...columns]}
          />
        </Box>
        {/* <Box gap='large' direction='row' pad="large" align='end' justify="end">
          <Button label="Wave Group Summary" primary type="submit" href= "/steptwo" />

          <Button label="Initiate Replication" href = '/finalpage'primary type="submit" />

        </Box> */}
      </Box>
    </>
  );
};
DataTableExample.propTypes = {
  designSystemDemo: PropTypes.bool,
};

export default DataTableExample;
