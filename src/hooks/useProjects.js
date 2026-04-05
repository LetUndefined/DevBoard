import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase.from("projects").select();
        if (error) throw error;
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, []);

  return projects;
}
