"use client";
import SelectedHeader from "./components/SelectedHeader";
import SettingsSideBar from "./components/SettingsSideBar";
import { useSelectedElements } from "./contexts/SelectedElementsContext";

export default function Home() {
  const { header } = useSelectedElements();
  return (
    <>
      <SelectedHeader config = {header}/>
      <SettingsSideBar />
    </>
  );
}
