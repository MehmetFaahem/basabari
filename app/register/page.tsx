"use client";
import { Checkbox, ConfigProvider } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [details, setDetails] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    familyMembers: "",
    currentLocation: "",
    profession: "",
    religion: "",
    currentSalary: "",
    reasonForLeaving: "",
  });

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

  return (
    <div className="justify-center py-[100px] items-center flex flex-col">
      <h1 className="text-[40px] font-bold text-amber-600">Register</h1>
      <div className="mt-[40px] w-[650px]">
        <div className="flex justify-between">
          <div className="w-[48%]">
            <p>Full Name</p>
            <input
              placeholder="Full Name"
              value={details.fullName}
              onChange={(e) =>
                setDetails({ ...details, fullName: e.target.value })
              }
              type="text"
              className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-full h-[70px] rounded-xl text-[20px]"
            />
          </div>
          <div className="w-[48%]">
            <p>Username</p>
            <input
              placeholder="Username"
              value={details.username}
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              type="text"
              className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-full h-[70px] rounded-xl text-[20px]"
            />
          </div>
        </div>
        <div className="flex justify-between mt-[20px]">
          <div className="w-[48%]">
            <p>Email</p>
            <input
              placeholder="Email"
              value={details.email}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              type="email"
              className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-full h-[70px] rounded-xl text-[20px]"
            />
          </div>
          <div className="w-[48%]">
            <p>Phone Number</p>
            <input
              placeholder="Phone Number"
              value={details.phoneNumber}
              onChange={(e) =>
                setDetails({ ...details, phoneNumber: e.target.value })
              }
              type="text"
              className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-full h-[70px] rounded-xl text-[20px]"
            />
          </div>
        </div>
        <div className="flex justify-between mt-[20px]">
          <div className="w-[48%]">
            <p>Password</p>
            <input
              placeholder="Password"
              value={details.password}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              type={showPass ? "text" : "password"}
              className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-full h-[70px] rounded-xl text-[20px]"
            />
            <ConfigProvider
              theme={{
                token: {
                  colorPrimaryActive: "#D97706",
                  colorPrimary: "#D97706",
                },
              }}
            >
              <Checkbox
                value={showPass}
                onChange={() => setShowPass(!showPass)}
                className="mt-4"
              >
                Show Password
              </Checkbox>
            </ConfigProvider>
          </div>
          <div className="w-[48%]">
            <p>Number of Family Members</p>
            <input
              placeholder="Family Members"
              value={details.familyMembers}
              onChange={(e) =>
                setDetails({ ...details, familyMembers: e.target.value })
              }
              type="number"
              className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-full h-[70px] rounded-xl text-[20px]"
            />
          </div>
        </div>
        <div className="flex justify-between mt-[20px]">
          <div className="w-[48%]">
            <p>Current Location</p>
            <input
              placeholder="Current Location"
              value={details.currentLocation}
              onChange={(e) =>
                setDetails({ ...details, currentLocation: e.target.value })
              }
              type="text"
              className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-full h-[70px] rounded-xl text-[20px]"
            />
          </div>
          <div className="w-[48%]">
            <p>Profession</p>
            <input
              placeholder="Profession"
              value={details.profession}
              onChange={(e) =>
                setDetails({ ...details, profession: e.target.value })
              }
              type="text"
              className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-full h-[70px] rounded-xl text-[20px]"
            />
          </div>
        </div>
        <div className="flex justify-between mt-[20px]">
          <div className="w-[48%]">
            <p>Religion</p>
            <input
              placeholder="Religion"
              value={details.religion}
              onChange={(e) =>
                setDetails({ ...details, religion: e.target.value })
              }
              type="text"
              className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-full h-[70px] rounded-xl text-[20px]"
            />
          </div>
          <div className="w-[48%]">
            <p>Current Salary (Monthly)</p>
            <input
              placeholder="Current Salary"
              value={details.currentSalary}
              onChange={(e) =>
                setDetails({ ...details, currentSalary: e.target.value })
              }
              type="number"
              className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-full h-[70px] rounded-xl text-[20px]"
            />
          </div>
        </div>
        <div className="mt-[20px]">
          <p>Reason for Leaving Previous Home</p>
          <textarea
            placeholder="Reason for Leaving"
            value={details.reasonForLeaving}
            onChange={(e) =>
              setDetails({ ...details, reasonForLeaving: e.target.value })
            }
            className="outline-0 mt-[15px] px-[20px] py-[10px] border-2 border-amber-500 w-full h-[100px] rounded-xl text-[20px]"
          />
        </div>
        <button
          onClick={handleRegister}
          className="w-full mt-[20px] transition-all hover:scale-105 text-[20px] text-white bg-amber-600 h-[50px] rounded-xl"
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
