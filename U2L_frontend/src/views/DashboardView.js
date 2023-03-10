import {
  Text,
  Heading,
  Page,
  PageHeader,
  Button,
  Box,
  TextInput,
  Color,
  Layer,
  Form,
  FormField,
  Select,
  ResponsiveContext,
  FileInput,
  CardHeader,
  CardBody,
  CardFooter,
  Card,
} from "grommet";
import { Colors } from "grommet/themes/base";
import React, { useContext, useState } from "react";
import { Add, FormNext, FormClose } from "grommet-icons";
import AppHeader from "../components/UI/AppHeader";
import SideBar from "../components/UI/SideBar";
import SearchAndFilter from "../components/UI/SearchFilter";
import Sort from "../components/UI/Sort";
import DataTableExample from "../components/UI/DataTable";

const options = ["Java", "C++", "Shell", ".net"];

export const DefaultButtonExample = () => <Button label="Default button" />;

const uploadFile = () => {
  console.log("Uploading file");
  // axios.post('https://localhost:5000/uploaded_file', uploadFile)
};

const Dashboard = (containerRef) => {
  const [showModal, setShowModal] = useState(false);
  const [showPreference, setShowPreference] = useState(false);
  const [selected, setSelected] = useState("");
  const size = useContext(ResponsiveContext);
  const onChange = (values) => {};
  const [numFiles, setNumFiles] = useState(0);
  const onSubmit = ({ value, touched }) => {};

  return (
    <Box direction="column" pad="small" data-testid="test-1">
      {/* <Heading level={4} margin="none" data-testid="test-2">
        U2L Tool
      </Heading> */}
      <Box direction="row" gap="medium">
        <Card height="80px" width="small" background="light-1">
          <CardHeader pad="medium"> </CardHeader>
          <CardBody
            pad="small"
            justify="end"
            style={{ marginLeft: "auto" }}
            size="20px"
          >
            Total Projects
          </CardBody>
          <CardFooter
            pad={{ horizontal: "small" }}
            background="light-2"
          ></CardFooter>
        </Card>

        <Card height="80px" width="small" background="light-1">
          <CardHeader pad="medium"> </CardHeader>
          <CardBody pad="small" justify="end" style={{ marginLeft: "auto" }}>
            Successful Validation
          </CardBody>
          <CardFooter
            pad={{ horizontal: "small" }}
            background="light-2"
          ></CardFooter>
        </Card>

        <Card height="80px" width="small" background="light-1">
          <CardHeader pad="medium"> </CardHeader>
          <CardBody pad="small" justify="end" style={{ marginLeft: "auto" }}>
            Total Error
          </CardBody>
          <CardFooter
            pad={{ horizontal: "small" }}
            background="light-2"
          ></CardFooter>
        </Card>
        <Box style={{ marginLeft: "auto" }}>
          <Button
            height="15px"
            width="small"
            primary
            label="Create Project"
            onClick={() => setShowModal(true)}
            modal={true}
            data-testid="next"
            style={{ marginTop: "auto" }}
          ></Button>
        </Box>
      </Box>

      <Box direction="row" marginTop="50px" pad="medium">
        <Box style={{ marginRight: "auto" }}>
          <SearchAndFilter />
        </Box>
        <Box direction="row">
          <h5 style={{ marginTop: "auto", marginRight: "20px" }}>Sort By:</h5>
          <Sort />
        </Box>
      </Box>

      <Box>
        <DataTableExample />
      </Box>

      <Box align="end" justify="end" margin={10}>
        {showModal && (
          <Layer
            data-testid="model"
            target={containerRef?.current}
            onClickOutside={() => setShowModal(false)}
            onEsc={() => setShowModal(false)}
            modal={true}
          >
            <Box pad="medium" >
              <Box direction="row" align="start" gap="small" >
                <Box>
                  <Heading level={2} size="small" margin="5">
                    Create New Project?
                  </Heading>
                  <Box
                    align="center"
                    justify="center"
                    fill
                    direction="row"
                    gap="large"
                  >
                    <Button
                      data-testid="pop Up button"
                      label="Cancel"
                      secondary
                      onClick={() => {}}
                    />
                    <Button
                      data-testid="pop Up button"
                      label="Create"
                      primary
                      onClick={() => {
                        setShowPreference(true);
                      }}
                      modal={true}
                    />

                    {showPreference && (
                      <Layer
                        data-testid="model"
                        target={containerRef?.current}
                        onClickOutside={() => setShowModal(false)}
                        onEsc={() => setShowModal(false)}
                        modal={true}
                      >
                        <Box
                          pad="medium"
                          size="50"
                          width="380px"
                          height="420px"
                        >
                          <Box direction="row" align="start" gap="small">
                            <Box width="400px" height="550px">
                              <Heading level={3} size="small" marginTop="0">
                                {/* margin="2"  for heading if needed*/}
                                Select Your Preference
                              </Heading>
                              <Heading level={5} size="small" margin="0">
                                Type of Analysis
                              </Heading>
                              <Form margin="0">
                                <Box pad="small" margin="0">
                                  <FormField
                                    htmlFor="select__input"
                                    name="select"
                                    // label="Select name"
                                  >
                                    <Select
                                      id="selectPreference"
                                      name="select"
                                      placeholder="Select Name"
                                      options={options}
                                      value=""
                                      onChange={({ option }) =>
                                        setSelected(option)
                                      }
                                    />
                                  </FormField>
                                </Box>
                              </Form>
                              <Heading level={5} size="small" margin="0">
                                Source Code
                              </Heading>

                              {/* <Box
                                data-testid="test-3"
                                direction="column"
                                gap="small"
                                pad="medium"
                              > */}
                              <Box
                                data-testid="test-4"
                                width="medium"
                                margin="0"
                                pad="small"
                              >
                                <FileInput
                                  accept=".zip"
                                  messages={{
                                    browse:
                                      numFiles > 0
                                        ? "Replace file"
                                        : "Select file",
                                  }}
                                  onChange={(event, { files }) =>
                                    setNumFiles(files.length)
                                  }
                                />
                                {/* </Box> */}
                                <Box
                                align="center"
                                justify="center"
                                fill
                                direction="row"
                                gap="large"
                                pad="large"
                                // height="50"
                                // width="100"
                              >
                                <Button
                                  
                                  data-testid="pop Up button"
                                  label="Cancel"
                                  secondary
                                  role="close"
                                  onClick={() => {}}
                                />
                                <Button
                                  data-testid="pop Up button"
                                  label="Proceed"
                                  primary
                                  onClick={uploadFile}
                                  href="/dashboard"
                                />
                              </Box>
                              </Box>
                              {/* <Box
                                data-testid="test-5"
                                direction="row"
                                gap="medium"
                                align="end"
                                justify="end"
                                pad="medium"
                              >
                                <Button
                                    label="Upload File"
                                    href="/AssementPage"
                                    primary
                                  />
                              </Box> */}

                             
                            </Box>
                            {/* <Button
                              data-testid="pop Up button"
                              role="close"
                              icon={<FormClose />}
                              onClick={() => setShowModal(false)}
                            /> */}
                          </Box>
                        </Box>
                      </Layer>
                    )}
                  </Box>
                </Box>
                {/* <Button
                  data-testid="pop Up button"
                  role="close"
                  icon={<FormClose />}
                  onClick={() => setShowModal(false)}
                /> */}
              </Box>
            </Box>
          </Layer>
        )}
        {/* <Box>
          <SearchAndFilter />
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
