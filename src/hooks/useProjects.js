import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("projects").select();
        if (error) throw error;
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
    setLoading(false);
  }, []);

  return { projects, loading };
}
