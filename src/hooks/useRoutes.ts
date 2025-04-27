import { useState } from "react";
import { useLocation } from "react-router-dom";

export const useRoutes = () => {
  const location = useLocation();
  const [paths, setPaths] = useState<string[]>([]);

  console.log(location);

  return paths;
};