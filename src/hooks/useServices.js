import { useState, useEffect } from "react";
import apiHelper from "../api/apiHelper";
import { notyf } from "../utils/toast";

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await apiHelper.get("services/services/");
        setServices(response.data);
      } catch (err) {
        console.error("Error fetching services:", err);
        notyf.error("Failed to load services. Please try again later.");
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};
