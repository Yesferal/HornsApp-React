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

import { RouterNavigatorDataSource } from "./framework/react_router/router.datasource.js";

// Import my React Components
import CreateBand from "./presentation/components/band/band.create.component.js";
import EditBand from "./presentation/components/band/band.edit.component.js";
import BandList from "./presentation/components/band/band.list.component.js";
import CreateConcert from "./presentation/components/concert/concert.create.component.js";
import EditConcert from "./presentation/components/concert/concert.edit.component.js";
import ConcertList from "./presentation/components/concert/concert.list.component.js";
import CreateVenue from "./presentation/components/venue/venue.create.component.js";
import EditVenue from "./presentation/components/venue/venue.edit.component.js";
import VenueList from "./presentation/components/venue/venue.list.component.js";

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
                    Concerts
                  </Link>
                </Nav>
                <Nav>
                  <Link to={router.BAND_LIST}
                    className="nav-link">
                    Bands
                  </Link>
                </Nav>
                <Nav>
                  <Link to={router.VENUE_LIST}
                    className="nav-link">
                    Venues
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
                  <Route path={router.CONCERT_CREATE}
                    element={<CreateConcert />} />
                  <Route path={router.CONCERT_EDIT + '/:id'}
                    element={<EditConcert />} />
                  <Route path={router.CONCERT_LIST}
                    element={<ConcertList />} />
                  <Route path={router.BAND_CREATE}
                    element={<CreateBand />} />
                  <Route path={router.BAND_EDIT + '/:id'}
                    element={<EditBand />} />
                  <Route path={router.BAND_LIST}
                    element={<BandList />} />
                  <Route path={router.VENUE_CREATE}
                    element={<CreateVenue />} />
                  <Route path={router.VENUE_EDIT + '/:id'}
                    element={<EditVenue />} />
                  <Route path={router.VENUE_LIST}
                    element={<VenueList />} />
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
