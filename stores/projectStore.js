import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: [],
  }),
  actions: {
      async getProject() {

      try {
        const { public: { apiKey, apiUrl } } = useRuntimeConfig();

        const headers = new Headers({
          'Authorization': `Bearer ${apiKey}`,
        });

        const config = { headers };

        const response = await fetch(apiUrl, config);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const listOfProjects = data.records.map(record => ({
          id: record.id,
          name: record.fields.Name,
          image: record.fields.heroImage?.[0]?.url || null,
          link: record.fields.demoLink,
          status: record.fields.status,
          fullPage: record.fields.fullPage?.[0]?.url || null,
          subtitle: record.fields.subtitle,
          category: [record.fields.categories],
        }));

        this.projects = listOfProjects;

      } catch (error) {
        alert.error('Error fetching data:', error);
      }
    },
  },
});

