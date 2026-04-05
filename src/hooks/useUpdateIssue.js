import { supabase } from "../lib/supabase";

export function useUpdateIssue() {
  const updateIssue = async (issueId, issueObject) => {
    try {
      const { error } = await supabase
        .from("issues")
        .update(issueObject)
        .eq("id", issueId);
      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };
  return { updateIssue };
}