import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useEffect } from "react";

export function useIssues() {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    try {
      const { data, error } = await supabase.from("issues").select();
      if (error) throw error;
      setIssues(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchIssues();
  }, []);
  return { issues, fetchIssues };
}
