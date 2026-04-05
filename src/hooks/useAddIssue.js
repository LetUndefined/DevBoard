import { supabase } from "../lib/supabase";

export function useAddIssue() {
  const addNewIssue = async (issue) => {
    try {
      const { error } = await supabase.from("issues").insert(issue);
      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };
  return { addNewIssue };
}
