/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import CSS style
import "./App.css";

// Import from react-router-dom
import {
  BrowserRouter as Router, Routes,
  Route, Link
} from "react-router-dom";

// Import my React Components
import CreateBand from
  "./presentation/components/band/band.create.component.js";
import EditBand from
  "./presentation/components/band/band.edit.component.js";
import BandList from
  "./presentation/components/band/band.list.component.js";
import { RouterNavigatorDataSource } from "./framework/react_router/router.datasource.js";
import ConcertList from "./presentation/components/concert/concert.list.component.js";

// My App
const App = () => {
  const router = new RouterNavigatorDataSource()

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={router.HOME}
                  className="nav-link">
                  HornsApp Admin
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={router.CONCERT_LIST}
                    className="nav-link">
                    Concert Admin
                  </Link>
                </Nav>
                <Nav>
                  <Link to={router.BAND_LIST}
                    className="nav-link">
                    Band Admin
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path={router.HOME}
                    element={<ConcertList />} />
                  <Route path={router.CONCERT_LIST}
                    element={<ConcertList />} />
                  <Route path={router.BAND_CREATE}
                    element={<CreateBand />} />
                  <Route path={router.BAND_EDIT + '/:id'}
                    element={<EditBand />} />
                  <Route path={router.BAND_LIST}
                    element={<BandList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
