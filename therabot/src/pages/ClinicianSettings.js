import React, { useState } from "react";
import { useDarkMode } from '../context/DarkModeContext'; // Adjust the path as necessary

import Eclipse from "../components/Eclipse";

import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  SpeakerXMarkIcon,
  SpeakerWaveIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

function Settings() {
  const [mute, setMute] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  const [voiceVolume, setVoiceVolume] = useState(50);
  const [brightness, setBrightness] = useState(50);

  // Toggle switch component
  const ToggleSwitch = ({ enabled, setEnabled }) => (
    <div
      className={`relative inline-block w-16 h-8 rounded-full transition duration-200 ease-linear ${
        enabled ? "bg-yellow-200 " : "bg-gray-300"
      }`}
      onClick={() => setEnabled(!enabled)} // Moving the click handler here
    >
      <input
        type="checkbox"
        className="opacity-0 absolute"
        checked={enabled}
        readOnly // Since we are handling the click on the div
      />
      <span
        className={`absolute left-0 bottom-0 border-4 w-9 h-9 rounded-full transition transform ${
          enabled
            ? "translate-x-8 border-yellow-400 bg-yellow-200 "
            : "border-white bg-gray-300 translate-x-0"
        }`}
      ></span>
    </div>
  );
  const Slider = ({ value, setValue, iconLeft, iconRight }) => (
    <div className="flex items-center space-x-4">
      <div className=" flex items-center h-12 w-12 dark:text-white "> {iconLeft}</div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="slider-thumb accent-yellow-500 w-full h-4 range- bg-yellow-200  rounded-lg appearance-none cursor-pointer "
      
      
    
      />
      <div className="flex items-center h-12 w-12 dark:text-white "> {iconRight}</div>
    </div>
  );

  const SettingItem = ({ title, description, enabled, setEnabled }) => (
    <div className="flex justify-between items-center my-6 md:my-8">
      <div className="flex flex-col">
        <p className="text-black dark:text-white text-2xl md:text-3xl font-bold">{title}</p>
        <p className="text-xs md:text-sm text-black dark:text-white opacity-50">{description}</p>
      </div>
      <ToggleSwitch enabled={enabled} setEnabled={setEnabled} />
    </div>
  );

  const SliderSetting = ({
    title,
    description,
    value,
    setValue,
    iconLeft,
    iconRight,
  }) => (
    <div className="my-6 md:my-8">
      <p className="text-black dark:text-white text-2xl md:text-3xl font-bold">{title}</p>
      <p className="text-xs md:text-sm text-black dark:text-white opacity-50 mb-2">{description}</p>
      <Slider
        value={value}
        setValue={setValue}
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-SETTINGS_GRADIENT to-white dark:from-purple-600 dark:to-gray-900 min-h-screen">
      <div className="overflow-x-hidden relative justify-center items-center  w-screen ">
        <Eclipse className="bg-SETTINGS_ECLIPSE dark:bg-[#3f1f64] opacity-60" />
        <div className="flex flex-col items-center z-10 relative">
          <div className="flex justify-center items-center relative text-4xl sm:text-5xl font-bold text-white  z-20 pt-4 md:pt-8 ">
            <Link
              to="/clinician-home"
              className="absolute -left-12 sm:-left-20 md:-left-28 text-white"
            >
              <ArrowLeftIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </Link>
            <p className="text-4xl sm:text-5xl"> Settings </p>
          </div>

          <div className="mt-16 w-full px-8">
            <SettingItem
              title="Bluetooth"
              description="Connect to Robot using Bluetooth"
              enabled={mute}
              setEnabled={setMute}
            />
            <SettingItem
              title="Dark Mode"
              description="Change UI theme"
              enabled={darkMode}
              setEnabled={setDarkMode}
            />
            <SettingItem
              title="Notifications"
              description="Allow App Notifications"
              enabled={darkMode}
              setEnabled={setDarkMode}
            />
            <SliderSetting
              title="Voice Volume"
              description="Volume for robot's voice"
              value={voiceVolume}
              setValue={setVoiceVolume}
              iconLeft={<SpeakerXMarkIcon />}
              iconRight={<SpeakerWaveIcon />}
            />
            <SliderSetting
              title="Collar Brightness"
              description="Adjust collar brightness"
              value={brightness}
              setValue={setBrightness}
              iconLeft={<SunIcon />}
              iconRight={<MoonIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
