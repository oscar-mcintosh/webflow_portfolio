import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', () => {
  const { public: { apiKey, apiUrl } } = useRuntimeConfig();
  
  const headers = new Headers({
    Authorization: `Bearer ${apiKey}`,
  });

  const config = { headers };
  
  const allProjects = ref([]);
  const currentProject = ref(null);
  const currentProjectIndex = ref(0);
  const nextProject = ref(null);
  const previousProject = ref(null);
  const defaultBgColor = '#2a2c39';
  const isLoading = ref(false);
  const isProjectLoading = ref(false);
  const isInitialized = ref(false);

  const fetchAllProjects = async () => {
    try {
      isLoading.value = true;
      const response = await fetch(apiUrl, config);
      const data = await response.json();
      allProjects.value = data.records.map((record) => ({
        id: record.id,
        name: record.fields.Name,
        image: record.fields.heroImage?.[0]?.url || null,
        fullPage: record.fields.fullPage?.[0]?.url || null,
        link: record.fields.demoLink,
        github: record.fields.githubLink,
        description: record.fields.description,
        technology: record.fields.subtitle,
        bg_color: record.fields.bg_color,
        category: record.fields.category || 'Uncategorized',
        order: record.fields.order || 999,
      })).sort((a, b) => a.order - b.order);
      isInitialized.value = true;
    } catch (error) {
      console.error("Error fetching all projects:", error);
      allProjects.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  const fetchProject = async (id) => {
    try {
      isProjectLoading.value = true;
      const response = await fetch(apiUrl + id, config);
      const data = await response.json();
      currentProject.value = {
        id: data.id,
        name: data.fields.Name,
        image: data.fields.heroImage?.[0]?.url || null,
        fullPage: data.fields.fullPage?.[0]?.url || null,
        link: data.fields.demoLink,
        github: data.fields.githubLink,
        description: data.fields.description,
        technology: data.fields.subtitle,
        bg_color: data.fields.bg_color,
      };
      
      // Find current project index
      currentProjectIndex.value = allProjects.value.findIndex((p) => p.id === id);

      // Set next and previous projects
      if (currentProjectIndex.value > 0) {
        previousProject.value = allProjects.value[currentProjectIndex.value - 1];
      }
      if (currentProjectIndex.value < allProjects.value.length - 1) {
        nextProject.value = allProjects.value[currentProjectIndex.value + 1];
      }
    } catch (error) {
      console.error("Error fetching project:", error);
      return null;
    } finally {
      isProjectLoading.value = false;
    }
  };

  const initializeProject = async (id) => {
    if (!isInitialized.value) {
      await fetchAllProjects();
    }
    await fetchProject(id);
  };

  // Backward compatibility method
  const getProject = async () => {
    if (!isInitialized.value) {
      await fetchAllProjects();
    }
    return allProjects.value;
  };

  // Initialize projects on store creation
  fetchAllProjects();

  return {
    allProjects,
    currentProject,
    currentProjectIndex,
    nextProject,
    previousProject,
    defaultBgColor,
    isLoading,
    isProjectLoading,
    isInitialized,
    initializeProject,
    getProject,
    fetchAllProjects
  };
});

