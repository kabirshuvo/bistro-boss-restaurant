import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, SetMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        SetMenu(data);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};

export default useMenu;
