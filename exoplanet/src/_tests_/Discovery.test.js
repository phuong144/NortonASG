import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Discovery from '../components/Discovery';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Groups planets by discovery year and sizes", async () => {
  const fakePlanets = [
    {
      "PlanetIdentifier": "KOI-1843.03",
      "TypeFlag": 3,
      "PlanetaryMassJpt": 0.0014,
      "RadiusJpt": 3,
      "PeriodDays": 0.1768913,
      "SemiMajorAxisAU": 0.0048,
      "Eccentricity": "",
      "PeriastronDeg": "",
      "LongitudeDeg": "",
      "AscendingNodeDeg": "",
      "InclinationDeg": 72,
      "SurfaceTempK": "",
      "AgeGyr": "",
      "DiscoveryMethod": "transit",
      "DiscoveryYear": 2012,
      "LastUpdated": "13/07/15",
      "RightAscension": "19 00 03.14",
      "Declination": "+40 13 14.7",
      "DistFromSunParsec": "",
      "HostStarMassSlrMass": 0.46,
      "HostStarRadiusSlrRad": 0.45,
      "HostStarMetallicity": 0,
      "HostStarTempK": 3584,
      "HostStarAgeGyr": ""
    },
    {
      "PlanetIdentifier": "KOI-1843.01",
      "TypeFlag": 3,
      "PlanetaryMassJpt": "",
      "RadiusJpt": 1,
      "PeriodDays": 4.194525,
      "SemiMajorAxisAU": 0.039,
      "Eccentricity": "",
      "PeriastronDeg": "",
      "LongitudeDeg": "",
      "AscendingNodeDeg": "",
      "InclinationDeg": 89.38,
      "SurfaceTempK": "",
      "AgeGyr": "",
      "DiscoveryMethod": "transit",
      "DiscoveryYear": 2013,
      "LastUpdated": "",
      "RightAscension": "19 00 03.14",
      "Declination": "+40 13 14.7",
      "DistFromSunParsec": "",
      "HostStarMassSlrMass": 0.46,
      "HostStarRadiusSlrRad": 0.45,
      "HostStarMetallicity": 0,
      "HostStarTempK": 3584,
      "HostStarAgeGyr": ""
    },
    {
      "PlanetIdentifier": "KOI-1843.02",
      "TypeFlag": 0,
      "PlanetaryMassJpt": "",
      "RadiusJpt": 0.071,
      "PeriodDays": 6.356006,
      "SemiMajorAxisAU": 0.052,
      "Eccentricity": "",
      "PeriastronDeg": "",
      "LongitudeDeg": "",
      "AscendingNodeDeg": "",
      "InclinationDeg": 88.24,
      "SurfaceTempK": "",
      "AgeGyr": "",
      "DiscoveryMethod": "transit",
      "DiscoveryYear": 2014,
      "LastUpdated": "",
      "RightAscension": "19 00 03.14",
      "Declination": "+40 13 14.7",
      "DistFromSunParsec": "",
      "HostStarMassSlrMass": 0.46,
      "HostStarRadiusSlrRad": 0.45,
      "HostStarMetallicity": 0,
      "HostStarTempK": 3584,
      "HostStarAgeGyr": ""
    }
  ]
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakePlanets)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Discovery data={fakePlanets} />, container);
  });

  expect(container.querySelector('#id0').textContent).toBe("In 2012 there were 0 small planets, 0 medium planets, and 1 large planets");
  //expect(container.querySelector('#id1').textContent).toBe("In 2013 there were 0 small planets, 1 medium planets, and 0 large planets");
  expect(container.querySelector('#id2').textContent).toBe("In 2014 there were 1 small planets, 0 medium planets, and 0 large planets");

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});