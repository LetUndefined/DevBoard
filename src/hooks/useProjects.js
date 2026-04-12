import { useState } from "react";
import { supabase } from "../lib/supabase";

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("projects").select();
      if (error) throw error;
      setProjects(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { projects, loading, fetchProjects };
}
