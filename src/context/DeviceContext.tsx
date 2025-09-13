import {
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
  ReactNode,
} from "react";

interface DeviceContextType {
  isMobile: boolean;
}

const DeviceContext = createContext<DeviceContextType>({ isMobile: false });

export const useDevice = () => useContext(DeviceContext);

interface DeviceProviderProps {
  children: ReactNode;
}

export const DeviceProvider: FC<DeviceProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};
