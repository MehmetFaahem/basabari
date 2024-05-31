"use client";
import { Checkbox, ConfigProvider } from "antd";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import geoData from "@/geoData.json";

interface City {
  name: string;
}

interface Division {
  name: string;
  cities: City[];
}

function Page() {
  const router = useRouter();
  const [details, setDetails] = useState({
    country: "",
    city: "",
    division: "",
    area: "",
    totalFloors: "",
    floorForRent: "",
    bathrooms: "",
    diningRooms: "",
    drawingRooms: "",
    balcony: "",
    kitchen: "",
    bedRooms: "",
    totalRent: "",
    rentWithoutBills: "",
    waterBill: "",
    currentBill: "",
    gasBill: "",
    cylinder: false,
    lift: false,
    garage: false,
    securityGuard: false,
    othersCharge: "",
  });

  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [divisions, setDivisions] = useState<any[]>([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countryNames = geoData.countries.map((country) => country.name);
        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (e: any) => {
    const selectedCountry = e.target.value;
    setDetails({ ...details, country: selectedCountry });
    const finded = geoData.countries.find(
      (data) => data.name == selectedCountry
    );
    const divisionNames = finded?.divisions.map((data) => data);
    if (divisionNames) {
      setDivisions(divisionNames);
    }
  };

  const handleCityChange = (e: any) => {
    const selectedCity = e.target.value;
    setDetails({ ...details, city: selectedCity });

    // Fetch division data based on city
    fetch(`https://api.sampleapis.com/divisions?city=${selectedCity}`)
      .then((response) => response.json())
      .then((data) => setDivisions(data));
  };

  const handleDivisionChange = (e: any) => {
    const selectedDivision = e.target.value;
    setDetails({ ...details, division: selectedDivision });

    const finded = divisions.find((data) => data.name === selectedDivision);

    if (finded) {
      const citiesNames = finded.cities.map((city: any) => city);
      setCities(citiesNames);
    } else {
      setCities([]);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/wp-json/custom/v1/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      router.push("/login");
      console.log("Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const inputClass =
    "outline-0 bg-orange-100 text-black mt-[15px] px-[20px] border-2 border-amber-500 w-full h-[70px] rounded-xl text-[20px]";

  return (
    <div className="justify-center py-[100px] items-center flex flex-col">
      <h1 className="text-[40px] font-bold text-amber-600">Add A Flat</h1>
      <div className="mt-[40px] w-[650px]">
        <div className="flex justify-between">
          <div className="w-[48%]">
            <p>Country</p>
            <select
              value={details.country}
              onChange={(e) => handleCountryChange(e)}
              className={inputClass}
            >
              <option value="">Select Country</option>
              {countries?.map((country: any) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="w-[48%]">
            <p>Division</p>
            <select
              value={details.division}
              onChange={(e) => handleDivisionChange(e)}
              className={inputClass}
              disabled={!details.country}
            >
              <option value="">Select Division</option>
              {divisions?.map((division: any) => (
                <option key={division.name} value={division.name}>
                  {division.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-between mt-[20px]">
          <div className="w-[48%]">
            <p>City</p>
            <select
              value={details.city}
              onChange={(e) => handleCityChange(e)}
              className={inputClass}
              disabled={!details.division}
            >
              <option value="">Select City</option>
              {cities?.map((city: any) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="w-[48%]">
            <p>Number of Floor for Rent</p>
            <input
              placeholder="Number of Floor for Rent"
              value={details.floorForRent}
              onChange={(e) =>
                setDetails({ ...details, floorForRent: e.target.value })
              }
              type="number"
              className={inputClass}
            />
          </div>
        </div>
        <div className="flex justify-between mt-[20px]">
          <div className="w-[48%]">
            <p>Number of Bathrooms</p>
            <input
              placeholder="Number of Bathrooms"
              value={details.bathrooms}
              onChange={(e) =>
                setDetails({ ...details, bathrooms: e.target.value })
              }
              type="number"
              className={inputClass}
            />
          </div>
          <div className="w-[48%]">
            <p>Number of Dining Rooms</p>
            <input
              placeholder="Number of Dining Rooms"
              value={details.diningRooms}
              onChange={(e) =>
                setDetails({ ...details, diningRooms: e.target.value })
              }
              type="number"
              className={inputClass}
            />
          </div>
        </div>
        <div className="flex justify-between mt-[20px]">
          <div className="w-[48%]">
            <p>Number of Drawing Rooms</p>
            <input
              placeholder="Number of Drawing Rooms"
              value={details.drawingRooms}
              onChange={(e) =>
                setDetails({ ...details, drawingRooms: e.target.value })
              }
              type="number"
              className={inputClass}
            />
          </div>
          <div className="w-[48%]">
            <p>Number of Balcony</p>
            <input
              placeholder="Number of Balcony"
              value={details.balcony}
              onChange={(e) =>
                setDetails({ ...details, balcony: e.target.value })
              }
              type="number"
              className={inputClass}
            />
          </div>
        </div>
        <div className="flex justify-between mt-[20px]">
          <div className="w-[48%]">
            <p>Number of Kitchen</p>
            <input
              placeholder="Number of Kitchen"
              value={details.kitchen}
              onChange={(e) =>
                setDetails({ ...details, kitchen: e.target.value })
              }
              type="number"
              className={inputClass}
            />
          </div>
          <div className="w-[48%]">
            <p>Number of Bed Rooms</p>
            <input
              placeholder="Number of Bed Rooms"
              value={details.bedRooms}
              onChange={(e) =>
                setDetails({ ...details, bedRooms: e.target.value })
              }
              type="number"
              className={inputClass}
            />
          </div>
        </div>
        <div className="mt-[20px]">
          <p>Total Rent Amount</p>
          <input
            placeholder="Total Rent Amount"
            value={details.totalRent}
            onChange={(e) =>
              setDetails({ ...details, totalRent: e.target.value })
            }
            type="number"
            className={inputClass}
          />
        </div>
        <div className="mt-[20px]">
          <p>Rent Amount Without Bills</p>
          <input
            placeholder="Rent Amount Without Bills"
            value={details.rentWithoutBills}
            onChange={(e) =>
              setDetails({ ...details, rentWithoutBills: e.target.value })
            }
            type="number"
            className={inputClass}
          />
        </div>
        <div className="mt-[20px]">
          <p>Water Bill</p>
          <input
            placeholder="Water Bill"
            value={details.waterBill}
            onChange={(e) =>
              setDetails({ ...details, waterBill: e.target.value })
            }
            type="number"
            className={inputClass}
          />
        </div>
        <div className="mt-[20px]">
          <p>Current Bill</p>
          <input
            placeholder="Current Bill"
            value={details.currentBill}
            onChange={(e) =>
              setDetails({ ...details, currentBill: e.target.value })
            }
            type="number"
            className={inputClass}
          />
        </div>
        <div className="mt-[20px]">
          <p>Gas Bill</p>
          <input
            placeholder="Gas Bill"
            value={details.gasBill}
            onChange={(e) =>
              setDetails({ ...details, gasBill: e.target.value })
            }
            type="number"
            className={inputClass}
          />
        </div>
        <div className="mt-[20px]">
          <p>Cylinder</p>
          <ConfigProvider
            theme={{
              token: {
                colorPrimaryActive: "#D97706",
                colorPrimary: "#D97706",
              },
            }}
          >
            <Checkbox
              value={details.cylinder}
              onChange={() =>
                setDetails({ ...details, cylinder: !details.cylinder })
              }
              className="mt-4"
            >
              Cylinder
            </Checkbox>
          </ConfigProvider>
        </div>
        <div className="mt-[20px]">
          <p>Lift</p>
          <ConfigProvider
            theme={{
              token: {
                colorPrimaryActive: "#D97706",
                colorPrimary: "#D97706",
              },
            }}
          >
            <Checkbox
              value={details.lift}
              onChange={() => setDetails({ ...details, lift: !details.lift })}
              className="mt-4"
            >
              Lift
            </Checkbox>
          </ConfigProvider>
        </div>
        <div className="mt-[20px]">
          <p>Garage</p>
          <ConfigProvider
            theme={{
              token: {
                colorPrimaryActive: "#D97706",
                colorPrimary: "#D97706",
              },
            }}
          >
            <Checkbox
              value={details.garage}
              onChange={() =>
                setDetails({ ...details, garage: !details.garage })
              }
              className="mt-4"
            >
              Garage
            </Checkbox>
          </ConfigProvider>
        </div>
        <div className="mt-[20px]">
          <p>Security Guard</p>
          <ConfigProvider
            theme={{
              token: {
                colorPrimaryActive: "#D97706",
                colorPrimary: "#D97706",
              },
            }}
          >
            <Checkbox
              value={details.securityGuard}
              onChange={() =>
                setDetails({
                  ...details,
                  securityGuard: !details.securityGuard,
                })
              }
              className="mt-4"
            >
              Security Guard
            </Checkbox>
          </ConfigProvider>
        </div>
        <div className="mt-[20px]">
          <p>Others Charge</p>
          <input
            placeholder="Others Charge"
            value={details.othersCharge}
            onChange={(e) =>
              setDetails({ ...details, othersCharge: e.target.value })
            }
            type="number"
            className={inputClass}
          />
        </div>
        <button
          className="w-full mt-[20px] transition-all hover:scale-105 text-[20px] text-white bg-amber-600 h-[50px] rounded-xl"
          onClick={handleRegister}
        >
          <p>Register</p>
        </button>
        <div className="mt-[14px]">
          <p>
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="cursor-pointer text-amber-600 hover:scale-105"
            >
              Login Now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
