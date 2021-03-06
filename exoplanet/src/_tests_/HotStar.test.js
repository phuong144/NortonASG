import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HotStar from '../components/HotStar';

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

it("Tests planet with hottest star", async () => {
  const fakePlanets = [
    {
      "PlanetIdentifier": "KOI-1843.03",
      "TypeFlag": 3,
      "PlanetaryMassJpt": 0.0014,
      "RadiusJpt": 0.054,
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
      "HostStarTempK": 3582,
      "HostStarAgeGyr": ""
    },
    {
      "PlanetIdentifier": "KOI-1843.01",
      "TypeFlag": 3,
      "PlanetaryMassJpt": "",
      "RadiusJpt": 0.114,
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
      "DiscoveryYear": "",
      "LastUpdated": "",
      "RightAscension": "19 00 03.14",
      "Declination": "+40 13 14.7",
      "DistFromSunParsec": "",
      "HostStarMassSlrMass": 0.46,
      "HostStarRadiusSlrRad": 0.45,
      "HostStarMetallicity": 0,
      "HostStarTempK": 3583,
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
      "DiscoveryYear": "",
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
    render(<HotStar data={fakePlanets} />, container);
  });

  expect(container.querySelector("h2").textContent).toBe("KOI-1843.02");

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});