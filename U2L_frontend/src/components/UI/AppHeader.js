import { Header, Button, Text, Box, Avatar } from "grommet";
// import { useContext } from "react";
import { Hpe, Notification, Help, Projects } from "grommet-icons";
// import { useNavigate } from "react-router-dom";
import React from "react";

// const items = [
//     { label: 'Dashboard' , path: '/dashboard' },
//     { label: 'Applications', path: '/application' },
//     { label: 'Devices', path: '/devices' },
//     { label: 'Manage', path: '/manage' },
// ];

const AppHeader = () => {
  // const size = useContext(ResponsiveContext);
  // const navigate = useNavigate();

  const mystyle ={
     width: "40px", 
     height: "40px",
     backgroundColor: "#FFBC44",
     Type: "Initials",
     left: "1107",
     top: "1400",
     border: "24",
  }
  
  return (
    <Header margin={{ top: "12" }}>
      <Box
        direction="row"
        gap="medium"
        align="start"
        flex
        border={{ side: "bottom", color: "border-weak" }}
      >
        <Box direction="row" gap="medium" align="start">
          <Hpe size="medium" color="plain" />
          <Box>
            <Text color="text-strong" size="medium" weight="bold">
              HPE U2L
            </Text>
          </Box>
        </Box>
        <Box
          direction="row"
          gap="medium"
          align="center"
          justify="center"
          flex
        ></Box>
        <Box direction="row" gap="small" align="end" justify="end">
          <Button>
            <Notification style={{ width: "100%", height: 20 }}></Notification>
          </Button>
          <Button>
            <Help style={{ width: "100%", height: 20 }}></Help>
          </Button>
          <Button>
            <Projects style={{ width: "100%", height: 20 }}></Projects>
          </Button>
          <Button>
            <Avatar style={mystyle}>JW</Avatar>
            
          </Button>
         
        </Box>
      </Box>
      <hr />
      <hr />
    </Header>
  );
};

export default AppHeader;
