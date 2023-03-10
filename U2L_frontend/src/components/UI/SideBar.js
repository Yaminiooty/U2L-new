import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { Box, Button, Sidebar } from "grommet";
// import { Clock, Apps, Terminal, Chat, StatusUnknown } from 'grommet-icons';

const SideBar = () => {
  const theme = useContext(ThemeContext);

  return (
    <Sidebar
      background={{ color: !theme.dark ? "background" : "blue", dark: false }}
      pad="small"
      flex-start
      // height for demo purposes only, remove in production
      height="100%"
      margin={{ top: "100" }}
    >
      <Box
        flex="grow"
        pad="small"
        align="start"
        justify="start"
        gap="medium"
        border={{ side: "right", color: "border-weak" }}
      >
        <Button label="Projects" />
        {/* <Button label="Issues" />
        <Button label="Rules" />
        <Button label="Quality Profiles" />
        <Link to= "/SigninView"> 
        <Button label="Quality Gates" onClick={() => {}}/>
        </Link>
        <Button label="Administration" /> */}
      </Box>
    </Sidebar>
  );
};

export default SideBar;


//---------------------------------------------------------------------------------------------
// import React, { useContext, useNavigate } from "react";
// import { ThemeContext } from "styled-components";
// import { Box, Button, Sidebar, Nav, Menu, ResponsiveContext } from "grommet";
// // import { Clock, Apps, Terminal, Chat, StatusUnknown } from 'grommet-icons';

// const items = [ 
//   { label: 'Projects' , path: '/dashboard' },
//   { label: 'Issues', path: '/' },
//   { label: 'Rules', path: '/' },
//   { label: 'Quality Profiles', path: '/QualityGates' }, 
//   { label: 'Quality Gates', path: '/qualitygates' }, 
//   { label: 'Administration', path: '/' },  
// ];

// const SideBar = () => {
//   const theme = useContext(ThemeContext);
//   const size = useContext(ResponsiveContext);
//   const navigate = useNavigate()

//   return (
//     <Sidebar
//       background={{ color: !theme.dark ? "background" : "blue", dark: false }}
//       pad="small"
//       flex-start
//       // height for demo purposes only, remove in production
//       height="100%"
//       margin={{ top: "100" }}
//     >
//        <Box direction="column" gap="medium" align="center" justify="center" flex >
//                     {!['xsmall', 'small'].includes(size) ? (
//                         <Nav direction="row" gap="small">
//                             {items.map(item => (
//                                 <Button label={item.label} key={item.label} onClick={()=>{navigate(`${item.path}`)}} />
//                             ))}
//                         </Nav>
//                     ) : (
//                         <Menu label="Menu" items={items} />
//                     )}
                
//                 </Box>
//     </Sidebar>
//   );
// };

// export default SideBar;
