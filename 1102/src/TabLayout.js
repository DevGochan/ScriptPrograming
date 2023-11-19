import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useRoutes,
  NavLink,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

import styled from "styled-components";

// TabLists 데이터 생성
const tabLists = [
  { tabkeys: "home", title: "Home" },
  { tabkeys: "house", title: "House" },
  { tabkeys: "dream", title: "Dream" },
  { tabkeys: "music", title: "Music" },
  { tabkeys: "netflix", title: "Netflix" },
  { tabkeys: "youtube", title: "Youtube" },
  { tabkeys: "disney", title: "Disney Plus" },
  { tabkeys: "amazon", title: "Amazon Prime" },
  { tabkeys: "apple", title: "Apple Video" },
];

const Tabs = ({ tabLists, children }) => {
  return (
    <TabContainer>
      <TabList tabLists={tabLists} />
      <TabPanelContainer>{children}</TabPanelContainer>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 180px auto;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
  padding: 20px;
  margin-left: 5px;
  background: #efefef;
`;
const TabListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 50px;
  background: #ddd;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  color: black;
  text-transformation: capitalize;
  text-align: center;
  text-decoration: none;
  padding: 5px;
  background: #ddd;
  &.active {
    border-left: 5px solid red;
    background: green;
    color: white;
  }
`;

const TabList = ({ tabLists }) => {
  return (
    <TabListContainer>
      {tabLists.map((tabitem) => (
        <StyledNavLink key={tabitem.tabkey} to={tabitem.tabkey}>
          {tabitem.title}
        </StyledNavLink>
      ))}
    </TabListContainer>
  );
};

const TabPanel = ({ title }) => {
  return (
    <TabPanelContainer>
      <h1>{title}</h1>
      <p>This is a TabPanel section.</p>
    </TabPanelContainer>
  );
};

const TabLayout = () => {
  return (
    <BrowserRouter>
      <Tabs tabLists={tabLists}>
        <Routes>
          {tabLists.map((tabitem) => (
            <Route
              key={tabitem.tabkey}
              path={tabitem.tabkey}
              element={<TabPanel title={tabitem.title} />}
            />
          ))}
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </Tabs>
    </BrowserRouter>
  );
};

export default TabLayout;
