import { supabase } from '../lib/supabase';

export async function appLoader() {
  try {
    const { data: issues, error: issuesError } = await supabase.from("issues").select();
    const { data: projects, error: projectsError } = await supabase.from("projects").select();

    if (issuesError) throw issuesError;
    if (projectsError) throw projectsError;

    return { issues, projects };
  } catch (error) {
    console.error("Failed to load data:", error);
    return { issues: [], projects: [] };
  }
}
