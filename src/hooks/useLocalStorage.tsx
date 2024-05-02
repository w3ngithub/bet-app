"use client";
import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
  const [storageData, setStorageData] = useState(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON?.parse(value);
      } else return [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setStorageData(
          event.newValue !== null ? JSON.parse(event.newValue) : null
        );
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  useEffect(() => {
    if (storageData) {
      localStorage?.setItem(key, JSON.stringify(storageData));
    }
  }, [key, storageData]);

  const updateStorage = (data: any) => {
    const local: any = localStorage.getItem(key);
    let locaData: any[] = local ? JSON.parse(local) : [];
    if (!data?.title) {
      setStorageData([...locaData]);
      return;
    }
    const isDuplicate = locaData.some(
      (item: any) => item?.title === data?.title
    );

    if (isDuplicate) {
      setStorageData([...locaData]);
      return;
    }

    const newData = [...locaData, data];
    setStorageData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  return [storageData, setStorageData, updateStorage];
}
