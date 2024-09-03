"use client";

import SelectedHeader from "./components/SelectedHeader";
import SettingsSideBar from "./components/SettingsSideBar";
import { useSelectedElements } from "./contexts/SelectedElementsContext";
import { useState } from 'react';

export default function Home() {
  const { header } = useSelectedElements();
  const [open, setOpen] = useState(true);
  return (
    <>
      <SelectedHeader config = {header} />
      <SettingsSideBar open={open} setOpen={setOpen}/>
    </>
  );
}
